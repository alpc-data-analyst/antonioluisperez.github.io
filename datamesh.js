/* Malla de datos del hero de /recruiters/.
 *
 * Nodos sobre una rejilla ligeramente desordenada, aristas entre vecinos y
 * paquetes que hacen rutas de varios saltos dejando el camino en el color
 * de marca: se ve el dato atravesar el sistema. Es la pareja del mapa de
 * pings de la home, mismo lenguaje (gris donde hay estructura, color donde
 * hay vida), sin repetir el recurso.
 *
 * Solo lo carga /recruiters/. Las reglas son las mismas que en worldmap.js:
 * late solo con el hero en pantalla y la pestaña activa, y con
 * prefers-reduced-motion pinta un fotograma fijo y se queda quieto. */
(() => {
    const cv = document.getElementById('datamesh');
    if (!cv) return;
    const ctx = cv.getContext('2d');
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // El color sale del token del CSS, asi un cambio de paleta llega aqui solo
    const MARCA = (getComputedStyle(document.documentElement).getPropertyValue('--marca-rgb') || '15, 95, 107').trim();
    const GRIS = '154, 154, 154';

    let W = 0, H = 0;
    let nodos = [], vecinos = [], rutas = [];
    let cols = 0, filas = 0;

    const construir = () => {
        const paso = W < 700 ? 110 : 150;
        cols = Math.ceil(W / paso) + 1;
        filas = Math.ceil(H / paso) + 1;
        nodos = [];
        for (let r = 0; r < filas; r++) {
            for (let c = 0; c < cols; c++) {
                nodos.push({
                    bx: c * paso + (Math.random() - 0.5) * paso * 0.5,
                    by: r * paso + (Math.random() - 0.5) * paso * 0.5,
                    fase: Math.random() * 6.28,
                    x: 0, y: 0, pulso: 0
                });
            }
        }
        // Vecinos a la derecha y abajo, mas una diagonal de vez en cuando
        // para que no se lea como una cuadricula pura
        vecinos = nodos.map((_, i) => {
            const c = i % cols, r = Math.floor(i / cols), v = [];
            if (c + 1 < cols) v.push(i + 1);
            if (r + 1 < filas) v.push(i + cols);
            if (c + 1 < cols && r + 1 < filas && (c + r) % 3 === 0) v.push(i + cols + 1);
            return v;
        });
        rutas = [];
    };

    const medir = () => {
        const caja = cv.parentElement.getBoundingClientRect();
        const dpr = Math.min(2, window.devicePixelRatio || 1);
        W = caja.width; H = caja.height;
        cv.width = W * dpr; cv.height = H * dpr;
        cv.style.width = W + 'px'; cv.style.height = H + 'px';
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        construir();
    };

    const nuevaRuta = () => {
        let i = Math.floor(Math.random() * nodos.length);
        const camino = [i];
        const saltos = 4 + Math.floor(Math.random() * 4);
        for (let s = 0; s < saltos; s++) {
            const v = vecinos[i];
            if (!v.length) break;
            i = v[Math.floor(Math.random() * v.length)];
            camino.push(i);
        }
        return { camino, f: 0, v: 0.9 + Math.random() * 0.6 };
    };

    let ult = 0, t0 = null;
    const frame = (tm) => {
        if (!t0) t0 = tm;
        const t = (tm - t0) / 1000;
        const dt = Math.min(0.05, t - ult);
        ult = t;
        ctx.clearRect(0, 0, W, H);

        // La malla respira muy despacio
        nodos.forEach((n) => {
            n.x = n.bx + Math.sin(t * 0.3 + n.fase) * 6;
            n.y = n.by + Math.cos(t * 0.25 + n.fase) * 6;
            n.pulso = Math.max(0, n.pulso - dt * 1.4);
        });

        ctx.lineWidth = 1;
        ctx.strokeStyle = 'rgba(' + GRIS + ', 0.32)';
        nodos.forEach((n, i) => vecinos[i].forEach((j) => {
            ctx.beginPath(); ctx.moveTo(n.x, n.y); ctx.lineTo(nodos[j].x, nodos[j].y); ctx.stroke();
        }));

        if (!reduce) {
            if (Math.random() < 0.03 && rutas.length < 4) rutas.push(nuevaRuta());

            rutas.forEach((r) => {
                r.f += dt * r.v;
                const seg = Math.floor(r.f), ff = r.f - seg;
                if (seg >= r.camino.length - 1) return;
                const a = nodos[r.camino[seg]], b = nodos[r.camino[seg + 1]];
                // El tramo ya recorrido queda marcado mientras dura la ruta
                ctx.strokeStyle = 'rgba(' + MARCA + ', 0.45)';
                ctx.lineWidth = 1.5;
                for (let s = 0; s < seg; s++) {
                    const p = nodos[r.camino[s]], q = nodos[r.camino[s + 1]];
                    ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke();
                }
                const x = a.x + (b.x - a.x) * ff, y = a.y + (b.y - a.y) * ff;
                ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(x, y); ctx.stroke();
                ctx.fillStyle = 'rgba(' + MARCA + ', 1)';
                ctx.beginPath(); ctx.arc(x, y, 3.2, 0, 6.283); ctx.fill();
                if (ff > 0.97) b.pulso = 1;
            });
            rutas = rutas.filter((r) => Math.floor(r.f) < r.camino.length - 1);
        }

        nodos.forEach((n) => {
            ctx.fillStyle = 'rgba(' + GRIS + ', 0.75)';
            ctx.beginPath(); ctx.arc(n.x, n.y, 2.2, 0, 6.283); ctx.fill();
            if (n.pulso > 0) {
                ctx.strokeStyle = 'rgba(' + MARCA + ',' + n.pulso * 0.8 + ')';
                ctx.lineWidth = 1.5;
                ctx.beginPath(); ctx.arc(n.x, n.y, 3 + (1 - n.pulso) * 22, 0, 6.283); ctx.stroke();
            }
        });

        if (corriendo && !reduce) requestAnimationFrame(frame);
    };

    // Solo late mientras el hero esta en pantalla y la pestaña activa:
    // un canvas animado fuera de vista es bateria tirada.
    let corriendo = false;
    const arrancar = () => {
        if (corriendo || document.hidden) return;
        corriendo = true;
        requestAnimationFrame(frame);
    };
    const parar = () => { corriendo = false; };

    medir();
    if (reduce) requestAnimationFrame(frame);

    let temporizador;
    window.addEventListener('resize', () => {
        clearTimeout(temporizador);
        temporizador = setTimeout(() => { medir(); if (reduce) requestAnimationFrame(frame); }, 150);
    });

    if ('IntersectionObserver' in window) {
        new IntersectionObserver((e) => {
            if (e[0].isIntersecting) arrancar(); else parar();
        }, { threshold: 0 }).observe(cv.parentElement);
    } else {
        arrancar();
    }
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) parar(); else arrancar();
    });
})();
