// Servidor local para revisar la web sin desplegar.
//
//   node herramientas-dev/servidor.js [puerto]      (por defecto http://localhost:8787)
//
// Imita a Cloudflare: /carpeta/ sirve su index.html y /blog/x sirve x.html.
// Quita GTM y Roometrics para no meter visitas falsas en la analitica de
// Antonio, y deja puesta la cookie de consentimiento para que el banner no
// tape la pagina. El formulario de contacto no funciona en local: lo atiende
// el Worker de src/ en Cloudflare.
const http = require('http');
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const port = Number(process.argv[2] || 8787);
const TIPOS = {
    '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.png': 'image/png',
    '.jpg': 'image/jpeg', '.webp': 'image/webp', '.svg': 'image/svg+xml', '.woff2': 'font/woff2',
    '.ico': 'image/x-icon', '.txt': 'text/plain', '.xml': 'application/xml', '.pdf': 'application/pdf'
};

http.createServer((req, res) => {
    const p = decodeURIComponent(new URL(req.url, 'http://x').pathname);
    let f = path.join(root, p);
    if (!f.startsWith(root)) { res.writeHead(403); return res.end(); }
    if (fs.existsSync(f) && fs.statSync(f).isDirectory()) f = path.join(f, 'index.html');
    else if (!fs.existsSync(f) && fs.existsSync(f + '.html')) f += '.html';
    if (!fs.existsSync(f)) { f = path.join(root, '404.html'); res.statusCode = 404; }
    const ext = path.extname(f);
    let body = fs.readFileSync(f);
    if (ext === '.html') {
        body = body.toString()
            .replace(/<script>\(function\(w,d,s,l,i\)[\s\S]*?<\/script>/, '')
            .replace(/<script[^>]*roometrics[^>]*>[\s\S]*?<\/script>/g, '')
            .replace(/<noscript><iframe src="https:\/\/www\.googletagmanager[^<]*<\/iframe><\/noscript>/, '');
        res.setHeader('Set-Cookie', 'alpc_consent=denied; Path=/');
    }
    res.setHeader('Content-Type', TIPOS[ext] || 'application/octet-stream');
    res.end(body);
}).listen(port, () => console.log(`http://localhost:${port}`));
