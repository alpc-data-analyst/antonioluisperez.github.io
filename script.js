/* =============================================================
   Antonio Luis Pérez · Portfolio
   Solo lo necesario: i18n ES/EN y el año del footer.
   ============================================================= */

(() => {
    'use strict';

    /* ---------- i18n dictionaries ---------- */
    const I18N = {
        es: {
            skip_link: 'Saltar al contenido',
            nav_about: 'Sobre mí',
            nav_stack: 'Stack',
            nav_projects: 'Proyectos',
            nav_tools: 'Herramientas',
            nav_contact: 'Contacto',
            nav_cv: 'CV ↓',
            nav_cv_aria: 'Descargar CV',
            nav_main_aria: 'Principal',
            lang_aria: 'Idioma',
            page_title: 'Antonio Luis Pérez · AI & Data Analyst · Málaga',

            hero_status: 'Málaga, España · Analista de datos disponible para proyectos',
            hero_role: 'AI & Data Analyst',
            hero_owner: 'Owner de Roometrics.es, analítica web sin cookies',
            hero_cta_cv: 'Descargar CV',
            hero_cta_contact: 'Hablemos',
            hero_dek: 'Llegué por el marketing y me quedé por los datos.',
            hero_sub: 'Analista digital en Paraty Tech, con un máster de Data Science e IA recién terminado. Mi día a día va de medir bien, hacer buenas preguntas y conseguir que los datos acaben en decisiones, no en un PDF que nadie abre.',

            about_tag: '01 · Sobre mí',
            about_title: 'Mente curiosa con criterio de negocio.',
            about_lead: 'Soy Antonio Luis y dedico el día a llevar los datos de crudos a útiles. Trabajo con Python y SQL, pregunto «por qué» más de la cuenta y no doy un análisis por cerrado hasta que alguien decide algo con él.',
            about_h1: 'Qué hago',
            about_p1: 'Análisis de datos y modelado ML de punta a punta, desde la ingesta y limpieza en SQL hasta experimentos en Python y despliegue en cloud.',
            about_h2: 'Cómo trabajo',
            about_p2: 'Métricas honestas, modelos sencillos primero, código limpio y dashboards que cuentan una historia. Si no lleva a una decisión, no se lanza.',
            about_h3: 'Qué me mueve',
            about_p3: 'ML aplicado, NLP, automatización cloud y encontrar ese gráfico que hace callar a toda la sala.',
            about_cv: 'Descargar CV (PDF)',
            about_linkedin: 'Ver LinkedIn',

            timeline_tag: 'Trayectoria',
            timeline_title: 'Cómo llegué aquí.',
            tl_uma_role: 'Grado en Marketing e Investigación de Mercados',
            tl_uma_text: 'Cuatro años de grado intentando ser un crack del marketing, para acabar descubriendo que lo que me enganchaba de verdad no eran las campañas bonitas sino los datos que venían detrás. Plot twist aceptado.',
            tl_taco_date: 'Sep 2022 → Abr 2025',
            tl_taco_role: 'De cocinero de línea a Shift Leader',
            tl_taco_text: 'Empecé friendo y acabé llevando turnos enteros como shift leader. Suena a anécdota de CV, pero ahí aprendí a gestionar equipos, controlar inventario y decidir bajo presión real. El MBA de la freidora, y no lo cambio.',
            tl_windup_date: 'Sep 2024 → Abr 2025',
            tl_windup_role: 'Máster en Marketing Digital + Digital Analytics Junior',
            tl_windup_text: 'Máster de 532h en marketing digital mientras trabajaba como Digital Analytics Junior. Mi primer asalto a la analítica real, con GA4, GTM, DataLayer, dashboards y auditorías de tracking junto a equipos de Paid, SEO y CRO. El momento «ah, esto es lo que quiero hacer».',
            tl_talent_role: 'Finalista · FYCMA y Diario SUR',
            tl_talent_text: 'Elegido entre los 25 finalistas de un programa intensivo de tres días organizado por FYCMA y Diario SUR. Dinámicas, paneles y networking para conectar al talento joven de Málaga con las empresas de la región.',
            tl_paraty_date: 'Mar 2025 → Actualmente',
            tl_paraty_text: 'Analítica digital end-to-end en hospitality tech. Medición con GA4 y GTM en web y server side, diseño de DataLayers y auditorías de tracking para que el dato llegue limpio. Análisis con SQL en BigQuery, dashboards en Looker Studio y Power BI, funnels y atribución. También la parte que pocos quieren tocar, Consent Mode, GDPR y conversiones mejoradas con Google Ads y Meta CAPI.',
            tl_bigschool_role: 'Máster en Data Science e IA · 400h',
            tl_bigschool_text: '400h para formalizar el salto a Data Science. Machine Learning, Explainable AI, Python, SQL, Tableau y analítica en cloud aplicados a proyectos reales. El puente del mundo analyst al scientist. Construido, y en piedra.',
            tl_current: 'Actual',
            tl_done: 'Completado',

            stack_tag: '02 · Stack',
            stack_title: 'Las herramientas con las que me muevo cada día.',
            stack_core_title: 'Python y SQL',
            stack_viz_title: 'Analítica y Viz',
            stack_meas_title: 'Medición y privacidad',
            stack_meas_tools: 'DataLayer · Consent Mode · GDPR · Meta CAPI · Conversiones mejoradas · Tests A/B · CRO',
            stack_ml_title: 'Machine Learning',
            stack_cloud_title: 'Cloud y DevOps',
            stack_data_title: 'Ingeniería de datos',
            stack_certs: 'Certificaciones',
            sash_aria: 'Insignias de certificación',
            stack_certs_joke: 'Mis amigos dicen que colecciono certificados como Russell el de Up. No les falta razón.',
            stack_lang: 'Inglés · B2 First',
            stack_az: 'Azure AZ-900 · en curso',

            proj_tag: '03 · Proyectos',
            proj_title: 'Proyectos de datos y producto.',
            proj_cta: 'Pedir el case study',
            proj_fraud_title: 'Detección de fraude bancario con ML',
            proj_fraud_text: 'Modelo end-to-end sobre 590K transacciones reales del dataset IEEE-CIS, con 434 variables entre datos de transacción y señales de identidad como el dispositivo, el dominio de correo o la geolocalización. Un Gradient Boosting de 500 árboles hace el trabajo. El hallazgo está en el umbral. Con el 0.5 por defecto se escapaba más fraude del que se cazaba, y al bajarlo a 0.1 el modelo pasa a capturar el 60% de todo el fraude molestando solo al 0.46% de usuarios legítimos.',
            proj_fraud_m1: 'transacciones',
            proj_fraud_m2: 'variables',
            proj_fraud_m4: 'fraude detectado',
            proj_fraud_repo: 'Ver el código en GitHub',
            proj_fraud_cta: 'Leer en LinkedIn',
            proj_rm_title: 'Roometrics, analítica web sin cookies',
            proj_rm_text: 'Producto propio, en producción. Analítica web que mide sin cookies, sin guardar IPs y sin banner de consentimiento. Cada visita se convierte en un código anonimizado con claves de cifrado que rotan a diario, así que no queda nada que consentir. Se instala en dos líneas o directamente desde GTM, los datos se quedan en servidores europeos y el panel cubre visitantes en tiempo real, atribución de campañas, ingresos por fuente, embudos y eventos. La idea salió de una frase que resume el problema: cuando algo es gratis, el producto eres tú.',
            proj_rm_m2: 'líneas para instalarlo',
            proj_rm_m3: 'rotación de claves',
            proj_rm_m4_val: 'UE',
            proj_rm_m4: 'servidores',
            proj_rm_cta: 'Ver Roometrics en vivo',
            proj_rnn_title: 'Modelado secuencial con RNNs y LSTMs',
            proj_rnn_text: 'Forecasting de series temporales y detección de patrones sobre datos secuenciales. Entrenamiento, evaluación y benchmarks honestos contra baselines más simples.',
            proj_db_title: 'Implementación SQL / NoSQL a medida',
            proj_db_text: 'Capa de base de datos híbrida pensada para cargas analíticas. Trade-offs de esquema, patrones de consulta y esas victorias aburridas que hacen que los dashboards vuelen.',

            tools_tag: '04 · Herramientas',
            tools_title: 'Herramientas que monto cuando lo de fuera no encaja.',
            tools_lead: 'Un set creciente de utilidades que construyo para mí y libero públicamente. Sin cuentas, sin tracking y sin que tus datos salgan de tu navegador.',
            tool_blurr_tagline: 'Tacha datos sensibles sin que salgan de tu equipo.',
            tool_blurr_text: 'La mayoría de filtraciones de datos no son hackeos. Pasan cuando alguien sube un pantallazo con emails o IDs de usuario a la primera web de «blur online» que encuentra. Blurr Tool funciona 100% en tu navegador. Sueltas una imagen o un PDF, tachas lo sensible y descargas. Cero uploads, cero tracking, cero letra pequeña.',
            tool_chip_local: '100% local',
            tool_chip_formats: 'Imágenes + PDF',
            tool_chip_modes: 'Pixelar o Blur',
            tool_chip_os: 'Open source',
            tool_chip_notrack: 'Sin tracking',
            tool_utm_tagline: 'Construye URLs con UTMs consistentes y valida los que ya tienes.',
            tool_utm_text: 'Formulario con plantillas por canal, preview en vivo y validación que caza params faltantes, espacios, mayúsculas y valores fuera de convención. Modo bulk para generar muchas URLs a la vez desde CSV. Historial local y cero uploads.',
            tool_utm_chip_combo: 'Builder + Validador',
            tool_utm_chip_templates: 'Plantillas por canal',
            tool_utm_chip_bulk: 'Modo bulk',
            tool_bank_tagline: 'Convierte un tracking caótico de apuestas en una vista cuantitativa y fría.',
            tool_bank_text: 'Log de apuestas, EV por operación, Kelly fraccionado y curva de equity con drawdown. Avisa cuando un stake supera el 5% de la banca o una apuesta tiene valor esperado negativo. Herramienta de disciplina, no de tipster.',
            tool_bank_chip_ev: 'EV + Kelly',
            tool_bank_chip_equity: 'Curva de equity',
            tool_bank_chip_alerts: 'Alertas de riesgo',
            tool_bank_chip_bilingual: 'Bilingüe',

            contact_tag: '05 · Contacto',
            contact_title: '¿Hablamos?',
            contact_cv: 'CV en PDF',
            contact_reply: 'Suelo responder en el día.',
            wa_href: 'https://wa.me/34601427159?text=Hola%20Antonio%20Luis%2C%20vi%20tu%20portfolio%20y%20me%20gustar%C3%ADa%20saber%20m%C3%A1s.',

            footer_love: 'Hecho a mano con HTML, CSS y JS planos. Sin plantilla.',
            footer_updated: 'Última actualización: ago 2026',
            footer_cookies: 'Preferencias de cookies',

            consent_title: 'Cookies',
            consent_text: 'Uso Google Analytics para saber qué se lee de esta web y qué no. Ni publicidad, ni venta de datos, ni perfilado. Si prefieres que no mida, no mido y aquí no pasa nada.',
            consent_accept: 'Aceptar',
            consent_reject: 'Rechazar',

            nf_title: 'Aquí no hay datos.',
            nf_text: 'Esta página no existe, o existió y ya no. Lo mejor que puedo ofrecerte es volver al principio, que ahí sí hay cosas.',
            nf_back: 'Volver al portfolio',

            thankyou_title: '¡Gracias por descargar mi CV!',
            thankyou_sub: 'La descarga debería arrancar sola. Mientras, échale un ojo al resto del portfolio.',
            thankyou_cta: 'Volver al portfolio',
            thankyou_retry: '¿No arrancó? Haz click aquí.'
        },
        en: {
            skip_link: 'Skip to content',
            nav_about: 'About',
            nav_stack: 'Stack',
            nav_projects: 'Projects',
            nav_tools: 'Tools',
            nav_contact: 'Contact',
            nav_cv: 'CV ↓',
            nav_cv_aria: 'Download CV',
            nav_main_aria: 'Main',
            lang_aria: 'Language',
            page_title: 'Antonio Luis Pérez · AI & Data Analyst · Málaga, Spain',

            hero_status: 'Málaga, Spain · Data analyst available for projects',
            hero_role: 'AI & Data Analyst',
            hero_owner: 'Owner of Roometrics.es, cookieless web analytics',
            hero_cta_cv: 'Download CV',
            hero_cta_contact: "Let's talk",
            hero_dek: 'Came for the marketing, stayed for the data.',
            hero_sub: "Digital analyst at Paraty Tech, with a master's in Data Science & AI just wrapped up. My days are about measuring things right, asking good questions and getting data to end up in decisions, not in a PDF nobody opens.",

            about_tag: '01 · About',
            about_title: 'A curious mind with a critical business eye.',
            about_lead: "I'm Antonio Luis and I spend my days taking data from raw to useful. I work with Python and SQL, ask \"why\" more than I probably should, and don't call an analysis done until someone makes a decision with it.",
            about_h1: 'What I do',
            about_p1: 'Data analysis and ML modeling end-to-end, from SQL ingestion and cleaning to Python experiments and cloud deployment.',
            about_h2: 'How I work',
            about_p2: "Honest metrics, simple models first, clean code and dashboards that tell a story. If it doesn't drive a decision, it doesn't ship.",
            about_h3: "What I'm into",
            about_p3: 'Applied ML, NLP, cloud automation and finding the one chart that makes the room go quiet.',
            about_cv: 'Download CV (PDF)',
            about_linkedin: 'View LinkedIn',

            timeline_tag: 'Journey',
            timeline_title: 'How I got here.',
            tl_uma_role: 'BA in Marketing and Market Research',
            tl_uma_text: "Four years chasing a marketing career, only to find out what really hooked me wasn't the pretty campaigns but the data behind them. Plot twist accepted.",
            tl_taco_date: 'Sep 2022 → Apr 2025',
            tl_taco_role: 'From line cook to Shift Leader',
            tl_taco_text: "Started on the fryers and ended up running entire shifts as a shift leader. Sounds like a CV anecdote, but that's where I learned to manage teams, keep inventory in check and make calls under real pressure. The fryer-side MBA, and I'd do it again.",
            tl_windup_date: 'Sep 2024 → Apr 2025',
            tl_windup_role: 'Master in Digital Marketing + Digital Analytics Junior',
            tl_windup_text: "A 532h digital marketing master while working as a Digital Analytics Junior. My first real dive into analytics, with GA4, GTM, DataLayer, dashboards and tracking audits alongside Paid, SEO and CRO teams. The 'yeah, this is what I want to do' moment.",
            tl_talent_role: 'Finalist · FYCMA & Diario SUR',
            tl_talent_text: "Selected among the 25 finalists of a three-day intensive program run by FYCMA and Diario SUR, connecting Málaga's young talent with the region's companies through dynamics, panels and networking.",
            tl_paraty_date: 'Mar 2025 → Present',
            tl_paraty_text: 'End-to-end digital analytics in hospitality tech. Measurement with GA4 and GTM across web and server side, DataLayer design and tracking audits so the data arrives clean. Analysis with SQL in BigQuery, dashboards in Looker Studio and Power BI, funnels and attribution. Plus the part few people want to touch, Consent Mode, GDPR and enhanced conversions with Google Ads and Meta CAPI.',
            tl_bigschool_role: 'Master in Data Science and AI · 400h',
            tl_bigschool_text: 'A 400h master to formalize the jump into Data Science. Machine Learning, Explainable AI, Python, SQL, Tableau and cloud analytics applied to real projects. The bridge from analyst to scientist. Built, and set in stone.',
            tl_current: 'Current',
            tl_done: 'Completed',

            stack_tag: '02 · Stack',
            stack_title: 'Tools I reach for every day.',
            stack_core_title: 'Python & SQL',
            stack_viz_title: 'Analytics & Viz',
            stack_meas_title: 'Measurement & privacy',
            stack_meas_tools: 'DataLayer · Consent Mode · GDPR · Meta CAPI · Enhanced conversions · A/B testing · CRO',
            stack_ml_title: 'Machine Learning',
            stack_cloud_title: 'Cloud & DevOps',
            stack_data_title: 'Data engineering',
            stack_certs: 'Certifications',
            sash_aria: 'Certification badges',
            stack_certs_joke: "My friends say I collect certificates like Russell from Up. They're not wrong.",
            stack_lang: 'English · B2 First',
            stack_az: 'Azure AZ-900 · in progress',

            proj_tag: '03 · Projects',
            proj_title: 'Data and product work.',
            proj_cta: 'Request the case study',
            proj_fraud_title: 'Bank fraud detection with ML',
            proj_fraud_text: 'End-to-end model on 590K real transactions from the IEEE-CIS dataset, with 434 features across transaction data and identity signals like device, email domain or geolocation. A 500-tree Gradient Boosting does the work. The real finding was the threshold. At the default 0.5 more fraud slipped through than got caught, and dropping it to 0.1 the model captures 60% of all fraud while bothering only 0.46% of legitimate users.',
            proj_fraud_m1: 'transactions',
            proj_fraud_m2: 'features',
            proj_fraud_m4: 'fraud caught',
            proj_fraud_repo: 'View the code on GitHub',
            proj_fraud_cta: 'Read on LinkedIn',
            proj_rm_title: 'Roometrics, cookieless web analytics',
            proj_rm_text: 'My own product, in production. Web analytics that measures without cookies, without storing IPs and without a consent banner. Every visit becomes an anonymized code with encryption keys that rotate daily, so there is nothing left to consent to. Two lines to install, or straight from GTM. Data stays on European servers and the dashboard covers real-time visitors, campaign attribution, revenue by source, funnels and events. The idea came from one line that sums up the problem: when something is free, you are the product.',
            proj_rm_m2: 'lines to install it',
            proj_rm_m3: 'key rotation',
            proj_rm_m4_val: 'EU',
            proj_rm_m4: 'servers',
            proj_rm_cta: 'See Roometrics live',
            proj_rnn_title: 'Sequence modeling with RNNs & LSTMs',
            proj_rnn_text: 'Time-series forecasting and pattern detection on sequential data. Training, evaluation and honest benchmarks against simpler baselines.',
            proj_db_title: 'Custom SQL / NoSQL implementation',
            proj_db_text: 'Hybrid database layer designed for analytics workloads. Schema trade-offs, query patterns and the boring wins that make dashboards feel instant.',

            tools_tag: '04 · Tools',
            tools_title: 'Small tools I ship when nothing off-the-shelf fits.',
            tools_lead: 'A growing set of utilities I build for myself and release publicly. No accounts, no tracking, and your data never leaves your browser.',
            tool_blurr_tagline: 'Redact sensitive data without it leaving your machine.',
            tool_blurr_text: "Most data leaks aren't hacks. They happen when someone uploads a screenshot with emails or user IDs to the first \"blur online\" site they find. Blurr Tool runs 100% in your browser. Drop an image or a PDF, redact the sensitive bits and download. Zero uploads, zero tracking, zero fine print.",
            tool_chip_local: '100% local',
            tool_chip_formats: 'Images + PDF',
            tool_chip_modes: 'Pixelate or Blur',
            tool_chip_os: 'Open source',
            tool_chip_notrack: 'No tracking',
            tool_utm_tagline: 'Build consistent UTM URLs and validate the ones you already have.',
            tool_utm_text: 'Form with channel templates, live preview and validation that catches missing params, spaces, casing and out-of-convention values. Bulk mode generates many URLs at once from CSV. Local history and zero uploads.',
            tool_utm_chip_combo: 'Builder + Validator',
            tool_utm_chip_templates: 'Channel templates',
            tool_utm_chip_bulk: 'Bulk mode',
            tool_bank_tagline: 'Turn messy betting tracking into a cold, quantitative view.',
            tool_bank_text: 'Bet log, EV per entry, fractional Kelly and an equity curve with drawdown. It flags any stake above 5% of bankroll and any entry with negative expected value. A discipline tool, not a tipster.',
            tool_bank_chip_ev: 'EV + Kelly',
            tool_bank_chip_equity: 'Equity curve',
            tool_bank_chip_alerts: 'Risk alerts',
            tool_bank_chip_bilingual: 'Bilingual',

            contact_tag: '05 · Contact',
            contact_title: "Let's talk.",
            contact_cv: 'CV as PDF',
            contact_reply: 'I usually reply within the day.',
            wa_href: 'https://wa.me/34601427159?text=Hi%20Antonio%20Luis%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20know%20more.',

            footer_love: 'Hand-built with plain HTML, CSS and JS. No template.',
            footer_updated: 'Last updated: Aug 2026',
            footer_cookies: 'Cookie preferences',

            consent_title: 'Cookies',
            consent_text: 'I use Google Analytics to know what gets read on this site and what does not. No ads, no data selling, no profiling. If you would rather I did not measure, I will not, and nothing here breaks.',
            consent_accept: 'Accept',
            consent_reject: 'Reject',

            nf_title: 'No data here.',
            nf_text: 'This page does not exist, or it did and no longer does. The best I can offer is going back to the start, where there is actually something.',
            nf_back: 'Back to portfolio',

            thankyou_title: 'Thanks for downloading my CV!',
            thankyou_sub: 'Your download should start automatically. While you wait, take a look at the rest of the portfolio.',
            thankyou_cta: 'Back to portfolio',
            thankyou_retry: "Download didn't start? Click here."
        }
    };

    /* ---------- Language ---------- */
    const STORAGE_KEY = 'alpc_lang';
    const supportedLangs = Object.keys(I18N);

    // Los rastreadores anuncian navigator.language en inglés. Sin este guard,
    // Googlebot renderiza el JS, ve la web traducida al inglés e indexa esa
    // versión, aunque el HTML servido esté en español y así lo declare <html
    // lang="es">. Para bots respetamos siempre el idioma del documento.
    const isCrawler = () => /bot|crawler|spider|crawling|lighthouse|headlesschrome|slurp|bingpreview|facebookexternalhit|embedly|quora link preview|whatsapp|telegrambot|linkedinbot|twitterbot|discordbot|applebot|petalbot|yandex|duckduckbot|baiduspider/i
        .test(navigator.userAgent || '');

    const detectLang = () => {
        let stored = null;
        try {
            stored = localStorage.getItem(STORAGE_KEY);
        } catch (e) { /* localStorage no disponible */ }
        if (stored && supportedLangs.includes(stored)) return stored;
        if (isCrawler()) return 'es';
        const browser = (navigator.language || 'es').slice(0, 2).toLowerCase();
        return supportedLangs.includes(browser) ? browser : 'en';
    };

    /* ---------- Medición ---------- */
    // El texto de la web cambia con el idioma, así que cualquier trigger de GTM
    // basado en el texto del clic se rompe al cambiar de ES a EN. Por eso los
    // eventos se empujan desde el código con nombres estables, no desde GTM.
    const track = (event, params) => {
        try {
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push(Object.assign({
                event: event,
                site_language: document.documentElement.lang || 'es'
            }, params || {}));
        } catch (e) { /* nunca romper la navegación por medir */ }
    };
    window.alpcTrack = track;

    const applyTranslations = (lang) => {
        const dict = I18N[lang] || I18N.es;
        document.documentElement.lang = lang;

        // Solo las páginas que lo piden traducen el <title>, mediante
        // data-i18n-title en <html>. Así thankyou.html conserva el suyo.
        const titleKey = document.documentElement.getAttribute('data-i18n-title');
        if (titleKey && dict[titleKey] != null) document.title = dict[titleKey];

        document.querySelectorAll('[data-i18n]').forEach((el) => {
            const key = el.getAttribute('data-i18n');
            if (dict[key] != null) el.textContent = dict[key];
        });

        document.querySelectorAll('[data-i18n-attr]').forEach((el) => {
            const pairs = el.getAttribute('data-i18n-attr').split(',');
            pairs.forEach((pair) => {
                const [attr, key] = pair.split(':').map((s) => s && s.trim());
                if (attr && key && dict[key] != null) el.setAttribute(attr, dict[key]);
            });
        });

        const btnEs = document.getElementById('btn-es');
        const btnEn = document.getElementById('btn-en');
        if (btnEs && btnEn) {
            btnEs.classList.toggle('is-active', lang === 'es');
            btnEn.classList.toggle('is-active', lang === 'en');
            btnEs.setAttribute('aria-pressed', String(lang === 'es'));
            btnEn.setAttribute('aria-pressed', String(lang === 'en'));
        }
    };

    const setLang = (lang) => {
        if (!supportedLangs.includes(lang)) return;
        try {
            localStorage.setItem(STORAGE_KEY, lang);
        } catch (e) { /* localStorage no disponible */ }
        applyTranslations(lang);
    };

    // Expuesto para la página de gracias
    window.setLanguage = setLang;

    /* ---------- Consentimiento ---------- */
    // La preferencia va en cookie, no en localStorage, porque el snippet del
    // <head> la lee antes de que cargue GTM para restaurar la decisión previa,
    // y ahí todavía no se ha ejecutado este fichero.
    const CONSENT_COOKIE = 'alpc_consent';
    const CONSENT_DAYS = 180;

    const readConsent = () => {
        const m = document.cookie.match(/(?:^|;\s*)alpc_consent=([^;]*)/);
        return m ? decodeURIComponent(m[1]) : null;
    };

    const writeConsent = (value) => {
        const d = new Date();
        d.setTime(d.getTime() + CONSENT_DAYS * 86400000);
        document.cookie = CONSENT_COOKIE + '=' + encodeURIComponent(value) +
            '; expires=' + d.toUTCString() +
            '; path=/; SameSite=Lax' +
            (location.protocol === 'https:' ? '; Secure' : '');
    };

    const initConsent = () => {
        const box = document.getElementById('consent');
        if (!box) return;

        // Sin GTM en la página no hay nada que consentir (por ejemplo el 404).
        if (typeof window.gtag !== 'function') return;

        const accept = document.getElementById('consent-accept');
        const reject = document.getElementById('consent-reject');
        if (!accept || !reject) return;

        const focusables = [accept, reject];
        let lastFocus = null;

        const onKeydown = (e) => {
            if (e.key !== 'Tab') return;
            // Encierra el foco entre los dos botones: sin decisión no se
            // puede tabular hasta el contenido de debajo.
            e.preventDefault();
            const i = focusables.indexOf(document.activeElement);
            const next = e.shiftKey
                ? (i <= 0 ? focusables.length - 1 : i - 1)
                : (i === focusables.length - 1 ? 0 : i + 1);
            focusables[next].focus();
        };

        const close = (state) => {
            writeConsent(state);
            const granted = state === 'granted';
            window.gtag('consent', 'update', {
                ad_storage: granted ? 'granted' : 'denied',
                ad_user_data: granted ? 'granted' : 'denied',
                ad_personalization: granted ? 'granted' : 'denied',
                analytics_storage: granted ? 'granted' : 'denied'
            });
            track('consent_decision', { consent_state: state });

            box.hidden = true;
            document.body.classList.remove('consent-open');
            document.removeEventListener('keydown', onKeydown, true);
            if (lastFocus && lastFocus.focus) lastFocus.focus();
        };

        const open = () => {
            lastFocus = document.activeElement;
            box.hidden = false;
            document.body.classList.add('consent-open');
            document.addEventListener('keydown', onKeydown, true);
            accept.focus();
        };

        accept.addEventListener('click', () => close('granted'));
        reject.addEventListener('click', () => close('denied'));

        // Cambiar de opinión tiene que ser tan fácil como consentir, así que
        // cualquier elemento con data-consent-reopen vuelve a abrir el panel.
        // Se engancha ANTES de comprobar la cookie: quien ya decidió es
        // precisamente quien necesita el enlace.
        document.querySelectorAll('[data-consent-reopen]').forEach((el) => {
            el.addEventListener('click', (e) => {
                e.preventDefault();
                open();
            });
        });

        // A los rastreadores no se les tapa el contenido con un overlay: no
        // guardan cookies, no deciden nada, y Google no tiene por qué ver la
        // página con un interstitial encima.
        if (isCrawler()) return;

        // Ya decidió antes: el <head> restauró la decisión, no molestamos.
        if (readConsent()) return;

        open();
    };

    /* ---------- Eventos de interacción ---------- */
    const initTracking = () => {
        // Clics marcados a mano con data-track (CV, contacto, Roometrics...)
        document.querySelectorAll('[data-track]').forEach((el) => {
            el.addEventListener('click', () => {
                track(el.getAttribute('data-track'), {
                    link_location: el.getAttribute('data-track-location') || 'unknown',
                    link_url: el.getAttribute('href') || ''
                });
            });
        });

        // Salidas hacia dominios externos, incluidos mis propios productos
        document.querySelectorAll('a[target="_blank"][href^="http"]').forEach((el) => {
            if (el.hasAttribute('data-track')) return;
            let host = '';
            try { host = new URL(el.href).hostname.replace(/^www\./, ''); } catch (e) { return; }
            el.addEventListener('click', () => {
                track('outbound_click', { link_domain: host, link_url: el.href });
            });
        });

        // Profundidad de lectura por secciones, una vez por sección y visita
        if ('IntersectionObserver' in window) {
            const seen = new Set();
            const io = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    const id = entry.target.id;
                    if (entry.isIntersecting && id && !seen.has(id)) {
                        seen.add(id);
                        track('section_viewed', { section_id: id });
                        io.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.4 });
            document.querySelectorAll('main section[id]').forEach((s) => io.observe(s));
        }
    };

    /* ---------- Boot ---------- */
    const boot = () => {
        applyTranslations(detectLang());

        const btnEs = document.getElementById('btn-es');
        const btnEn = document.getElementById('btn-en');
        if (btnEs) btnEs.addEventListener('click', () => { setLang('es'); track('language_switched', { language_to: 'es' }); });
        if (btnEn) btnEn.addEventListener('click', () => { setLang('en'); track('language_switched', { language_to: 'en' }); });

        const year = document.getElementById('current-year');
        if (year) year.textContent = new Date().getFullYear();

        initTracking();
        initConsent();
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', boot);
    } else {
        boot();
    }
})();
