/* =============================================================
   El agente: un robot pixel art que recorre algunas secciones de
   la home a saltos. Aparece al entrar la sección en pantalla, se
   queda esperando y da cada salto cuando el visitante le pasa el
   ratón por encima. En el último salto dice una frase y se va.

   Decorativo: no se cierra y no lo leen los lectores de pantalla.
   Cada recorrido se calcula con las posiciones reales de los
   elementos (botones, cuadrados de los pasos, barras de servicios)
   y se completa una sola vez por visita; si la sección sale de
   pantalla a medias, el robot se va y el recorrido vuelve a empezar
   la próxima vez. Solo en escritorio: necesita ratón y, en móvil,
   los elementos se apilan y los saltos dejarían de tener sentido.

   Solo lo carga la home.
   ============================================================= */

(() => {
    'use strict';

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!('IntersectionObserver' in window)) return;
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    const W = 48; // ancho del robot, en px (rejilla de 24 x 28 a 2 px)
    const H = 56;
    const ULTIMA = 3000; // lo que dura la frase del último salto

    const TXT = {
        es: {
            pista: '¡Hola! Soy uno de los agentes de Antonio.',
            inicio: '¡Mira lo que hemos construido juntos!',
            agentes: 'Y aquí decide él.',
            servicios: 'Yo lo reviso. Él lo firma.'
        },
        en: {
            pista: "Hi! I'm one of Antonio's agents.",
            inicio: 'Look what we built together!',
            agentes: 'And here he decides.',
            servicios: 'I check it. He signs it.'
        }
    };
    const lang = () => (document.documentElement.lang === 'en' ? 'en' : 'es');

    /* ---------- El robot, en píxeles ---------- */
    // Paleta de la referencia: teal con luz y sombra, pantalla oscura,
    // ojos cian con brillo, antenas y orejas naranjas, metal gris
    const C = {
        linea: '#14212a', teal: '#4fb3b0', luz: '#8fdcd5', sombra: '#2f8a87',
        pantalla: '#12202a', cian: '#45e6f2', destello: '#d6fdff',
        naranja: '#ee7a2f', naranjaOsc: '#b9561f', metal: '#a9c6c8', metalOsc: '#6e8e92'
    };
    const px = (x, y, w, h, color, cls) => '<rect' + (cls ? ' class="' + cls + '"' : '') + ' x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + color + '"/>';

    const svg =
        '<svg viewBox="0 0 24 28" width="' + W + '" height="' + H + '" shape-rendering="crispEdges">' +
        // antenas: varilla oscura y punta naranja de 2x2
        px(6, 2, 1, 2, C.linea) + px(17, 2, 1, 2, C.linea) +
        px(5, 0, 2, 2, C.naranja) + px(17, 0, 2, 2, C.naranja) +
        // orejas naranjas con su cara en sombra
        px(0, 7, 2, 4, C.naranja) + px(0, 7, 1, 4, C.naranjaOsc) +
        px(22, 7, 2, 4, C.naranja) + px(23, 7, 1, 4, C.naranjaOsc) +
        // cabeza con las esquinas recortadas, luz arriba y sombra abajo
        px(3, 4, 18, 14, C.linea) + px(2, 5, 20, 12, C.linea) +
        px(4, 5, 16, 12, C.teal) + px(3, 6, 18, 10, C.teal) +
        px(4, 5, 16, 1, C.luz) + px(3, 6, 1, 4, C.luz) +
        px(4, 16, 16, 1, C.sombra) + px(20, 8, 1, 8, C.sombra) +
        // pantalla, también con las esquinas recortadas
        px(6, 7, 12, 9, C.pantalla) + px(5, 8, 14, 7, C.pantalla) +
        // cara de frente: ojos grandes con destello y una sonrisa pequeña
        '<g class="agent__cara agent__cara--frente">' +
        px(8, 9, 2, 3, C.cian, 'agent__ojo') + px(14, 9, 2, 3, C.cian, 'agent__ojo') +
        px(8, 9, 1, 1, C.destello) + px(14, 9, 1, 1, C.destello) +
        px(10, 13, 1, 1, C.cian) + px(13, 13, 1, 1, C.cian) + px(11, 14, 2, 1, C.cian) +
        '</g>' +
        // cara de juego: ojos felices (^ ^) y sonrisa ancha
        '<g class="agent__cara agent__cara--juego">' +
        px(7, 11, 1, 1, C.cian) + px(8, 10, 2, 1, C.cian) + px(10, 11, 1, 1, C.cian) +
        px(13, 11, 1, 1, C.cian) + px(14, 10, 2, 1, C.cian) + px(16, 11, 1, 1, C.cian) +
        px(8, 12, 1, 1, C.cian) + px(15, 12, 1, 1, C.cian) + px(9, 13, 6, 1, C.cian) +
        '</g>' +
        // cuello
        px(10, 18, 4, 1, C.metalOsc) +
        // cuerpo redondeado con su pantallita en el pecho
        px(7, 19, 10, 7, C.linea) + px(6, 20, 12, 5, C.linea) +
        px(8, 20, 8, 5, C.teal) + px(7, 21, 10, 3, C.teal) +
        px(8, 20, 8, 1, C.luz) + px(8, 24, 8, 1, C.sombra) +
        px(9, 21, 6, 3, C.pantalla) + px(11, 22, 2, 1, C.cian) +
        // brazo izquierdo, siempre abajo
        px(4, 20, 2, 4, C.metal) + px(4, 20, 1, 4, C.metalOsc) + px(3, 24, 3, 2, C.sombra) +
        // brazo derecho: abajo de frente, arriba saludando al jugar
        '<g class="agent__brazo agent__brazo--abajo">' +
        px(18, 20, 2, 4, C.metal) + px(19, 20, 1, 4, C.metalOsc) + px(18, 24, 3, 2, C.sombra) +
        '</g>' +
        '<g class="agent__brazo agent__brazo--arriba">' +
        px(18, 20, 4, 2, C.metal) + px(22, 15, 2, 7, C.metal) + px(23, 15, 1, 7, C.metalOsc) +
        px(22, 12, 2, 3, C.sombra) +
        '</g>' +
        // piernas con los pies oscuros
        px(8, 26, 3, 1, C.metal) + px(13, 26, 3, 1, C.metal) +
        px(8, 27, 3, 1, C.linea) + px(13, 27, 3, 1, C.linea) +
        '</svg>';

    const el = document.createElement('div');
    el.className = 'agent';
    el.setAttribute('aria-hidden', 'true');
    el.innerHTML = '<div class="agent__say"></div><div class="agent__body">' + svg + '</div>';
    document.body.appendChild(el);

    const body = el.querySelector('.agent__body');
    const say = el.querySelector('.agent__say');

    /* ---------- Movimiento ---------- */
    const pos = { x: 0, y: 0 };

    // (x, y) es el punto donde apoyan los pies: centro del borde inferior
    const place = (x, y) => {
        pos.x = x;
        pos.y = y;
        el.style.transform = 'translate(' + (x - W / 2) + 'px,' + (y - H) + 'px)';
    };

    const face = (dx) => {
        if (dx) body.classList.toggle('is-left', dx < 0);
    };

    const tween = (ms, fn) => new Promise((done) => {
        ancla = null; // en el aire no va pegado a nada
        const t0 = performance.now();
        const step = (t) => {
            const k = Math.min(1, (t - t0) / ms);
            fn(k);
            if (k < 1) requestAnimationFrame(step);
            else done();
        };
        requestAnimationFrame(step);
    });

    const wait = (ms) => new Promise((done) => setTimeout(done, ms));

    const air = (si) => el.classList.toggle('is-air', si);

    const land = () => {
        air(false);
        body.classList.add('is-land');
        return wait(150).then(() => body.classList.remove('is-land'));
    };

    // Camina con un pequeño rebote, a velocidad constante
    const walk = (x) => {
        const x0 = pos.x;
        const y0 = pos.y;
        const d = Math.abs(x - x0);
        face(x - x0);
        return tween(Math.max(260, d * 4.5), (k) => {
            place(x0 + (x - x0) * k, y0 - Math.abs(Math.sin(k * d / 16)) * 3);
        });
    };

    // Salto en parábola; h es la altura sobre el punto más alto de los dos
    const hop = (x, y, h, aterriza) => {
        const x0 = pos.x;
        const y0 = pos.y;
        const top = Math.min(y0, y) - h;
        const c = 2 * top - (y0 + y) / 2; // control de la curva para que el pico caiga en top
        face(x - x0);
        air(true);
        return tween(560, (k) => {
            const u = 1 - k;
            place(x0 + (x - x0) * k, u * u * y0 + 2 * u * k * c + k * k * y);
        }).then(() => (aterriza === false ? null : land()));
    };

    // Caída libre: acelera hasta el destino
    const fall = (y) => {
        const x0 = pos.x;
        const y0 = pos.y;
        air(true);
        return tween(Math.max(380, Math.abs(y - y0) * 1.1), (k) => place(x0, y0 + (y - y0) * k * k));
    };

    // Pone el texto y desplaza el bocadillo si se saldría de la pantalla
    const decir = (texto) => {
        say.textContent = texto;
        const w = say.offsetWidth;
        const cx = pos.x - window.scrollX;
        const margen = 12;
        let dx = 0;
        if (cx - w / 2 < margen) dx = margen - (cx - w / 2);
        else if (cx + w / 2 > document.documentElement.clientWidth - margen) dx = document.documentElement.clientWidth - margen - (cx + w / 2);
        // la cola no puede salirse del bocadillo
        dx = Math.max(-(w / 2 - 14), Math.min(w / 2 - 14, dx));
        say.style.setProperty('--say-dx', Math.round(dx) + 'px');
    };

    const talk = (texto, ms) => {
        decir(texto);
        el.classList.add('is-talking');
        return wait(ms).then(() => el.classList.remove('is-talking'));
    };

    // Parpadea cada 3,4 s solo mientras se ve: fuera de eso no cuesta nada
    let parpadeo = 0;
    const show = () => {
        el.classList.add('is-on');
        if (!parpadeo) {
            parpadeo = setInterval(() => {
                el.classList.add('is-blink');
                setTimeout(() => el.classList.remove('is-blink'), 110);
            }, 3400);
        }
    };
    const hide = () => {
        clearInterval(parpadeo);
        parpadeo = 0;
        ancla = null;
        el.classList.remove('is-on', 'is-air', 'is-talking', 'is-waiting');
        body.classList.remove('is-land');
    };

    /* ---------- Esperar al ratón ---------- */
    // Cada salto espera a que el visitante pase el ratón por encima.
    // Si la sección sale de pantalla mientras espera, el recorrido se corta.
    let esperando = null;
    let pistaDada = false;

    const hover = () => new Promise((ok, corta) => {
        esperando = { ok: ok, corta: corta };
        el.classList.add('is-waiting');
        if (!pistaDada) {
            pistaDada = true;
            decir(TXT[lang()].pista);
            el.classList.add('is-talking');
        }
    });

    el.addEventListener('mouseenter', () => {
        if (!esperando) return;
        const e = esperando;
        esperando = null;
        el.classList.remove('is-waiting', 'is-talking');
        e.ok();
    });

    const cortar = () => {
        if (!esperando) return;
        const e = esperando;
        esperando = null;
        e.corta(new Error('fuera de pantalla'));
    };

    /* ---------- Posiciones en coordenadas de documento ---------- */
    const box = (node) => {
        const r = node.getBoundingClientRect();
        const left = r.left + window.scrollX;
        const top = r.top + window.scrollY;
        return { left: left, top: top, right: left + r.width, bottom: top + r.height, cx: left + r.width / 2 };
    };
    /* ---------- Pegado a lo que pisa ---------- */
    // Quieto, el robot sigue al elemento sobre el que está: si la página se
    // mueve por debajo (la barra superior encoge al hacer scroll, zoom,
    // cambio de ventana...) se recoloca en vez de quedarse flotando.
    // dx: distancia desde el borde izquierdo; sin dx, centrado.
    let ancla = null;
    const sobre = (node, dx) => {
        const b = box(node);
        return { x: b.left + (dx == null ? (b.right - b.left) / 2 : dx), y: b.top };
    };
    const posa = (node, dx) => {
        ancla = { node: node, dx: dx };
        const p = sobre(node, dx);
        place(p.x, p.y);
    };
    let pendiente = false;
    const recolocar = () => {
        if (!ancla || pendiente) return;
        pendiente = true;
        requestAnimationFrame(() => {
            pendiente = false;
            if (ancla) posa(ancla.node, ancla.dx);
        });
    };
    window.addEventListener('scroll', recolocar, { passive: true });
    window.addEventListener('resize', recolocar);
    if ('ResizeObserver' in window) new ResizeObserver(recolocar).observe(document.body);

    // Salta hasta un elemento midiéndolo justo antes y se queda pegado a él
    const hopA = (node, dx, h) => {
        const p = sobre(node, dx);
        return hop(p.x, p.y, h).then(() => posa(node, dx));
    };

    const one = (sel) => document.querySelector(sel);
    const all = (sel) => Array.prototype.slice.call(document.querySelectorAll(sel));

    // Las secciones entran con una animación de subida (.reveal en script.js,
    // escalonada hasta ~0,3 s más 0,7 s de transición): se deja terminar
    const asentar = () => wait(1100);

    // Mismo renglón: si los elementos se apilan, no hay recorrido
    const enFila = (cajas) => cajas.every((c) => Math.abs(c.top - cajas[0].top) < 4);

    /* ---------- Recorridos ---------- */
    const RUTAS = {
        // Bajo el titular: salta al botón principal, luego al de
        // herramientas, habla y se deja caer junto a las fichas
        inicio: async () => {
            const b1n = one('.hero-dark__actions .btn-solid');
            const b2n = one('.hero-dark__actions .btn-line');
            const grid = one('.tools-cards__grid');
            const shots = all('.tcard__shot');
            if (!b1n || !b2n || !grid || !shots.length) return;
            const lastN = shots[shots.length - 1];
            if (!enFila([box(b1n), box(b2n)])) return;

            // Siempre apoyado en algo: empieza sobre la ficha de Roometrics,
            // sube a los dos botones y baja a la ficha de los agentes
            posa(shots[0], 64);
            show();
            await hover();
            await hopA(b1n, null, 50);
            await hover();
            await hopA(b2n, null, 60);
            await talk(TXT[lang()].inicio, ULTIMA);
            await hopA(lastN, 64, 40);
            const last = box(lastN);
            const g = box(grid);
            await walk(last.right - 24);
            await hop(Math.max(last.right, g.right) + 30, last.top - 6, 24, false);
            await fall(last.bottom + 60);
        },

        // Cae sobre el paso 1 y salta de cuadrado en cuadrado hasta el 4
        agentes: async () => {
            // Los cuadrados entran subiendo (animación .reveal): se espera a que
            // se asienten y cada destino se mide justo antes de saltar
            await asentar();
            const mark = (i) => box(all('.agent-steps__mark')[i]);
            const total = all('.agent-steps__mark').length;
            const note = one('.agent-steps__note');
            if (total < 4 || !note || !enFila([0, 1, 2, 3].map(mark))) return;

            const marks = all('.agent-steps__mark');
            place(mark(0).cx, mark(0).top - 110);
            show();
            await fall(mark(0).top);
            await land();
            posa(marks[0]);
            for (let i = 1; i < total; i++) {
                await hover();
                await hopA(marks[i], null, 64);
            }
            await talk(TXT[lang()].agentes, ULTIMA);
            await hop(mark(3).cx + 240, mark(3).top - 10, 56, false);
            await fall(box(note).bottom + 60);
        },

        // Salta de barra teal en barra teal por encima de los servicios
        servicios: async () => {
            await asentar();
            const title = (i) => box(all('.svc__title')[i]);
            const total = all('.svc__title').length;
            if (total < 4 || !enFila([0, 1, 2, 3].map(title))) return;
            const barra = (t) => t.left + 20; // las barras miden 40px

            const titles = all('.svc__title');
            place(barra(title(0)), title(0).top - 110);
            show();
            await fall(title(0).top);
            await land();
            posa(titles[0], 20);
            for (let i = 1; i < total; i++) {
                await hover();
                await hopA(titles[i], 20, 60);
            }
            await talk(TXT[lang()].servicios, ULTIMA);
            await hop(barra(title(3)) + 220, title(3).top - 10, 50, false);
            await fall(title(3).bottom + 260);
        }
    };

    /* ---------- Disparo: de una en una, completas una vez por visita ---------- */
    const hechas = new Set();
    const visibles = new Set();
    const cola = [];
    let actual = null;

    const siguiente = () => {
        if (actual || !cola.length) return;
        const id = cola.shift();
        if (window.innerWidth < 900 || !visibles.has(id)) return siguiente();
        actual = id;
        RUTAS[id]().then(() => {
            hechas.add(id);
        }, () => {
            // cortada a medias: podrá repetirse cuando vuelva a verse
        }).then(() => {
            hide();
            actual = null;
            siguiente();
        });
    };

    // Empieza cuando se ve casi media sección; se corta solo cuando la
    // sección sale del todo de la pantalla
    const io = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
            const id = e.target.id;
            const bastante = e.isIntersecting && e.intersectionRatio >= 0.44;
            if (bastante) visibles.add(id);
            else visibles.delete(id);

            if (!e.isIntersecting && id === actual) cortar();
            if (bastante && !hechas.has(id) && id !== actual && cola.indexOf(id) === -1) {
                cola.push(id);
                siguiente();
            }
        });
    }, { threshold: [0, 0.45] });

    // Arranca con la página ya asentada (fuente cargada, fichas en su sitio)
    window.addEventListener('load', () => {
        setTimeout(() => {
            Object.keys(RUTAS).forEach((id) => {
                const s = document.getElementById(id);
                if (s) io.observe(s);
            });
        }, 700);
    });
})();
