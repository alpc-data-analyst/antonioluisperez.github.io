# antonioluisperez.com

Web personal de Antonio Luis Pérez (Analytics Engineer), en "modo marca": no vende servicios, solo presenta lo que publica, sus herramientas, el blog y el contacto para charlas y colaboraciones. HTML, CSS y JS planos, sin build. La sirve un Worker de Cloudflare desde la raíz del repo.

## Reglas

- **Toca lo justo.** Abre solo los archivos de la tarea según el mapa de abajo. No leas la web entera antes de un cambio.
- **Nunca hagas commit ni push.** Antonio revisa y despliega.
- **Dos idiomas.** Cada texto visible existe en español y en inglés (ver "Textos"). El cuerpo de los artículos del blog y la página de Analytics Copilot solo están en español.
- **Textos visibles nuevos o cambiados:** carga el skill `marca-antonio` del proyecto de marca (`Z:\PROYECTOS CLAUDE\09. Linkedin`) y pásalos por `humanizer`. Para cambios de código, CSS o maquetación no hace falta.
- **No cambies** el ID de GTM (`GTM-N23PS4MN`), el Consent Mode del `<head>` ni los nombres de `data-track`: el contenedor de GTM depende de ellos.
- **Las páginas de servicios están ocultas** (decidido el 23-10-2026): `analitica-web/`, `business-intelligence/`, `data-science/` y `curso-ga4/` llevan `noindex`, están fuera del menú y del sitemap y no se enlazan. No se tocan salvo que Antonio lo pida.

## Mapa

| Archivo | Qué es |
|---|---|
| `styles.css` | Base de todas las páginas: fuentes, colores de la identidad "apuntes", cuadrícula, hojas blancas (`.section`), componentes y las animaciones comunes (entradas, subrayados, fosforito y notas) |
| `home.css` | Solo la home y `/herramientas/`: inicio, cinta de logos, juego, trayectoria, tarjetas y botones |
| `script.js` | Común a todas: diccionario `I18N` (es y en), idioma, banner de cookies, medición (`data-track`), entradas al hacer scroll, contadores, menú y formulario de contacto |
| `home.js` | Solo la home: juego "Encuentra el fallo", trayectoria que se dibuja con Chispa, parallax y cinta de logos |
| `index.html` | Home |
| `herramientas/index.html` | Herramientas (usa `home.css`) |
| `recruiters/index.html` | CV, trayectoria, stack, certificaciones, proyectos, clientes y reseñas |
| `blog/index.html` y `blog/*.html` | Blog. Imagen para compartir de cada artículo en `blog/img/og-*.jpg` |
| `analytics-copilot/index.html` | Página de la extensión, con sus capturas en `analytics-copilot/img/` |
| `404.html` y `thankyou.html` | Página no encontrada (con sus estilos dentro) y página de descarga del CV |
| `src/` | El Worker: `/api/contacto` envía el formulario por email, con Turnstile |
| `fonts/` | IBM Plex Sans, Caveat e IBM Plex Mono, servidas desde el dominio |
| `img/marca/` | Chispa y garabatos. Se copian de `marca/mascota/limpias/` y `marca/garabatos/limpias/` del proyecto de marca |
| `img/logos/` | Logos oficiales de herramientas, tal cual y en SVG |
| `img/og-home.png`, `favicon-96.png`, `apple-touch-icon.png` | Se generan con `marca/herramientas/generar-og.ps1` del proyecto de marca |
| `sitemap.xml`, `robots.txt`, `llms.txt`, `_redirects`, `_headers` | SEO, redirecciones 301 y cabeceras |
| `.assetsignore` | Lo que no se publica: `src/`, `.git/`, este `CLAUDE.md`, `herramientas-dev/`... |

## Textos

- Cada texto visible lleva `data-i18n="clave"` en el HTML. Su valor está en `script.js`, dentro de `I18N.es` y de `I18N.en`.
- El HTML lleva el mismo texto en español, para buscadores y para quien navega sin JavaScript.

**Para cambiar un texto:**
1. Busca la clave en el HTML.
2. Cambia `es` y `en` en `script.js`.
3. Ejecuta `node herramientas-dev/comprobar.js --sync`, que copia el español al HTML.

**Para añadir un texto:** pon `data-i18n` en el HTML y añade la clave en los dos idiomas.

Otros atributos:
- `data-i18n-attr="aria-label:clave"` traduce un atributo.
- `data-i18n-title` en `<html>` traduce el `<title>`.

El JS cambia el texto con `textContent`. Si un trozo va resaltado (un `<mark>` o una cifra que cuenta), se parte en varias claves.

## Movimiento

- `.reveal`: el bloque sube y aparece al entrar en pantalla.
- `data-reveal="stagger"` en una lista: los hijos entran uno detrás de otro.
- `mark`: el fosforito se pasa.
- `.note`: la nota a mano se escribe.

Todo esto lo gestiona `initReveal` en `script.js`, con el CSS en el apartado "Trazos que se dibujan" de `styles.css`. Lo de la home está en `home.js`. Con movimiento reducido todo aparece sin animar.

## Comprobar un cambio

1. `node herramientas-dev/comprobar.js` revisa:
   - que no falte ninguna clave en ninguno de los dos idiomas;
   - que el HTML coincida con el español;
   - que no haya enlaces rotos;
   - las claves sin uso, que se borran con `--limpiar`.
2. `node herramientas-dev/servidor.js` levanta la web en http://localhost:8787, sin GTM ni Roometrics y sin el banner de cookies.
3. `node herramientas-dev/captura.js <url> <salida.png> [ancho] [en] [script]` saca una captura; las instrucciones van en la cabecera del archivo. `powershell -ExecutionPolicy Bypass -File herramientas-dev\trocear.ps1 -Ruta <png>` parte la captura en trozos.

Las capturas se guardan en la carpeta temporal de la sesión, nunca en el repo.

## Pendiente

- `cv-antonio-perez.pdf` todavía tiene el CV antiguo.
- El inicio no tiene foto hasta que esté la nueva.
