/**
 * Punto de entrada del Worker.
 *
 * El sitio es HTML plano y lo sirve Cloudflare desde los activos estaticos.
 * Este Worker existe solo para la unica ruta que necesita servidor: el
 * formulario de contacto. Todo lo demas se delega en la vinculacion ASSETS,
 * que resuelve indices de carpeta, el 404 propio, _headers y _redirects.
 */

import { manejaContacto, json } from './contacto.js';

export default {
    async fetch(request, env) {
        const url = new URL(request.url);

        if (url.pathname === '/api/contacto') {
            if (request.method !== 'POST') {
                return json({ ok: false, error: 'metodo' }, 405);
            }
            return manejaContacto(request, env);
        }

        return env.ASSETS.fetch(request);
    }
};
