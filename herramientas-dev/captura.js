// Captura una pagina con Chrome headless por CDP, sin dependencias.
//
//   node herramientas-dev/captura.js <url> <salida.png> [ancho] [idioma] [script]
//
//   ancho    1440 por defecto; por debajo de 700 emula un movil
//   idioma   "en" para ver la version en ingles
//   script   JS que se ejecuta antes de capturar (puede ser async y devolver un valor,
//            que se imprime). Sirve para pulsar botones o hacer scroll.
//
// Por defecto emula "movimiento reducido": todo aparece sin animar y la captura
// es de la pagina entera. Variables de entorno:
//   NOREDUCE=1  con animaciones, para probar el movimiento
//   VIEWPORT=1  solo la pantalla visible, no la pagina entera
//
// La pagina entera sale muy alta para revisarla de una vez: trocear.ps1 la parte en trozos.
const { spawn } = require('child_process');
const fs = require('fs');
const os = require('os');
const path = require('path');

const [url, out, ancho = '1440', lang = '', antes = ''] = process.argv.slice(2);
if (!url || !out) { console.error('Uso: node captura.js <url> <salida.png> [ancho] [idioma] [script]'); process.exit(1); }
const W = Number(ancho);
const movil = W < 700;
const CHROME = process.env.CHROME || 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const PORT = 9300 + Math.floor(Math.random() * 500);
const perfil = fs.mkdtempSync(path.join(os.tmpdir(), 'captura-'));
const chrome = spawn(CHROME, ['--headless=new', `--remote-debugging-port=${PORT}`, `--user-data-dir=${perfil}`, '--hide-scrollbars', '--no-first-run', 'about:blank'], { stdio: 'ignore' });
const espera = (ms) => new Promise((r) => setTimeout(r, ms));

(async () => {
    let target;
    for (let i = 0; i < 50 && !target; i++) {
        try { target = (await (await fetch(`http://127.0.0.1:${PORT}/json/list`)).json()).find((t) => t.type === 'page'); } catch (e) { await espera(200); }
    }
    const ws = new WebSocket(target.webSocketDebuggerUrl);
    await new Promise((r) => ws.addEventListener('open', r));
    let id = 0;
    const pend = new Map();
    const eventos = [];
    ws.addEventListener('message', (m) => {
        const d = JSON.parse(m.data);
        if (d.id && pend.has(d.id)) { pend.get(d.id)(d); pend.delete(d.id); } else if (d.method) eventos.push(d.method);
    });
    const send = (method, params = {}) => new Promise((r) => { const n = ++id; pend.set(n, r); ws.send(JSON.stringify({ id: n, method, params })); });

    await send('Page.enable');
    await send('Emulation.setDeviceMetricsOverride', { width: W, height: movil ? 800 : 900, deviceScaleFactor: 1, mobile: movil });
    if (!process.env.NOREDUCE) await send('Emulation.setEmulatedMedia', { features: [{ name: 'prefers-reduced-motion', value: 'reduce' }] });
    if (lang) await send('Page.addScriptToEvaluateOnNewDocument', { source: `try{localStorage.setItem('alpc_lang','${lang}')}catch(e){}` });
    await send('Page.navigate', { url });
    for (let i = 0; i < 60 && !eventos.includes('Page.loadEventFired'); i++) await espera(200);
    // Las imagenes lazy no cargan si no se hace scroll: se fuerzan antes de capturar
    await send('Runtime.evaluate', { expression: "document.querySelectorAll('img[loading=lazy]').forEach(i => i.loading = 'eager')" });
    if (antes) {
        const r = await send('Runtime.evaluate', { expression: antes, awaitPromise: true, returnByValue: true });
        if (r.result && r.result.exceptionDetails) console.error(JSON.stringify(r.result.exceptionDetails));
        else console.log('script:', JSON.stringify(r.result && r.result.result && r.result.result.value));
    }
    await espera(1500);
    const m = await send('Page.getLayoutMetrics');
    const alto = Math.ceil(m.result.cssContentSize.height);
    const shot = process.env.VIEWPORT
        ? await send('Page.captureScreenshot', { format: 'png' })
        : await send('Page.captureScreenshot', { format: 'png', captureBeyondViewport: true, clip: { x: 0, y: 0, width: W, height: alto, scale: 1 } });
    fs.writeFileSync(out, Buffer.from(shot.result.data, 'base64'));
    console.log(out, W, 'x', process.env.VIEWPORT ? 'pantalla' : alto);
    ws.close();
    chrome.kill();
    process.exit(0);
})().catch((e) => { console.error(e); chrome.kill(); process.exit(1); });
