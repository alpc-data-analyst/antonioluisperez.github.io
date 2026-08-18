/**
 * Endpoint del formulario de contacto.
 *
 * Lo invoca src/index.js cuando entra un POST a /api/contacto. El sitio se
 * despliega como Worker con activos estaticos, no como proyecto de Pages,
 * asi que aqui no vale la convencion de carpeta functions/: el enrutado es
 * explicito en el punto de entrada.
 *
 * Por qué hace falta un servicio de correo por detrás: un Worker no puede
 * hablar SMTP, así que el envío pasa por la API de Resend. La ventaja frente
 * a un formulario alojado de terceros es que LA CLAVE NUNCA SALE DE AQUÍ:
 * vive como secreto en Cloudflare, no en el JavaScript que descarga
 * cualquiera. MailChannels, que era la opción gratuita clásica, cerró su
 * integración con Workers en junio de 2024.
 *
 * Variables de entorno (Cloudflare > Pages > Settings > Variables):
 *   RESEND_API_KEY    secreto, obligatoria
 *   CONTACT_TO        destino, por defecto alpcmalaga@gmail.com
 *   CONTACT_FROM      remitente verificado en Resend
 *   TURNSTILE_SECRET  opcional; si existe, se exige captcha invisible
 */

const LIMITES = { nombre: 120, empresa: 160, email: 190, asunto: 40, mensaje: 5000 };

const json = (datos, estado) => new Response(JSON.stringify(datos), {
    status: estado,
    headers: { 'Content-Type': 'application/json; charset=utf-8' }
});

const limpio = (valor, tope) => String(valor || '').trim().slice(0, tope);

// Evita que alguien inyecte cabeceras extra colando un salto de línea en el
// asunto del correo
const unaLinea = (texto) => texto.replace(/[\r\n]+/g, ' ');

const escapa = (texto) => texto
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

async function pasaTurnstile(token, secreto, ip) {
    const cuerpo = new FormData();
    cuerpo.append('secret', secreto);
    cuerpo.append('response', token || '');
    if (ip) cuerpo.append('remoteip', ip);

    const r = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
        method: 'POST',
        body: cuerpo
    });
    const datos = await r.json();
    return datos.success === true;
}

export async function manejaContacto(request, env) {
    // Solo se aceptan envíos desde la propia web. No es una barrera seria
    // contra alguien decidido, pero descarta el ruido automatizado.
    const origen = request.headers.get('Origin') || '';
    const anfitrion = new URL(request.url).origin;
    if (origen && origen !== anfitrion) {
        return json({ ok: false, error: 'origen' }, 403);
    }

    let campos;
    try {
        campos = await request.formData();
    } catch (e) {
        return json({ ok: false, error: 'formato' }, 400);
    }

    // El campo trampa: invisible para personas, irresistible para scripts.
    // Se responde 200 a propósito, para que el bot se marche convencido y no
    // vuelva a probar con otra estrategia.
    if (limpio(campos.get('website'), 50)) {
        return json({ ok: true }, 200);
    }

    if (env.TURNSTILE_SECRET) {
        const ip = request.headers.get('CF-Connecting-IP');
        const valido = await pasaTurnstile(campos.get('cf-turnstile-response'), env.TURNSTILE_SECRET, ip);
        if (!valido) return json({ ok: false, error: 'captcha' }, 400);
    }

    const nombre = limpio(campos.get('nombre'), LIMITES.nombre);
    const empresa = limpio(campos.get('empresa'), LIMITES.empresa);
    const email = limpio(campos.get('email'), LIMITES.email);
    const asunto = limpio(campos.get('asunto'), LIMITES.asunto);
    const mensaje = limpio(campos.get('mensaje'), LIMITES.mensaje);
    const idioma = limpio(campos.get('idioma'), 5) || 'es';

    if (!nombre || !mensaje || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
        return json({ ok: false, error: 'campos' }, 400);
    }

    if (!env.RESEND_API_KEY) {
        return json({ ok: false, error: 'sin_configurar' }, 500);
    }

    const pais = request.headers.get('CF-IPCountry') || 'desconocido';
    const filas = [
        ['Nombre', nombre],
        ['Empresa', empresa || 'no indicada'],
        ['Email', email],
        ['Necesita', asunto || 'no indicado'],
        ['Idioma', idioma],
        ['País', pais]
    ].map(([k, v]) => `<tr><td style="padding:4px 14px 4px 0;color:#666">${k}</td><td style="padding:4px 0"><b>${escapa(v)}</b></td></tr>`).join('');

    const html = `<div style="font-family:system-ui,sans-serif;font-size:15px;line-height:1.55">
<table style="border-collapse:collapse;margin-bottom:18px">${filas}</table>
<div style="border-left:3px solid #2cff05;padding-left:14px;white-space:pre-wrap">${escapa(mensaje)}</div>
</div>`;

    try {
        const envio = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${env.RESEND_API_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                from: env.CONTACT_FROM || 'Web <onboarding@resend.dev>',
                to: [env.CONTACT_TO || 'alpcmalaga@gmail.com'],
                // Responder al correo lleva directo al cliente, sin copiar
                // la dirección a mano
                reply_to: email,
                subject: unaLinea(`Contacto web: ${nombre}${empresa ? ' (' + empresa + ')' : ''}`),
                html: html
            })
        });

        if (!envio.ok) {
            const detalle = await envio.text();
            console.log('Resend ha fallado:', envio.status, detalle);
            return json({ ok: false, error: 'envio' }, 502);
        }
    } catch (e) {
        console.log('No se ha podido contactar con Resend:', e.message);
        return json({ ok: false, error: 'red' }, 502);
    }

    return json({ ok: true }, 200);
}

export { json };
