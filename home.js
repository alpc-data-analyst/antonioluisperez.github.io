/* =============================================================
   Home: "Encuentra el fallo" y la trayectoria que se dibuja al
   hacer scroll. Solo lo carga index.html, detras de script.js.

   El juego usa datos inventados y la pagina lo dice: son 8 semanas
   de sesiones de una tienda con su ritmo de fin de semana, un pico
   de newsletter que no es un fallo y una caida del 42 % el dia 38
   que no se recupera.
   ============================================================= */

(() => {
    'use strict';

    const TXT = {
        es: {
            semana: 'Sem',
            dia: 'Día',
            sesiones: 'sesiones',
            esperado: 'lo que GA4 ya no ve',
            // Cada pista es [titulo, texto]
            pico: ['Eso es la newsletter', 'El pico del día 18 sube y vuelve, así que no es un fallo. Busca un cambio que no se recupere.'],
            finde: ['Es fin de semana', 'Baja todos los sábados y domingos y luego vuelve.'],
            antes: ['Todavía no', 'Aquí todo cuadra con las semanas anteriores. Busca dónde cambia el nivel y ya no vuelve.'],
            despues: ['Caliente', 'Aquí ya estaba roto. Busca el primer día de la caída.'],
            encontrado: (n) => (n === 1 ? '¡Ahí está, y a la primera!' : `¡Ahí está! Lo has encontrado en ${n} intentos`),
            solucion: 'La solución está en el día 38',
            diagnostico: 'El día 38 se puso un banner de cookies nuevo, con el botón de rechazar a la misma altura que el de aceptar. Con Consent Mode en modo básico, GA4 no recibe nada de quien rechaza. Las visitas siguen ahí. Lo que ha caído es lo que GA4 puede ver, en este ejemplo un 42 %.',
            arreglo: 'Cómo se monta bien Consent Mode →'
        },
        en: {
            semana: 'Wk',
            dia: 'Day',
            sesiones: 'sessions',
            esperado: 'what GA4 no longer sees',
            pico: ['That is the newsletter', 'The day 18 spike goes up and comes back, so it is not a bug. Look for a change that never recovers.'],
            finde: ["It's the weekend", 'Traffic drops every Saturday and Sunday and then comes back.'],
            antes: ['Not yet', 'Everything here matches the previous weeks. Look for where the level changes and never comes back.'],
            despues: ['Warm', 'It was already broken here. Look for the first day of the drop.'],
            encontrado: (n) => (n === 1 ? 'There it is, first try!' : `There it is! You found it in ${n} tries`),
            solucion: 'The answer is day 38',
            diagnostico: 'On day 38 a new cookie banner went live, with the reject button as easy to click as accept. With Consent Mode in basic mode, GA4 receives nothing from people who reject. The visits are still there. What dropped is what GA4 can see, 42% in this example.',
            arreglo: 'How to set up Consent Mode properly (in Spanish) →'
        }
    };
    const t = () => TXT[document.documentElement.lang === 'en' ? 'en' : 'es'];
    const numero = (n) => n.toLocaleString(document.documentElement.lang === 'en' ? 'en' : 'es-ES');
    const reducido = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Mismo formato que el track() de script.js
    const track = (event, params) => {
        try {
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push(Object.assign({ event: event, site_language: document.documentElement.lang || 'es' }, params));
        } catch (e) { /* medir nunca rompe la pagina */ }
    };

    /* ---------- Encuentra el fallo ---------- */
    const DIAS = 56;
    const PICO = 18;
    const ROTURA = 38;
    const CAIDA = 0.58;

    // Datos fijos: el ruido sale de senos, no de Math.random, para que la
    // grafica sea la misma en cada visita
    const esperado = [];
    const datos = [];
    for (let d = 1; d <= DIAS; d++) {
        const finde = (d - 1) % 7 >= 5;
        let v = (finde ? 960 : 1420) + Math.round(Math.sin(d * 1.7) * 55 + Math.cos(d * 0.9) * 35);
        if (d === PICO) v += 980;
        esperado.push(v);
        datos.push(d >= ROTURA ? Math.round(v * CAIDA) : v);
    }

    const initFallo = () => {
        const chart = document.getElementById('fallo-chart');
        if (!chart) return;
        const caja = chart.parentElement;
        const msg = document.getElementById('fallo-msg');
        const boton = document.getElementById('fallo-reveal');
        const chispa = document.getElementById('fallo-chispa');
        const NS = 'http://www.w3.org/2000/svg';

        let cursorDia = null;
        let intentos = 0;
        let resuelto = null; // 'found' o 'revealed' cuando se acaba el juego
        let geo = null;
        const fallos = []; // dias pinchados que no eran, para tacharlos

        const el = (tag, attrs, padre) => {
            const n = document.createElementNS(NS, tag);
            Object.entries(attrs).forEach(([k, v]) => n.setAttribute(k, v));
            if (padre) padre.appendChild(n);
            return n;
        };

        const pintar = () => {
            const W = chart.clientWidth;
            const H = W < 600 ? 250 : 330;
            const m = { l: 48, r: 16, t: 18, b: 34 };
            const pw = W - m.l - m.r;
            const ph = H - m.t - m.b;
            const yMax = 2600;
            const x = (i) => m.l + (i * pw) / (DIAS - 1);
            const y = (v) => m.t + ph - (v / yMax) * ph;
            geo = { W, H, m, pw, ph, x, y };

            chart.querySelectorAll('svg, .fallo__tip').forEach((n) => n.remove());
            const svg = el('svg', { viewBox: `0 0 ${W} ${H}`, width: W, height: H, 'aria-hidden': 'true' }, chart);

            // Rejilla y eje Y
            [0, 500, 1000, 1500, 2000, 2500].forEach((v) => {
                el('line', { x1: m.l, x2: W - m.r, y1: y(v), y2: y(v), class: 'fallo__grid' }, svg);
                const tx = el('text', { x: m.l - 8, y: y(v) + 4, class: 'fallo__axis', 'text-anchor': 'end' }, svg);
                tx.textContent = numero(v);
            });
            // Semanas en el eje X
            for (let w = 0; w < DIAS / 7; w++) {
                const tx = el('text', { x: x(w * 7 + 3), y: H - 10, class: 'fallo__axis', 'text-anchor': 'middle' }, svg);
                // En movil no caben "Sem 1"... seguidas: se quedan en S1, S2...
                tx.textContent = W < 600 ? `${t().semana.charAt(0)}${w + 1}` : `${t().semana} ${w + 1}`;
            }

            // Lo roto, en fosforito, y lo que GA4 deberia ver, discontinuo
            const banda = el('rect', { x: x(ROTURA - 1) - pw / (DIAS - 1) / 2, y: m.t, width: W - m.r - (x(ROTURA - 1) - pw / (DIAS - 1) / 2), height: ph, class: 'fallo__band' }, svg);
            const esp = el('path', { d: esperado.slice(ROTURA - 2).map((v, i) => `${i ? 'L' : 'M'}${x(ROTURA - 2 + i)},${y(v)}`).join(' '), class: 'fallo__expected' }, svg);
            // El rotulo va por encima del tramo mas alto de la linea discontinua
            const lbl = el('text', { x: W - m.r - 4, y: y(Math.max(...esperado.slice(-10))) - 14, class: 'fallo__expected-label', 'text-anchor': 'end' }, svg);
            lbl.textContent = t().esperado;
            [banda, esp, lbl].forEach((n) => n.classList.add('fallo__solucion'));

            el('path', { d: datos.map((v, i) => `${i ? 'L' : 'M'}${x(i)},${y(v)}`).join(' '), class: 'fallo__line' }, svg);
            fallos.forEach(tachar);

            // Cursor
            const g = el('g', { class: 'fallo__cursor' }, svg);
            el('line', { y1: m.t, y2: m.t + ph, class: 'fallo__cursor-line' }, g);
            el('circle', { r: 6, class: 'fallo__cursor-dot' }, g);

            const tip = document.createElement('div');
            tip.className = 'fallo__tip';
            tip.hidden = true;
            chart.appendChild(tip);

            svg.addEventListener('pointermove', (e) => mover(diaDesde(e)));
            svg.addEventListener('pointerleave', () => { if (document.activeElement !== chart) ocultar(); });
            svg.addEventListener('click', (e) => elegir(diaDesde(e)));

            caja.classList.toggle('is-found', resuelto);
            if (resuelto) colocarChispa();
            if (cursorDia !== null) mover(cursorDia);
        };

        const diaDesde = (e) => {
            const r = chart.getBoundingClientRect();
            const px = e.clientX - r.left;
            const i = Math.round(((px - geo.m.l) / geo.pw) * (DIAS - 1));
            return Math.max(1, Math.min(DIAS, i + 1));
        };

        const mover = (dia) => {
            cursorDia = dia;
            const g = chart.querySelector('.fallo__cursor');
            const tip = chart.querySelector('.fallo__tip');
            const cx = geo.x(dia - 1);
            const cy = geo.y(datos[dia - 1]);
            g.querySelector('line').setAttribute('x1', cx);
            g.querySelector('line').setAttribute('x2', cx);
            g.querySelector('circle').setAttribute('cx', cx);
            g.querySelector('circle').setAttribute('cy', cy);
            g.classList.add('is-on');
            tip.textContent = `${t().dia} ${dia}, ${numero(datos[dia - 1])} ${t().sesiones}`;
            tip.hidden = false;
            // El globo no se sale de la grafica por los lados
            const ancho = tip.offsetWidth;
            tip.style.left = `${Math.max(0, Math.min(geo.W - ancho, cx - ancho / 2))}px`;
            tip.style.top = `${Math.max(0, cy - 44)}px`;
        };

        const ocultar = () => {
            const g = chart.querySelector('.fallo__cursor');
            if (g) g.classList.remove('is-on');
            const tip = chart.querySelector('.fallo__tip');
            if (tip) tip.hidden = true;
        };

        // Chispa se asoma arriba del todo de la franja, justo despues del dia roto
        const colocarChispa = () => {
            chispa.style.left = `${chart.offsetLeft + geo.x(ROTURA - 1) + 6}px`;
            chispa.style.top = `${chart.offsetTop + geo.m.t + 4}px`;
        };

        // El mensaje es una caja con titulo y texto. Cada vez que cambia vuelve
        // a entrar con su animacion, para que se note aunque diga lo mismo.
        const mostrar = (titulo, texto, tipo, enlace) => {
            msg.textContent = '';
            const h = document.createElement('strong');
            h.className = 'fallo__msg-title';
            h.textContent = titulo;
            const p = document.createElement('p');
            p.textContent = texto;
            msg.append(h, p);
            if (enlace) {
                const a = document.createElement('a');
                a.href = 'blog/consent-mode-v2';
                a.textContent = t().arreglo;
                p.append(' ', a);
            }
            msg.className = `fallo__msg is-${tipo}`;
            void msg.offsetWidth;
            msg.classList.add('is-in');
            // En movil el mensaje puede quedar por debajo de la pantalla
            const r = msg.getBoundingClientRect();
            if (r.bottom > window.innerHeight) msg.scrollIntoView({ block: 'nearest', behavior: reducido ? 'auto' : 'smooth' });
        };

        let ultimaPista = null;
        const pista = () => mostrar(t()[ultimaPista][0], t()[ultimaPista][1], 'hint');
        const diagnostico = () => mostrar(resuelto === 'found' ? t().encontrado(intentos) : t().solucion, t().diagnostico, 'ok', true);

        // Una cruz de boli en cada dia que no era
        const tachar = (dia) => {
            const svg = chart.querySelector('svg');
            const cx = geo.x(dia - 1);
            const cy = geo.y(datos[dia - 1]);
            const g = el('g', { class: 'fallo__miss' }, svg);
            el('path', { d: `M${cx - 7},${cy - 7} L${cx + 7},${cy + 7} M${cx + 7},${cy - 7} L${cx - 7},${cy + 7}` }, g);
        };

        const resolver = (encontrado) => {
            resuelto = encontrado ? 'found' : 'revealed';
            caja.classList.add('is-found');
            chispa.hidden = false;
            colocarChispa();
            boton.hidden = true;
            diagnostico();
            track('diagnosis_game', { game_result: resuelto, game_attempts: intentos });
        };

        const elegir = (dia) => {
            if (resuelto) return;
            intentos++;
            if (dia >= ROTURA - 1 && dia <= ROTURA + 1) return resolver(true);
            ultimaPista = 'antes';
            if (Math.abs(dia - PICO) <= 1) ultimaPista = 'pico';
            else if (dia > ROTURA + 1) ultimaPista = 'despues';
            else if ((dia - 1) % 7 >= 5) ultimaPista = 'finde';
            if (!fallos.includes(dia)) { fallos.push(dia); tachar(dia); }
            pista();
        };

        chart.addEventListener('keydown', (e) => {
            const pasos = { ArrowLeft: -1, ArrowRight: 1, PageUp: -7, PageDown: 7 };
            let dia = cursorDia || 1;
            if (e.key in pasos) dia += pasos[e.key];
            else if (e.key === 'Home') dia = 1;
            else if (e.key === 'End') dia = DIAS;
            else if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); elegir(dia); return; }
            else return;
            e.preventDefault();
            mover(Math.max(1, Math.min(DIAS, dia)));
        });
        chart.addEventListener('focus', () => mover(cursorDia || 1));
        chart.addEventListener('blur', ocultar);
        boton.addEventListener('click', () => resolver(false));

        pintar();
        let tick = 0;
        window.addEventListener('resize', () => { cancelAnimationFrame(tick); tick = requestAnimationFrame(pintar); });
        // Al cambiar de idioma se repintan los ejes y, si ya estaba resuelto, el diagnostico
        new MutationObserver(() => {
            pintar();
            if (resuelto) diagnostico();
            else if (ultimaPista) pista();
        }).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
    };

    /* ---------- La trayectoria ---------- */
    // La linea pasa por el punto de cada etapa y se dibuja segun avanza el
    // scroll: una mascara blanca que crece deja ver la linea discontinua.
    const initTrayectoria = () => {
        const caja = document.getElementById('trayectoria');
        if (!caja) return;
        const svg = caja.querySelector('.path__svg');
        const linea = caja.querySelector('.path__line');
        const mascara = caja.querySelector('.path__mask');
        const etapas = Array.from(caja.querySelectorAll('.path__step'));
        let largo = 0;
        let hitos = [];

        caja.classList.add('is-js');

        const curva = (pts, vertical) => {
            let d = `M${pts[0][0]},${pts[0][1]}`;
            for (let i = 1; i < pts.length; i++) {
                const [x0, y0] = pts[i - 1];
                const [x1, y1] = pts[i];
                if (vertical) {
                    const my = (y0 + y1) / 2;
                    const w = i % 2 ? 26 : -26;
                    d += ` C${x0 + w},${my} ${x1 + w},${my} ${x1},${y1}`;
                } else {
                    const mx = (x0 + x1) / 2;
                    d += ` C${mx},${y0} ${mx},${y1} ${x1},${y1}`;
                }
            }
            return d;
        };

        const trazar = () => {
            const r = caja.getBoundingClientRect();
            svg.setAttribute('width', r.width);
            svg.setAttribute('height', r.height);
            svg.setAttribute('viewBox', `0 0 ${r.width} ${r.height}`);
            const pts = etapas.map((s) => {
                const p = s.querySelector('.path__dot').getBoundingClientRect();
                return [p.left + p.width / 2 - r.left, p.top + p.height / 2 - r.top];
            });
            const vertical = Math.abs(pts[1][0] - pts[0][0]) < 20;
            const ini = vertical ? [pts[0][0], pts[0][1] - 36] : [pts[0][0] - 70, pts[0][1] + 40];
            const ult = pts[pts.length - 1];
            const fin = vertical ? [ult[0], ult[1] + 56] : [Math.min(r.width - 8, ult[0] + 90), ult[1] - 34];
            const todos = [ini, ...pts, fin];
            const d = curva(todos, vertical);
            linea.setAttribute('d', d);
            mascara.setAttribute('d', d);
            largo = linea.getTotalLength();
            // Fraccion del recorrido en la que la linea llega a cada etapa
            const tmp = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            svg.appendChild(tmp);
            hitos = pts.map((p, i) => {
                tmp.setAttribute('d', curva(todos.slice(0, i + 2), vertical));
                return tmp.getTotalLength() / largo;
            });
            tmp.remove();
            mascara.style.strokeDasharray = `${largo} ${largo}`;
            pintar();
        };

        // Chispa camina por la linea: va donde llega la tinta, se balancea al
        // andar, se da la vuelta si se sube y celebra al llegar al final
        const chispa = caja.querySelector('.path__chispa');
        const ANDA = chispa ? chispa.getAttribute('src') : '';
        const CELEBRA = ANDA.replace('andando', 'celebrando');
        if (chispa) new Image().src = CELEBRA;

        // La posicion no salta al scroll: se acerca a el con inercia (lerp),
        // que es lo que da el movimiento fluido
        let objetivo = reducido ? 1 : 0;
        let actual = objetivo;
        let mirando = 1;
        let corriendo = false;

        const medir = () => {
            if (reducido) return 1;
            const r = caja.getBoundingClientRect();
            return Math.max(0, Math.min(1, (window.innerHeight * 0.85 - r.top) / (r.height * 0.95)));
        };

        const pintar = () => {
            const p = actual;
            mascara.style.strokeDashoffset = String(largo * (1 - p));
            etapas.forEach((s, i) => s.classList.toggle('is-on', p >= hitos[i] - 0.005));
            const fin = p >= 0.995;
            caja.classList.toggle('is-done', fin);
            if (!chispa || !largo) return;
            const pt = linea.getPointAtLength(largo * p);
            const ancho = chispa.offsetWidth || 56;
            const paso = largo * p / 16;
            const balanceo = fin || reducido ? 0 : Math.sin(paso) * 7;
            const bote = fin || reducido ? 0 : Math.abs(Math.sin(paso)) * 4;
            chispa.style.transform = `translate(${pt.x - ancho / 2}px, ${pt.y - ancho + 8 - bote}px) rotate(${balanceo}deg) scaleX(${fin ? 1 : mirando})`;
            const src = fin ? CELEBRA : ANDA;
            if (chispa.getAttribute('src') !== src) chispa.setAttribute('src', src);
            chispa.classList.toggle('is-on', p > 0.01);
        };

        const bucle = () => {
            const dif = objetivo - actual;
            if (Math.abs(dif) > 0.0004) {
                if (Math.abs(dif) > 0.002) mirando = dif > 0 ? 1 : -1;
                actual += dif * 0.09;
                pintar();
                requestAnimationFrame(bucle);
            } else {
                actual = objetivo;
                pintar();
                corriendo = false;
            }
        };

        const alScroll = () => {
            objetivo = medir();
            if (!corriendo) { corriendo = true; requestAnimationFrame(bucle); }
        };

        let tick = 0;
        const pedir = (fn) => { cancelAnimationFrame(tick); tick = requestAnimationFrame(fn); };
        window.addEventListener('scroll', alScroll, { passive: true });
        window.addEventListener('resize', () => pedir(trazar));
        // Las fuentes y el idioma cambian el alto de los textos y mueven los puntos
        if (document.fonts && document.fonts.ready) document.fonts.ready.then(trazar);
        new MutationObserver(() => pedir(trazar)).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
        trazar();
        alScroll();
    };

    /* ---------- Parallax ---------- */
    // Los garabatos y Chispa del inicio se mueven a otra velocidad que el
    // scroll, de +n a -n px mientras cruzan la pantalla (data-parallax="n").
    // Como el resto, con inercia para que no vaya a tirones.
    const initParallax = () => {
        const els = Array.from(document.querySelectorAll('[data-parallax]'));
        if (!els.length || reducido) return;
        const estado = els.map((el) => ({ el, n: Number(el.dataset.parallax) || 0, actual: 0, objetivo: 0 }));
        let corriendo = false;

        const medir = () => {
            const vh = window.innerHeight;
            estado.forEach((e) => {
                const r = e.el.getBoundingClientRect();
                const centro = (r.top + r.height / 2 - vh / 2) / (vh / 2 + r.height / 2);
                e.objetivo = Math.max(-1, Math.min(1, centro)) * e.n;
            });
        };

        const bucle = () => {
            let mueve = false;
            estado.forEach((e) => {
                const dif = e.objetivo - e.actual;
                if (Math.abs(dif) > 0.1) { e.actual += dif * 0.1; mueve = true; } else e.actual = e.objetivo;
                e.el.style.setProperty('--py', `${e.actual.toFixed(2)}px`);
            });
            if (mueve) requestAnimationFrame(bucle);
            else corriendo = false;
        };

        const alScroll = () => {
            medir();
            if (!corriendo) { corriendo = true; requestAnimationFrame(bucle); }
        };
        window.addEventListener('scroll', alScroll, { passive: true });
        window.addEventListener('resize', alScroll);
        alScroll();
    };

    /* ---------- Cinta de logos ---------- */
    // Se duplica la lista, oculta para lectores de pantalla, y la pista se
    // desplaza la mitad de su ancho en bucle (en home.css)
    const initCinta = () => {
        const cinta = document.querySelector('.cinta');
        if (!cinta || reducido) return;
        const pista = cinta.querySelector('.cinta__track');
        Array.from(pista.children).forEach((li) => {
            const copia = li.cloneNode(true);
            copia.setAttribute('aria-hidden', 'true');
            pista.appendChild(copia);
        });
        cinta.classList.add('is-moving');
    };

    const boot = () => {
        initFallo();
        initTrayectoria();
        initParallax();
        initCinta();
    };

    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
    else boot();
})();
