// Comprobaciones de la web antes de enseñar o desplegar un cambio.
//
//   node herramientas-dev/comprobar.js            revisa y no toca nada
//   node herramientas-dev/comprobar.js --sync     copia al HTML el texto en español del diccionario
//   node herramientas-dev/comprobar.js --limpiar  borra del diccionario las claves que nadie usa
//
// Revisa tres cosas:
//   1. Que toda clave data-i18n de cada pagina exista en el diccionario ES y EN de script.js.
//   2. Que el texto fijo del HTML coincida con el español del diccionario (lo que ven
//      los buscadores y quien navega sin JavaScript).
//   3. Que no haya enlaces ni recursos locales rotos en las paginas visibles.
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const SYNC = process.argv.includes('--sync');
const LIMPIAR = process.argv.includes('--limpiar');

// Las paginas de servicios estan ocultas (noindex, fuera del menu): no se revisan sus enlaces
const VISIBLES = ['index.html', 'herramientas/index.html', 'recruiters/index.html', 'blog/index.html',
    'blog/auditoria-ga4.html', 'blog/consent-mode-v2.html', 'blog/dashboards-que-se-usan.html',
    'blog/gtm-server-side.html', 'analytics-copilot/index.html', '404.html', 'thankyou.html'];

const leerDiccionario = () => {
    const src = fs.readFileSync(path.join(root, 'script.js'), 'utf8');
    const ini = src.indexOf('const I18N = {');
    const fin = src.indexOf('/* ---------- Language');
    return { src, ini, fin, I18N: new Function(src.slice(ini, fin) + '; return I18N;')() };
};

const paginas = (d = root) => fs.readdirSync(d, { withFileTypes: true }).flatMap((e) =>
    ['.git', 'node_modules', 'herramientas-dev'].includes(e.name) ? []
        : e.isDirectory() ? paginas(path.join(d, e.name))
            : e.name.endsWith('.html') ? [path.join(d, e.name)] : []);

const clavesDe = (html) => {
    const k = new Set();
    for (const m of html.matchAll(/data-i18n(?:-title)?="([^"]+)"/g)) k.add(m[1]);
    for (const m of html.matchAll(/data-i18n-attr="([^"]+)"/g)) m[1].split(',').forEach((p) => k.add(p.split(':')[1].trim()));
    return k;
};

const dec = (s) => s.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&amp;/g, '&');
const enc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

let errores = 0;
const { src, ini, fin, I18N } = leerDiccionario();
const usadas = new Set();

// 1 y 2: claves y texto en español
for (const f of paginas()) {
    const rel = path.relative(root, f);
    let html = fs.readFileSync(f, 'utf8');
    const claves = clavesDe(html);
    claves.forEach((k) => usadas.add(k));
    for (const k of claves) for (const l of ['es', 'en']) {
        if (!(k in I18N[l])) { errores++; console.log(`FALTA  ${rel}: clave "${k}" en ${l}`); }
    }
    let n = 0;
    html = html.replace(/(<(\w+)\b[^>]*\sdata-i18n="([^"]+)"[^>]*>)([^<]*)(<\/\2>)/g, (all, open, tag, key, inner, close) => {
        const es = I18N.es[key];
        if (es == null || dec(inner) === es) return all;
        n++;
        if (!SYNC) console.log(`DISTINTO  ${rel}: "${key}" en el HTML dice "${inner.trim().slice(0, 50)}"`);
        return open + enc(es) + close;
    });
    if (n && SYNC) { fs.writeFileSync(f, html); console.log(`sincronizado ${rel} (${n})`); }
    else if (n) errores += n;
}

// 3: enlaces y recursos locales
for (const p of VISIBLES) {
    const html = fs.readFileSync(path.join(root, p), 'utf8');
    for (const m of html.matchAll(/(?:src|href)="([^"#?]*)/g)) {
        const u = m[1];
        if (!u || /^(https?:|mailto:|data:|tel:)/.test(u)) continue;
        const f = u.startsWith('/') ? path.join(root, u) : path.join(root, path.dirname(p), u);
        const ok = [f, f + '.html', path.join(f, 'index.html')].some((x) => fs.existsSync(x) && fs.statSync(x).isFile());
        if (!ok) { errores++; console.log(`ROTO  ${p} -> ${u}`); }
    }
}

// Claves que no usa nadie (ni el HTML ni el propio JS por su nombre)
const resto = src.slice(0, ini) + src.slice(fin);
for (const m of resto.matchAll(/'([a-z][a-z0-9_]+)'/g)) usadas.add(m[1]);
const sobran = Object.keys(I18N.es).filter((k) => !usadas.has(k));
if (sobran.length) console.log(`SIN USO  ${sobran.length} claves: ${sobran.join(' ')}${LIMPIAR ? '' : ' (borrar con --limpiar)'}`);
if (LIMPIAR && sobran.length) {
    const crlf = src.includes('\r\n');
    const lineas = src.replace(/\r\n/g, '\n').split('\n');
    const desde = src.slice(0, ini).split('\n').length;
    const hasta = src.slice(0, fin).split('\n').length;
    let out = lineas.filter((l, i) => {
        const m = l.match(/^ {12}([a-z][a-z0-9_]*): /);
        return !(m && i >= desde && i <= hasta && sobran.includes(m[1]));
    }).join('\n').replace(/,(\n {8}\})/g, '$1');
    if (crlf) out = out.replace(/\n/g, '\r\n');
    fs.writeFileSync(path.join(root, 'script.js'), out);
    console.log('claves sin uso borradas');
}

console.log(errores ? `\n${errores} problemas` : '\nTodo en orden');
process.exitCode = errores ? 1 : 0;
