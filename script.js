/* =============================================================
   Antonio Luis Pérez · Portfolio
   Interactions: i18n, reveals, nav, cursor glow, tilt, magnets.
   ============================================================= */

(() => {
    'use strict';

    /* ---------- i18n dictionaries ---------- */
    const I18N = {
        en: {
            skip_link: 'Skip to content',
            nav_about: 'About',
            nav_stack: 'Stack',
            nav_projects: 'Projects',
            nav_tools: 'Tools',
            nav_contact: 'Contact',
            nav_cv: 'CV',
            nav_cv_aria: 'Download CV',

            hero_status: 'Available for new projects',
            hero_hi: "Hi, I'm",
            hero_role: 'Data Analyst & Data Scientist',
            hero_sub: 'I turn raw data into decisions that move the business, from messy SQL to deployed ML on AWS.',
            hero_cta_projects: 'See my projects',
            hero_cta_contact: "Let's talk",
            hero_scroll: 'Scroll',

            stat_focus: 'Focus',
            stat_stack: 'Main stack',
            stat_based: 'Based in',

            about_tag: '01 / About',
            about_title: 'A curious mind with a critical business eye.',
            about_lead: "I'm Antonio Luis, and I spend my days moving data from raw to useful. My stack is Python and SQL, my habit is asking \"why\", and my goal is every insight ending in a decision.",
            about_h1: 'What I do',
            about_p1: 'Data analysis and ML modeling end-to-end: from ingestion and cleaning in SQL to experiments in Python and deployment on AWS EC2.',
            about_h2: 'How I work',
            about_p2: "Honest metrics, simple models first, clean code and dashboards that tell a story. If it doesn't drive a decision, it doesn't ship.",
            about_h3: "What I'm into",
            about_p3: 'Applied ML (RNNs, LSTMs), NLP, cloud automation and finding the one chart that makes the room go quiet.',
            about_cv: 'Download CV (PDF)',
            about_linkedin: 'See LinkedIn',

            timeline_tag: 'Journey',
            timeline_title: 'How I got here.',
            timeline_lead: 'Marketing to data, with stops nobody ever plans in a career roadmap.',
            tl_uma_role: 'BA in Marketing and Market Research',
            tl_uma_text: "Four years chasing a marketing career, only to find out the fun part wasn't the creative briefs but the data behind them. Plot twist accepted.",
            tl_taco_text: "Three years as a team leader between burritos and Friday-night shifts. Sounds like a CV anecdote, but this is where I learned people management, inventory, and decision-making under real pressure. Call it the fryer-side MBA, and I'd do it again.",
            tl_windup_date: 'Sep 2024 → Apr 2025',
            tl_windup_role: 'Master in Digital Marketing + Digital Analytics Junior',
            tl_windup_text: "A 532h digital marketing master alongside my first real dive into analytics: GA4, GTM, DataLayer, dashboards and tracking audits with Paid, SEO and CRO teams. The 'yeah, this is what I want to do' moment.",
            tl_paraty_date: 'Mar 2025 → Present',
            tl_paraty_text: 'End-to-end digital analytics in hospitality tech. Reporting and KPI modeling on GA4, Power BI, Looker Studio and BigQuery. Tracking implementation and validation with GTM and DataLayer. Behaviour analysis with Hotjar and Clarity. Currently deepening SQL and Python to round off a full Data Scientist profile.',
            tl_bigschool_role: 'Master in Data Science and AI · 400h',
            tl_bigschool_text: 'A 400h master to formalize the jump into Data Science. Machine Learning, Explainable AI, Python, SQL, Tableau and cloud analytics applied to real-world projects. The bridge from the analyst world to the scientist one, this time built in stone.',
            tl_current: 'Current',
            tl_ongoing: 'In progress',

            stack_tag: '02 / Stack',
            stack_title: 'Tools I reach for every day.',
            stack_lead: 'A pragmatic stack for analytics and ML, picked for what ships, not what sounds cool.',
            stack_core_title: 'Python & SQL',
            stack_core_text: 'Pandas, NumPy, Scikit-learn, PyTorch. PostgreSQL and MySQL for anything that breathes data.',
            stack_cloud_title: 'Cloud & DevOps',
            stack_cloud_text: 'AWS EC2 for training and serving. Bash and Git for everything in between.',
            stack_ml_title: 'Machine Learning',
            stack_ml_text: 'Classical ML to deep learning: RNNs, LSTMs and applied NLP.',
            stack_viz_title: 'Analytics & Viz',
            stack_viz_text: 'Looker, GA4, Tag Manager, Adobe Analytics. Matplotlib for the quick "aha".',
            stack_data_title: 'Data plumbing',
            stack_data_text: "Custom SQL & NoSQL implementations, Hadoop extraction with HIVE, clean pipelines that don't wake you up at 3 AM.",

            proj_tag: '03 / Projects',
            proj_title: 'Recent work & case studies.',
            proj_lead: "A snapshot of what I've been building. Detailed write-ups landing soon. In the meantime, happy to walk you through any of them.",
            proj_featured: 'Featured',
            proj_cta: 'Request case study →',
            proj_fraud_title: 'Bank fraud detection with ML',
            proj_fraud_text: "End-to-end model on 590K real transactions from the IEEE-CIS dataset. 434 features across transactions and identity signals (device, email domain, geolocation, time of day) feeding a Gradient Boosting classifier with 500 trees. The key move: at the default 0.5 threshold the model was too polite and let more fraud through than it caught. Dropping to 0.1 flips the trade-off and catches 60% of all fraud while only adding a verification step for 0.46% of legitimate users.",
            proj_fraud_m1: 'transactions',
            proj_fraud_m2: 'features',
            proj_fraud_m4: 'fraud caught',
            proj_fraud_cta: 'Read on LinkedIn →',
            proj_rnn_title: 'Sequence modeling with RNNs & LSTMs',
            proj_rnn_text: 'Time-series forecasting and pattern detection on sequential data. Training, evaluation and honest benchmarks against simpler baselines.',
            proj_db_title: 'Custom SQL / NoSQL implementation',
            proj_db_text: 'Hybrid database layer designed for analytics workloads. Schema trade-offs, query patterns and the boring wins that make dashboards feel instant.',

            tools_tag: '04 / Tools',
            tools_title: 'Small tools I ship when nothing off-the-shelf fits.',
            tools_lead: 'A growing set of utilities I build for myself and release publicly. Privacy-first, no accounts, no tracking.',
            tool_live: 'Live',
            tool_kind_web: 'Web app',
            tool_blurr_tagline: 'Redact sensitive data without it leaving your machine.',
            tool_blurr_text: "Most data leaks aren't hacks. They happen when someone uploads a screenshot with emails, user IDs or transaction IDs to the first \"blur online\" site they find. Blurr Tool runs entirely in your browser: drop an image or a PDF, draw rectangles over the sensitive bits, download. Zero uploads, zero tracking, zero fine print.",
            tool_blurr_cta: 'Open Blurr Tool',
            tool_chip_local: '100% local',
            tool_chip_formats: 'Images + PDF',
            tool_chip_modes: 'Pixelate or Blur',
            tool_chip_os: 'Open source',
            tool_chip_notrack: 'No tracking',
            tool_soon_badge: 'In the workshop',
            tool_soon_title: 'Next one is cooking.',
            tool_soon_text: 'Got an idea for something small, useful and privacy-friendly? Ping me, I build them fast.',
            tool_soon_cta: 'Suggest a tool',

            contact_tag: '05 / Contact',
            contact_title: "Got a data problem? Let's trade ideas.",
            contact_lead: 'Full-time, freelance or "can I pick your brain for 20 minutes". All fair game.',
            contact_email: 'Email',

            footer_tagline: 'Data Analyst & Data Scientist · Málaga, ES.',
            footer_love: 'Built with care from Málaga.',

            thankyou_title: 'Thanks for downloading my CV!',
            thankyou_sub: 'Your download should start automatically. While you wait, take a look at the rest of the portfolio.',
            thankyou_cta: 'Back to portfolio',
            thankyou_retry: "Download didn't start? Click here."
        },
        es: {
            skip_link: 'Saltar al contenido',
            nav_about: 'Sobre mí',
            nav_stack: 'Stack',
            nav_projects: 'Proyectos',
            nav_tools: 'Herramientas',
            nav_contact: 'Contacto',
            nav_cv: 'CV',
            nav_cv_aria: 'Descargar CV',

            hero_status: 'Disponible para nuevos proyectos',
            hero_hi: 'Hola, soy',
            hero_role: 'Data Analyst & Data Scientist',
            hero_sub: 'Convierto datos crudos en decisiones que mueven el negocio, desde SQL denso hasta modelos ML desplegados en AWS.',
            hero_cta_projects: 'Ver mis proyectos',
            hero_cta_contact: 'Hablemos',
            hero_scroll: 'Desliza',

            stat_focus: 'Foco',
            stat_stack: 'Stack principal',
            stat_based: 'Ubicación',

            about_tag: '01 / Sobre mí',
            about_title: 'Mente curiosa con criterio de negocio.',
            about_lead: 'Soy Antonio Luis y dedico el día a llevar los datos de crudos a útiles. Mi stack es Python y SQL, mi costumbre es preguntar "por qué" y mi objetivo es que cada insight termine en una decisión.',
            about_h1: 'Qué hago',
            about_p1: 'Análisis de datos y modelado ML de punta a punta: desde ingesta y limpieza en SQL hasta experimentos en Python y despliegue en AWS EC2.',
            about_h2: 'Cómo trabajo',
            about_p2: 'Métricas honestas, primero los modelos sencillos, código limpio y dashboards que cuentan una historia. Si no lleva a una decisión, no se lanza.',
            about_h3: 'Qué me mueve',
            about_p3: 'ML aplicado (RNNs, LSTMs), NLP, automatización cloud y encontrar ese gráfico que hace callar a toda la sala.',
            about_cv: 'Descargar CV (PDF)',
            about_linkedin: 'Ver LinkedIn',

            timeline_tag: 'Trayectoria',
            timeline_title: 'Cómo llegué aquí.',
            timeline_lead: 'De marketing a data, con paradas que nadie pone en un roadmap profesional.',
            tl_uma_role: 'Grado en Marketing e Investigación de Mercados',
            tl_uma_text: 'Cuatro años de grado intentando ser un crack del marketing, para acabar descubriendo que lo que me ponía de verdad no eran las campañas bonitas sino los datos que venían detrás. Plot twist aceptado.',
            tl_taco_text: 'Tres años de team leader entre burritos y turnos de viernes noche. Suena a anécdota de CV, pero aquí aprendí gestión de equipos, control de inventario y toma de decisiones bajo presión real. El MBA de la freidora, y no lo cambio.',
            tl_windup_date: 'Sep 2024 → Abr 2025',
            tl_windup_role: 'Máster en Marketing Digital + Digital Analytics Junior',
            tl_windup_text: 'Máster de 532h en marketing digital y, en paralelo, mi primer asalto a la analítica real: GA4, GTM, DataLayer, dashboards y auditorías de tracking con equipos de Paid, SEO y CRO. El momento "ah, esto es lo que quiero hacer".',
            tl_paraty_date: 'Mar 2025 → Actualmente',
            tl_paraty_text: 'Analítica digital end-to-end en hospitality tech. Reporting y modelado de KPIs en GA4, Power BI, Looker Studio y BigQuery. Implementación y validación de tracking con GTM y DataLayer. Análisis de comportamiento con Hotjar y Clarity. Profundizando en SQL y Python para cerrar el círculo hacia Data Science.',
            tl_bigschool_role: 'Máster en Data Science e IA · 400h',
            tl_bigschool_text: '400h para formalizar el salto a Data Science. Machine Learning, Explainable AI, Python, SQL, Tableau y analítica en cloud aplicados a proyectos reales. El puente entre el mundo del analyst y el del scientist, esta vez construido en piedra.',
            tl_current: 'Actual',
            tl_ongoing: 'En curso',

            stack_tag: '02 / Stack',
            stack_title: 'Las herramientas con las que me muevo cada día.',
            stack_lead: 'Un stack pragmático para analítica y ML, elegido por lo que entrega, no por lo que suena bien.',
            stack_core_title: 'Python y SQL',
            stack_core_text: 'Pandas, NumPy, Scikit-learn, PyTorch. PostgreSQL y MySQL para todo lo que respire datos.',
            stack_cloud_title: 'Cloud y DevOps',
            stack_cloud_text: 'AWS EC2 para entrenar y servir modelos. Bash y Git para todo lo que va en medio.',
            stack_ml_title: 'Machine Learning',
            stack_ml_text: 'De ML clásico a deep learning: RNNs, LSTMs y NLP aplicado.',
            stack_viz_title: 'Analítica y Viz',
            stack_viz_text: 'Looker, GA4, Tag Manager, Adobe Analytics. Matplotlib para el "ajá" rápido.',
            stack_data_title: 'Fontanería de datos',
            stack_data_text: 'Implementaciones SQL y NoSQL a medida, extracción de Hadoop con HIVE y pipelines limpios que no te despiertan a las 3 AM.',

            proj_tag: '03 / Proyectos',
            proj_title: 'Trabajos recientes y case studies.',
            proj_lead: 'Un vistazo a lo que he estado construyendo. Los write-ups detallados llegan pronto. Mientras tanto, encantado de contártelos en directo.',
            proj_featured: 'Destacado',
            proj_cta: 'Pedir el case study →',
            proj_fraud_title: 'Detección de fraude bancario con ML',
            proj_fraud_text: 'Modelo end-to-end sobre 590K transacciones reales del dataset IEEE-CIS. 434 variables entre datos de transacción y señales de identidad (dispositivo, dominio de correo, geolocalización, hora del día) alimentan un Gradient Boosting de 500 árboles. La clave: con el umbral por defecto 0.5 el modelo era demasiado educado y dejaba pasar más fraude del que cazaba. Bajándolo a 0.1 se invierte el trade-off: captura el 60% del fraude total añadiendo una verificación extra solo al 0.46% de usuarios legítimos.',
            proj_fraud_m1: 'transacciones',
            proj_fraud_m2: 'variables',
            proj_fraud_m4: 'fraude detectado',
            proj_fraud_cta: 'Leer en LinkedIn →',
            proj_rnn_title: 'Modelado secuencial con RNNs y LSTMs',
            proj_rnn_text: 'Forecasting de series temporales y detección de patrones sobre datos secuenciales. Entrenamiento, evaluación y benchmarks honestos contra baselines más simples.',
            proj_db_title: 'Implementación SQL / NoSQL a medida',
            proj_db_text: 'Capa de base de datos híbrida pensada para cargas analíticas. Trade-offs de esquema, patrones de consulta y esas victorias aburridas que hacen que los dashboards vuelen.',

            tools_tag: '04 / Herramientas',
            tools_title: 'Herramientas que monto cuando lo de fuera no encaja.',
            tools_lead: 'Un set creciente de utilidades que construyo para mí y libero públicamente. Privacy-first, sin cuentas, sin tracking.',
            tool_live: 'En línea',
            tool_kind_web: 'Web app',
            tool_blurr_tagline: 'Tacha datos sensibles sin que salgan de tu equipo.',
            tool_blurr_text: 'La mayoría de filtraciones de datos no son hackeos. Pasan cuando alguien sube un pantallazo con emails, user_ids o transaction_ids a la primera web de "blur online" que encuentra. Blurr Tool funciona 100% en tu navegador: suelta una imagen o un PDF, tacha lo sensible con rectángulos, descarga. Cero uploads, cero tracking, cero letra pequeña.',
            tool_blurr_cta: 'Abrir Blurr Tool',
            tool_chip_local: '100% local',
            tool_chip_formats: 'Imágenes + PDF',
            tool_chip_modes: 'Pixelar o Blur',
            tool_chip_os: 'Open source',
            tool_chip_notrack: 'Sin tracking',
            tool_soon_badge: 'En el taller',
            tool_soon_title: 'La siguiente ya se está cocinando.',
            tool_soon_text: '¿Tienes una idea para algo pequeño, útil y respetuoso con la privacidad? Escríbeme, las monto rápido.',
            tool_soon_cta: 'Proponer una herramienta',

            contact_tag: '05 / Contacto',
            contact_title: '¿Tienes un problema con datos? Hablemos.',
            contact_lead: 'Indefinido, freelance o "¿te importa que te pregunte 20 minutos?". Todo vale.',
            contact_email: 'Email',

            footer_tagline: 'Data Analyst y Data Scientist · Málaga, ES.',
            footer_love: 'Hecho con cariño desde Málaga.',

            thankyou_title: '¡Gracias por descargar mi CV!',
            thankyou_sub: 'La descarga debería arrancar sola. Mientras, échale un ojo al resto del portfolio.',
            thankyou_cta: 'Volver al portfolio',
            thankyou_retry: '¿No arrancó? Haz click aquí.'
        }
    };

    /* ---------- Language ---------- */
    const STORAGE_KEY = 'alpc_lang';
    const supportedLangs = Object.keys(I18N);

    const detectLang = () => {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored && supportedLangs.includes(stored)) return stored;
        const browser = (navigator.language || 'en').slice(0, 2).toLowerCase();
        return supportedLangs.includes(browser) ? browser : 'en';
    };

    const applyTranslations = (lang) => {
        const dict = I18N[lang] || I18N.en;
        document.documentElement.lang = lang;

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
            btnEs.setAttribute('aria-pressed', lang === 'es');
            btnEn.setAttribute('aria-pressed', lang === 'en');
        }
    };

    const setLang = (lang) => {
        if (!supportedLangs.includes(lang)) return;
        localStorage.setItem(STORAGE_KEY, lang);
        applyTranslations(lang);
    };

    // Expose for thankyou page
    window.setLanguage = setLang;

    /* ---------- Reveal on scroll ---------- */
    const initReveal = () => {
        const items = document.querySelectorAll('.reveal');
        if (!('IntersectionObserver' in window)) {
            items.forEach((el) => el.classList.add('is-visible'));
            return;
        }
        items.forEach((el) => {
            const delay = el.getAttribute('data-reveal-delay');
            if (delay) el.style.setProperty('--reveal-delay', delay);
        });
        const io = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    io.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
        items.forEach((el) => io.observe(el));
    };

    /* ---------- Nav behaviour ---------- */
    const initNav = () => {
        const nav = document.getElementById('nav');
        const burger = document.getElementById('nav-burger');
        const links = document.querySelectorAll('.nav__link');

        if (!nav) return;

        const onScroll = () => {
            nav.classList.toggle('is-scrolled', window.scrollY > 16);
            const progress = document.getElementById('scroll-progress');
            if (progress) {
                const scrollable = document.documentElement.scrollHeight - window.innerHeight;
                const ratio = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
                progress.style.width = ratio + '%';
            }
        };
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });

        if (burger) {
            burger.addEventListener('click', () => {
                const open = document.body.classList.toggle('menu-open');
                burger.setAttribute('aria-expanded', open);
            });
        }

        links.forEach((link) => {
            link.addEventListener('click', () => {
                document.body.classList.remove('menu-open');
                if (burger) burger.setAttribute('aria-expanded', 'false');
            });
        });

        // Active link on scroll
        const sections = ['about', 'stack', 'projects', 'tools', 'contact']
            .map((id) => document.getElementById(id))
            .filter(Boolean);
        if ('IntersectionObserver' in window && sections.length) {
            const byId = new Map();
            links.forEach((l) => {
                const href = l.getAttribute('href');
                if (href && href.startsWith('#')) byId.set(href.slice(1), l);
            });
            const io = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    const link = byId.get(entry.target.id);
                    if (!link) return;
                    if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
                        links.forEach((l) => l.classList.remove('is-active'));
                        link.classList.add('is-active');
                    }
                });
            }, { threshold: [0.3, 0.6] });
            sections.forEach((s) => io.observe(s));
        }
    };

    /* ---------- Cursor glow ---------- */
    const initCursorGlow = () => {
        if (window.matchMedia('(hover: none)').matches) return;
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        const glow = document.getElementById('cursor-glow');
        if (!glow) return;
        let raf = null;
        let tx = 0, ty = 0, cx = 0, cy = 0;
        document.body.classList.add('cursor-ready');
        window.addEventListener('mousemove', (e) => {
            tx = e.clientX;
            ty = e.clientY;
            if (raf) return;
            raf = requestAnimationFrame(() => {
                cx += (tx - cx) * 0.18;
                cy += (ty - cy) * 0.18;
                glow.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
                raf = null;
            });
        }, { passive: true });
    };

    /* ---------- Tilt ---------- */
    const initTilt = () => {
        if (window.matchMedia('(hover: none)').matches) return;
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        const targets = document.querySelectorAll('[data-tilt]');
        targets.forEach((el) => {
            let raf = null;
            const onMove = (e) => {
                const rect = el.getBoundingClientRect();
                const x = (e.clientX - rect.left) / rect.width;
                const y = (e.clientY - rect.top) / rect.height;
                el.style.setProperty('--mx', (x * 100).toFixed(1) + '%');
                el.style.setProperty('--my', (y * 100).toFixed(1) + '%');
                if (raf) return;
                raf = requestAnimationFrame(() => {
                    const rx = (0.5 - y) * 6;
                    const ry = (x - 0.5) * 8;
                    el.style.transform = `perspective(900px) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg)`;
                    raf = null;
                });
            };
            const reset = () => {
                el.style.transform = '';
            };
            el.addEventListener('mousemove', onMove);
            el.addEventListener('mouseleave', reset);
        });
    };

    /* ---------- Magnetic buttons ---------- */
    const initMagnets = () => {
        if (window.matchMedia('(hover: none)').matches) return;
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        const targets = document.querySelectorAll('[data-magnetic]');
        targets.forEach((el) => {
            el.addEventListener('mousemove', (e) => {
                const rect = el.getBoundingClientRect();
                const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
                const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
                el.style.transform = `translate(${(x * 8).toFixed(1)}px, ${(y * 8).toFixed(1)}px)`;
            });
            el.addEventListener('mouseleave', () => {
                el.style.transform = '';
            });
        });
    };

    /* ---------- Misc ---------- */
    const initYear = () => {
        const el = document.getElementById('current-year');
        if (el) el.textContent = new Date().getFullYear();
    };

    const initLangButtons = () => {
        const btnEs = document.getElementById('btn-es');
        const btnEn = document.getElementById('btn-en');
        if (btnEs) btnEs.addEventListener('click', () => setLang('es'));
        if (btnEn) btnEn.addEventListener('click', () => setLang('en'));
    };

    /* ---------- Boot ---------- */
    const boot = () => {
        applyTranslations(detectLang());
        initLangButtons();
        initNav();
        initReveal();
        initCursorGlow();
        initTilt();
        initMagnets();
        initYear();
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', boot);
    } else {
        boot();
    }
})();
