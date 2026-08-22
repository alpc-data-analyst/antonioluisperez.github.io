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
            nav_blog: 'Blog',
            nav_contact: 'Contacto',
            nav_services: 'Servicios',
            nav_process: 'Proceso',
            nav_talk: 'Hablemos →',
            nav_cv: 'CV ↓',
            nav_cv_aria: 'Descargar CV',
            nav_main_aria: 'Principal',
            lang_aria: 'Idioma',
            menu_aria: 'Menú',
            fab_aria: 'Abrir contacto',
            fab_hint: '¿Necesitas ayuda?',
            fab_hint_close: 'Cerrar aviso',
            blog_back: 'Volver al blog',
            post_more: 'Seguir leyendo',
            blog_h1: 'Blog de analítica web y datos',
            page_title: 'Consultoría de analítica digital en Málaga · Antonio Luis Pérez',
            rec_title: 'Antonio Luis Pérez Carmona · CV y trayectoria · Data Analyst',

            sv_kicker: 'Consultoría de analítica digital · Málaga y remoto',
            counters_aria: 'Cifras',
            cnt_webs: 'Webs medidas',
            cnt_dash: 'Dashboards en producción',
            cnt_audit: 'Auditorías de tracking',
            sv_h1: 'Convierto tus datos en decisiones de negocio.',
            sv_lead: 'Mido webs, apps y ecommerce. Convierto el comportamiento de tus usuarios en KPIs que entiende todo el equipo y en decisiones que aguantan una reunión.',
            sv_cta1: 'Cuéntame tu caso',
            sv_cta2: 'Ver servicios',
            sv_rec: '¿Eres recruiter? Mi CV y trayectoria tienen su propia página.',
            sv_rec_cta: 'Verla →',
            sv_s_tag: '01 · Servicios',
            sv_s_title: 'Qué puedo hacer por tus datos.',
            sv_s1_title: 'Auditoría de medición',
            sv_s1_tag: 'Saber si puedes fiarte de tus datos, antes de decidir con ellos.',
            sv_s1_text: 'Reviso tu GA4 y tu GTM evento a evento: duplicados, compras que se cuentan dos veces, consentimiento mal montado y datos personales donde no deben estar. Sales con un informe priorizado y con la desviación contra tu backend explicada.',
            sv_s2_title: 'Implementación y tracking',
            sv_s2_tag: 'GA4 y GTM contando la verdad desde el primer dato.',
            sv_s2_text: 'DataLayer a medida, GTM web y server side, Consent Mode v2, Meta CAPI y conversiones mejoradas. Validado en DebugView y documentado para que tu equipo lo mantenga sin depender de mí.',
            sv_s3_title: 'Dashboards y reporting',
            sv_s3_tag: 'Informes que se actualizan solos y se abren cada lunes.',
            sv_s3_text: 'Power BI y Looker Studio sobre SQL en BigQuery, con actualización automática. El estado en cinco segundos arriba, el detalle abajo.',
            qe_tag: 'Antes de empezar',
            qe_title: '¿Qué es la analítica digital?',
            qe_lead: 'La analítica digital consiste en medir lo que hacen las personas en tu web o en tu app y convertirlo en decisiones: qué canal trae clientes y cuál solo tráfico, en qué paso del proceso de compra se cae la gente, y qué cambio ha subido las ventas y cuál no ha hecho nada.',
            qe_h1: 'Medir',
            qe_p1: 'Registrar cada paso importante con nombres estables y respetando el consentimiento. Si el dato entra sucio, lo demás sobra.',
            qe_h2: 'Entender',
            qe_p2: 'Cruzar fuentes, separar la señal del ruido y saber qué pregunta responde cada número. Un gráfico no es un hallazgo.',
            qe_h3: 'Decidir',
            qe_p3: 'Convertirlo en KPIs que entiende todo el equipo y en acciones concretas. Si no cambia lo que alguien hace mañana, no es analítica, es decoración.',
            sv_s4_title: 'Formación y mentorías',
            sv_s4_tag: 'Tu equipo midiendo solo en unas semanas.',
            sv_s4_text: 'Workshops de GA4 y GTM para tu equipo y mentoría 1:1 para analistas. Con vuestros datos, no con diapositivas genéricas.',
            sv_p_tag: '02 · Proceso',
            sv_p_title: 'Cómo trabajo.',
            sv_p1_h: 'Diagnóstico',
            sv_p1_p: 'Media hora de llamada y una revisión de lo que tienes montado. Gratis, y sales con un problema localizado.',
            sv_p2_h: 'Propuesta',
            sv_p2_p: 'Alcance, plazos y precio cerrados por escrito. Sin sorpresas ni horas infladas.',
            sv_p3_h: 'Implementación',
            sv_p3_p: 'Validación documentada de cada pieza. Ves el avance, no un informe al final.',
            sv_p4_h: 'Entrega y soporte',
            sv_p4_p: 'Documentación, vídeo de traspaso y un mes de soporte. Lo entregado queda tuyo y funcionando.',
            sv_a_tag: '03 · Sobre mí',
            sv_a_title: 'Quién está detrás.',
            sv_a_lead: 'Soy Antonio Luis Pérez Carmona, Digital Analyst: mido a diario más de 1300 webs y mantengo más de 100 dashboards en producción. Por mi cuenta he construido Roometrics, analítica web sin cookies, y Analytics Copilot, una extensión de Chrome para QA de medición. Lo que vendo es lo que hago cada día.',
            sv_a_cv: 'Trayectoria completa y CV →',
            sv_c_tag: '05 · Contacto',
            sv_foot_rec: 'Recruiters: CV y trayectoria',

            brand_role: 'Analista de datos en Málaga',
            hero_role: 'AI & Data Analyst',
            hero_owner: 'Owner de Roometrics.es',
            hero_cta_cv: 'Descargar CV',
            hero_cta_contact: 'Hablemos',
            paths_label: '¿Qué estás buscando?',
            path_web: 'Ecommerce / Web Analyst',
            path_ds: 'Data Science',
            path_da: 'Data Analyst',

            clients_label: 'Ya han confiado en mí',
            clients_aria: 'Clientes',

            quotes_label: 'Opiniones de los clientes',
            quotes_aria: 'Reseñas de clientes',
            q_sumal: '«Ha entendido rápidamente lo que necesitábamos y lo ha resuelto con precisión y eficacia. Ha sido puntual, preciso y muy profesional durante todo el proceso. Volveríamos a trabajar con él.»',
            q_vam: '«Un trabajo excepcional. Rápida entrega, muy buena comunicación y un informe de lo gestionado que ya les gustaría a muchos profesionales. Sin duda volveré a contar con él.»',
            q_emi: '«Técnicamente es muy bueno en analítica web y Google Tag Manager: entendió y ejecutó la tarea muy rápido. Además me entregó un informe del trabajo y de las mejoras en la analítica de mi cliente.»',
            q_otm: '«Antonio es increíble, un auténtico experto. Lo recomiendo totalmente.»',
            q_seeds: '«Estamos muy contentos con la entrega. Es muy profesional y atento a los detalles, con un gran conocimiento en lo que fue contratado. Además nos presentó una auditoría excelente.»',
            q_suntropy: '«Gran trabajo de analítica web. Servicio muy profesional y entrega rápida.»',

            about_tag: '01 · Sobre mí',
            about_title: 'Un perfil, tres frentes.',
            about_lead: 'Soy Antonio Luis Pérez Carmona, Digital Analyst en Paraty Tech: mido el embudo de reserva de más de 1300 webs de hotel con GA4, GTM y BigQuery, y mantengo más de 100 dashboards que Producto, Marketing y Operaciones usan a diario. Vengo del marketing y me quedé por los datos, y por el camino he acabado cubriendo tres roles que normalmente llevan tres personas.',
            about_h1: 'Ecommerce / Web Analyst',
            about_p1: 'Medición end-to-end: GA4, GTM en web y server side, DataLayer a medida, Consent Mode, Meta CAPI y CRO. El dato entra limpio y las campañas se miden de verdad.',
            about_h2: 'Data Analyst',
            about_p2: 'SQL en BigQuery, Python y dashboards en Power BI y Looker Studio. Del dato crudo al informe que la gente abre cada mañana sin que nadie les obligue.',
            about_h3: 'Data Scientist',
            about_p3: 'Modelos supervisados, series temporales con RNNs y LSTMs y explicabilidad. Máster en Data Science e IA y un caso real de fraude con ROC-AUC 0.92.',
            about_cv: 'Descargar CV (PDF)',
            about_linkedin: 'Ver LinkedIn',

            timeline_tag: 'Trayectoria',
            timeline_title: 'Cómo llegué aquí.',
            tl_uma_role: 'Grado en Marketing e Investigación de Mercados',
            tl_uma_text: 'Cuatro años de grado intentando ser un crack del marketing, para acabar descubriendo que lo que me enganchaba de verdad no eran las campañas bonitas sino los datos que venían detrás. Plot twist aceptado.',
            tl_taco_date: 'Sep 2022 → Abr 2025',
            tl_taco_role: 'De cocinero de línea a Shift Leader',
            tl_taco_text: 'Empecé friendo tacos y acabé llevando turnos enteros como shift leader. Suena a anécdota de CV, pero ahí aprendí a gestionar equipos, controlar inventario y decidir bajo presión real. El MBA de la freidora, y no lo cambio.',
            tl_windup_date: 'Sep 2024 → Abr 2025',
            tl_windup_role: 'Máster en Marketing Digital + Digital Analytics Junior',
            tl_windup_text: 'Máster de 532h en marketing digital mientras trabajaba como Digital Analytics Junior. Mi primer asalto a la analítica real, con GA4, GTM, DataLayer, dashboards y auditorías de tracking junto a equipos de Paid, SEO y CRO. El momento «ah, esto es lo que quiero hacer».',
            tl_talent_role: 'Finalista · FYCMA y Diario SUR',
            tl_talent_text: 'Elegido entre los 25 finalistas de un programa de tres días de FYCMA y Diario SUR. Tres días conociendo empresas de Málaga y a gente de mi edad haciendo cosas bastante más raras que las mías.',
            tl_paraty_date: 'Mar 2025 → Actualmente',
            tl_paraty_text: 'Analítica digital en hospitality tech. Medición con GA4 y GTM, en web y en server side, más el diseño de los DataLayers y las auditorías para que el dato llegue limpio. Luego SQL en BigQuery, dashboards en Looker Studio y Power BI, funnels y atribución. Y la parte que nadie quiere tocar: Consent Mode, GDPR y conversiones mejoradas con Google Ads y Meta CAPI.',
            tl_bigschool_role: 'Máster en Data Science e IA · 400h',
            tl_bigschool_text: '400h para formalizar el salto a Data Science. Machine Learning, Explainable AI, Python, SQL, Tableau y analítica en cloud sobre proyectos reales. El puente del analyst al scientist, y esta vez con un papel que lo demuestre.',
            tl_current: 'Actual',
            tl_done: 'Completado',

            stack_tag: '02 · Stack',
            stack_title: 'Las herramientas con las que me muevo cada día.',
            stack_core_title: 'Python y SQL',
            stack_viz_title: 'Analítica y Viz',
            stack_meas_title: 'Medición y privacidad',
            chip_ec: 'Conversiones mejoradas',
            chip_ab: 'Tests A/B',
            stack_ml_title: 'Machine Learning',
            stack_cloud_title: 'Cloud y DevOps',
            stack_data_title: 'Ingeniería de datos',
            stack_certs: 'Certificaciones',
            certs_aria: 'Insignias de certificación',
            stack_lang: 'Inglés · B2 First',
            stack_az: 'Azure AZ-900 · en curso',

            proj_tag: '03 · Proyectos',
            proj_title: 'En lo que estoy trabajando personalmente.',
            proj_fraud_title: 'Detección de fraude bancario con ML',
            proj_fraud_text: 'Modelo end-to-end sobre 590K transacciones reales del dataset IEEE-CIS, con 434 variables entre datos de transacción y señales de identidad como el dispositivo, el dominio de correo o la geolocalización. Un Gradient Boosting de 500 árboles hace el trabajo. El hallazgo está en el umbral. Con el 0.5 por defecto se escapaba más fraude del que se cazaba, y al bajarlo a 0.1 el modelo pasa a capturar el 60% de todo el fraude molestando solo al 0.46% de usuarios legítimos.',
            proj_fraud_m1: 'transacciones',
            proj_fraud_m2: 'variables',
            proj_fraud_m4: 'fraude detectado',
            proj_fraud_repo: 'Ver el código en GitHub',
            proj_fraud_cta: 'Leer en LinkedIn',
            proj_rm_title: 'Roometrics, analítica web sin cookies',
            proj_rm_text: 'Mi producto, y está en producción. Analítica web que no pone cookies ni guarda IPs, así que tampoco necesita banner. Cada visita se convierte en un código anónimo con claves que rotan cada día: no queda nada que consentir. Se instala en dos líneas o desde GTM, y los datos no salen de Europa. Salió de una frase que me da rabia precisamente porque es verdad: cuando algo es gratis, el producto eres tú.',
            proj_rm_m2: 'líneas para instalarlo',
            proj_rm_m3: 'rotación de claves',
            proj_rm_m4_val: 'UE',
            proj_rm_m4: 'servidores',
            proj_rm_cta: 'Ver Roometrics en vivo',
            tools_tag: '04 · Herramientas',
            tools_title: 'Herramientas que monto cuando lo de fuera no encaja.',
            tools_lead: 'Cosas que me hacían falta y no existían, o existían mal. Las uso yo y las dejo publicadas. Sin cuentas y sin que tus datos salgan de tu navegador.',
            tool_ac_tagline: 'QA de analítica web en un clic, dentro de Chrome.',
            tool_ac_text: 'Extensión de Chrome con 10 herramientas para auditar GA4, GTM, Google Ads y Consent Mode: sesión en vivo, atribución de punta a punta, generador de eventos y captura de página completa anotada. Todo desde el popup, sin abrir el Network y sin enviar un solo dato fuera de tu navegador.',
            tool_ac_chip_9: '10 herramientas',
            tool_ac_chip_stack: 'GA4 + Ads + Consent',
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
            tool_bank_tagline: 'Pon números fríos donde antes había corazonadas.',
            tool_bank_text: 'Log de apuestas, EV por operación, Kelly fraccionado y curva de equity con drawdown. Avisa cuando un stake supera el 5% de la banca o una apuesta tiene valor esperado negativo. Herramienta de disciplina, no de tipster.',
            tool_bank_chip_ev: 'EV + Kelly',
            tool_bank_chip_equity: 'Curva de equity',
            tool_bank_chip_alerts: 'Alertas de riesgo',
            tool_bank_chip_bilingual: 'Bilingüe',

            lp_solve_tag: 'Qué resuelvo',
            lp_proof_tag: 'La prueba',
            lp_stack_tag: 'El stack para esto',
            lp_back: 'Volver al portfolio',

            lpw_title: 'Ecommerce & Web Analyst · Antonio Luis Pérez',
            lpw_tag: 'Analítica web y medición',
            lpw_h1: 'Tu analítica web dice una cosa. Tu negocio, otra.',
            lpw_lead: 'Tu web vende y tus datos deberían contarlo. Medición end-to-end para ecommerce y webs de servicios: GA4, Google Tag Manager en web y server side, DataLayer a medida y la parte de privacidad que nadie quiere tocar.',
            lp_pains_tag: '¿Te suena?',
            lp_plan_tag: 'El plan',
            lp_trust: 'Reseñas de 5,0 · Respuesta en el día · Diagnóstico gratis',
            lpw_pain1: 'GA4 dice 80 ventas y tu backend 110, y nadie sabe cuál creerse.',
            lpw_pain2: 'Cada herramienta da un número distinto para lo mismo.',
            lpw_pain3: 'Pusiste el banner de cookies y las conversiones se hundieron.',
            lpw_pain4: 'Inviertes en campañas sin saber qué canal trae clientes de verdad.',
            lpw_pain5: 'O no hay nada montado todavía y estás decidiendo a ciegas.',
            lpw_plan1: 'Audito lo que tengas y te digo dónde miente. Si no hay nada, diseño la medición desde cero.',
            lpw_plan2: 'Reconstruyo GA4, Tag Manager y el DataLayer, con el consentimiento bien montado.',
            lpw_plan3: 'Valido contra tu backend y te lo entrego documentado y funcionando.',
            lpda_pain1: 'El informe mensual tarda tres días en salir y nace viejo.',
            lpda_pain2: 'Cada departamento llega a la reunión con su propio número.',
            lpda_pain3: 'Datos por todas partes y respuestas en ninguna.',
            lpda_pain4: 'El dashboard que encargaste no lo abre nadie desde marzo.',
            lpda_pain5: 'O no hay nada montado: los datos viven en Excels sueltos y en la cabeza de dos personas.',
            lpda_plan1: 'Empiezo por la decisión que tienes que tomar, no por el gráfico.',
            lpda_plan2: 'Monto el panel en Power BI o Looker Studio, conectado y actualizándose solo.',
            lpda_plan3: 'Formo a tu equipo para que lo mantenga sin depender de nadie.',
            lpw_solve_title: 'Los tres fuegos de siempre.',
            lpw_s1_h: 'Tracking roto o a medias',
            lpw_s1_p: 'Auditoría completa de la medición, implementación de GA4 y GTM, DataLayer diseñado para tu negocio y validación en DebugView antes de dar nada por bueno.',
            lpw_s2_h: 'Privacidad sin sustos',
            lpw_s2_p: 'Consent Mode v2, RGPD, conversiones mejoradas y Meta CAPI. Cumplir la ley sin quedarte ciego: consentimiento bien montado y datos que siguen sirviendo.',
            lpw_s3_h: 'Del dato a la decisión',
            lpw_s3_p: 'Funnels, atribución por canal y dashboards que la gente abre cada mañana. Si un informe no cambia una decisión, sobra.',
            lpw_proof_title: 'Números que no son de folleto.',
            lpw_n1: 'webs medidas',
            lpw_n2: 'dashboards en producción',
            lpw_n3: 'ecommerce y B2B auditados',
            lpw_n4: 'negocios medidos por mi cuenta',
            lpw_cta_title: '¿Vemos tu medición?',
            lpw_cta_text: 'Cuéntame qué vendes y qué número no te cuadra. Te digo qué haría, sin compromiso y sin jerga.',

            lpds_title: 'Data Science & Machine Learning · Antonio Luis Pérez',
            lpds_tag: 'Data Science',
            lpds_h1: 'Data science aplicado con métricas honestas.',
            lpds_lead: 'Machine learning aplicado a problemas de negocio: clasificación, forecasting y explicabilidad. Empiezo por el modelo más simple que pueda funcionar y solo complico las cosas cuando los números lo piden.',
            lpds_solve_title: 'En qué te puedo ayudar.',
            lpds_s1_h: 'Clasificación y predicción',
            lpds_s1_p: 'Modelos supervisados end-to-end: EDA, feature engineering, entrenamiento y ajuste del umbral de decisión pensando en el coste real de cada error.',
            lpds_s2_h: 'Series temporales',
            lpds_s2_p: 'Forecasting con RNNs y LSTMs en PyTorch para demanda, ingresos o tráfico. Siempre con un baseline simple delante, para saber si la red gana de verdad.',
            lpds_s3_h: 'Explicabilidad',
            lpds_s3_p: 'Explainable AI para que el modelo no sea una caja negra: qué variable mueve cada predicción y cómo contárselo a quien toma la decisión.',
            lpds_proof_title: 'El caso del fraude.',
            lpds_proof_text: 'Pipeline completo sobre el dataset IEEE-CIS: 590K transacciones reales y 434 variables alimentando un Gradient Boosting de 500 árboles. El hallazgo no fue el modelo, fue el umbral: bajándolo de 0.5 a 0.1 se captura el 60% del fraude molestando solo al 0.46% de usuarios legítimos.',
            lpds_cta_title: '¿Tienes datos y una pregunta?',
            lpds_cta_text: 'Tráeme el problema. No hace falta que el dataset venga limpio, de eso me encargo yo.',

            lpda_title: 'Data Analyst · Antonio Luis Pérez',
            lpda_tag: 'Business intelligence y reporting',
            lpda_h1: 'Business intelligence que la gente abre cada mañana.',
            lpda_lead: 'SQL, Python y dashboards que se usan de verdad. Ordeno datos que llegan hechos un desastre y los convierto en informes que la gente abre cada mañana sin que nadie les obligue.',
            lpda_solve_title: 'Menos Excel a mano, más respuestas.',
            lpda_s1_h: 'Datos limpios',
            lpda_s1_p: 'Extracción y limpieza con SQL en BigQuery, validación de calidad y pipelines que no te despiertan a las 3 AM.',
            lpda_s2_h: 'Dashboards que se usan',
            lpda_s2_p: 'Power BI y Looker Studio para conversión, ingresos y KPIs de UX. Si un dashboard no cambia lo que alguien hace mañana, sobra.',
            lpda_s3_h: 'Reporting sin manos',
            lpda_s3_p: 'Automatización con Python y Excel avanzado: lo que era una mañana entera de copiar y pegar pasa a ser un botón.',
            lpda_proof_title: 'Esto ya está funcionando.',
            lpda_n1: 'dashboards en producción',
            lpda_n2: 'webs alimentando los datos',
            lpda_n3: 'equipos usándolos a diario',
            lpda_n4: 'clientes auditados',
            lpda_cta_title: '¿Enterrado en Excels?',
            lpda_cta_text: 'Cuéntame qué informe te come la semana y te lo devuelvo automatizado.',

            contact_tag: '05 · Contacto',
            faq_tag: '04 · Preguntas frecuentes',
            faq_title: 'Lo que me suelen preguntar',
            faq_q1: '¿Cuánto cuesta?',
            faq_a1: 'Depende del tamaño de la web y de lo que haya montado ya. Después de la llamada de diagnóstico, que es gratis, te paso un precio cerrado por el proyecto entero. No cobro por horas: sabes lo que vas a pagar antes de empezar.',
            faq_q2: '¿Cuánto se tarda?',
            faq_a2: 'Una auditoría de medición, entre una y dos semanas. Una implementación completa de GA4 y Tag Manager, de dos a cuatro, según cuántos eventos y sistemas haya que conectar. La fecha te la doy antes de empezar, no sobre la marcha.',
            faq_q3: 'Ya tengo GA4 instalado, ¿me sirve de algo?',
            faq_a3: 'Casi todos los proyectos que hago son exactamente eso: arreglar lo que ya existe. Tener GA4 puesto y tener GA4 midiendo bien son dos cosas distintas, y la diferencia se nota el día que alguien pregunta de dónde salen las ventas.',
            faq_q4: '¿Trabajas solo en Málaga?',
            faq_a4: 'Estoy en Málaga y trabajo con clientes de toda España en remoto. Esto se hace con accesos y videollamadas: no hace falta que estemos en la misma ciudad para que los datos entren bien.',
            faq_q5: '¿Qué necesitas de mí para empezar?',
            faq_a5: 'Acceso de lectura a lo que tengas: GA4, Tag Manager, la plataforma del ecommerce si la hay. Y alguien que pueda tocar la web o meter un script cuando toque. Con eso me apaño.',
            faq_q6: 'Cuando terminemos, ¿me quedo solo con esto?',
            faq_a6: 'No. Todo lo que monto va documentado para que tu equipo lo mantenga sin depender de mí, que es como debe ser. Si prefieres que siga yo pendiente, hay soporte mensual.',
            cur_title: 'Curso de Google Analytics 4 online · Antonio Luis Pérez',
            cur_tag: 'Formación · Curso online',
            cur_h1: 'Curso de Google Analytics 4, sin humo y en español.',
            cur_pain1: 'Abres GA4 y no sabes ni dónde mirar: todo son menús.',
            cur_pain2: 'Vienes de Universal Analytics y nada está donde estaba.',
            cur_pain3: 'Los tutoriales de YouTube están en inglés o desactualizados.',
            cur_pain4: 'Te piden datos en el trabajo y respondes con capturas que no entiendes.',
            cur_offer_tag: 'El curso',
            cur_price_note: 'pago único · acceso para siempre',
            cur_off1: 'En vídeo, a tu ritmo, en español y desde cero.',
            cur_off2: 'Con casos reales: lo que uso a diario midiendo más de 1300 webs.',
            cur_off3: 'Actualizaciones incluidas: cuando GA4 cambia, el curso cambia.',
            cur_cta: 'Quiero el curso',
            cur_cta2: 'Ver el temario ↓',
            cur_trust: 'En producción: los primeros alumnos entran con este precio de lanzamiento',
            cur_t_tag: '01 · Temario',
            cur_t_title: 'Lo que vas a aprender.',
            cur_m1_h: '1 · GA4 desde cero: instalación y primeros pasos',
            cur_m1_p: 'Qué mide GA4 y qué no, crear la propiedad bien a la primera, instalarlo con Tag Manager y los ajustes que casi todo el mundo se salta: retención de datos, zonas horarias y filtros internos.',
            cur_m2_h: '2 · Eventos y conversiones que significan algo',
            cur_m2_p: 'El modelo de eventos explicado sin jerga, qué medir según tu negocio, marcar conversiones y nombrarlo todo para que dentro de seis meses siga entendiéndose.',
            cur_m3_h: '3 · Google Tag Manager sin miedo',
            cur_m3_p: 'Etiquetas, activadores y variables con ejemplos reales: clics, formularios, scroll y vídeo. Y DebugView para comprobar que lo que crees que mides se mide.',
            cur_m4_h: '4 · Informes y exploraciones: encontrar respuestas',
            cur_m4_p: 'Dónde está cada cosa, embudos, rutas y cohortes, y cómo responder las preguntas que te hacen de verdad: qué canal funciona, dónde se cae la gente, qué cambió esta semana.',
            cur_m5_h: '5 · Consent Mode y privacidad sin sustos',
            cur_m5_p: 'Qué exige la ley, qué hace el banner de cookies con tus datos y cómo montar Consent Mode v2 para cumplir sin quedarte ciego.',
            cur_m6_h: '6 · Del dato al informe: Looker Studio',
            cur_m6_p: 'Conectar GA4 a Looker Studio y montar un panel que tu jefe entienda sin que se lo expliques. El mismo criterio que uso en los dashboards que vendo.',
            cur_q_tag: '02 · Para quién',
            cur_q_title: 'Para quién es, y para quién no.',
            cur_q1_h: 'Marketing y negocio',
            cur_q1_p: 'Llevas campañas o una web y necesitas leer los datos sin depender de nadie. Este curso es exactamente para ti.',
            cur_q2_h: 'Dueños de ecommerce',
            cur_q2_p: 'Vendes online y quieres saber qué funciona antes de poner un euro más en ads. Sales del curso leyendo tu embudo.',
            cur_q3_h: 'Para quién no',
            cur_q3_p: 'Si buscas server side, BigQuery o atribución avanzada, esto se te queda corto: eso es consultoría, no curso. Escríbeme y lo vemos.',
            cur_c_title: '¿Entras?',
            cur_c_text: 'Dime que quieres el curso y te escribo con el acceso en cuanto abra, al precio de lanzamiento. Y si es formación para tu equipo, cuéntamelo aquí también.',
            form_need_6: 'El curso de GA4',
            contact_title: 'Cuéntame qué necesitas',
            contact_lead: 'Escríbeme y te digo por dónde empezar. Sin compromiso y sin discurso de ventas: si tu caso no es para mí, te lo digo.',
            contact_place: 'Málaga, España · trabajo en remoto',
            form_name: 'Nombre',
            form_company: 'Empresa',
            form_optional: '(opcional)',
            form_email: 'Email',
            form_need: '¿Qué necesitas?',
            form_need_1: 'Auditoría de medición',
            form_need_2: 'Implementación y tracking',
            form_need_3: 'Dashboards y reporting',
            form_need_4: 'Formación para mi equipo',
            form_need_5: 'Otra cosa',
            form_msg: 'Cuéntame tu caso',
            form_send: 'Enviar mensaje',
            form_legal: 'Tus datos se usan solo para responderte. Nada de listas ni de terceros.',
            form_sending: 'Enviando...',
            form_ok: 'Mensaje enviado. Te respondo en cuanto lo lea.',
            form_err: 'No se ha podido enviar. Escríbeme a alpcmalaga@gmail.com y lo vemos.',
            form_err_campos: 'Revisa los campos marcados antes de enviar.',
            form_err_captcha: 'No he podido comprobar que no eres un robot. Vuelve a intentarlo, y si sigue fallando escríbeme a alpcmalaga@gmail.com.',
            form_err_frecuencia: 'Demasiados envíos seguidos. Espera un minuto y vuelve a intentarlo.',
            form_mailto: 'Se abre tu correo con el mensaje listo. Dale a enviar y me llega.',
            contact_cv: 'CV en PDF',
            contact_reply: 'Suelo responder en el día.',
            wa_href: 'https://wa.me/34601427159?text=Hola%20Antonio%20Luis%2C%20vi%20tu%20portfolio%20y%20me%20gustar%C3%ADa%20saber%20m%C3%A1s.',

            footer_cookies: 'Preferencias de cookies',

            consent_title: 'Cookies',
            consent_text: 'Venga va, el mismo rollo de siempre: las cookies y el consentimiento. Lo siento, soy analista de datos, de los buenos, y necesito tenerlo todo medido y bajo control.',
            consent_accept: 'Aceptar',
            consent_reject: 'Rechazar',

            nf_title: 'Aquí no hay datos.',
            nf_text: 'Esta página no existe. O existió y ya no, que viene a ser lo mismo para ti. Vuelve al principio, que ahí sí hay cosas.',
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
            nav_blog: 'Blog',
            nav_contact: 'Contact',
            nav_services: 'Services',
            nav_process: 'Process',
            nav_talk: "Let's talk →",
            nav_cv: 'CV ↓',
            nav_cv_aria: 'Download CV',
            nav_main_aria: 'Main',
            lang_aria: 'Language',
            menu_aria: 'Menu',
            fab_aria: 'Open contact',
            fab_hint: 'Need a hand?',
            fab_hint_close: 'Dismiss',
            blog_back: 'Back to the blog',
            post_more: 'Keep reading',
            blog_h1: 'Web analytics and data blog',
            page_title: 'Digital analytics consulting in Málaga · Antonio Luis Pérez',
            rec_title: 'Antonio Luis Pérez Carmona · CV & career · Data Analyst',

            sv_kicker: 'Digital analytics consulting · Málaga & remote',
            counters_aria: 'Numbers',
            cnt_webs: 'Websites measured',
            cnt_dash: 'Dashboards in production',
            cnt_audit: 'Tracking audits',
            sv_h1: 'I turn your data into business decisions.',
            sv_lead: 'I measure websites, apps and ecommerce. I turn how your users behave into KPIs the whole team understands and decisions that hold up in a meeting.',
            sv_cta1: 'Tell me your case',
            sv_cta2: 'See services',
            sv_rec: 'Recruiter? My CV and career have their own page.',
            sv_rec_cta: 'View it →',
            sv_s_tag: '01 · Services',
            sv_s_title: 'What I can do for your data.',
            sv_s1_title: 'Measurement audit',
            sv_s1_tag: 'Know whether you can trust your data before deciding with it.',
            sv_s1_text: 'I go through your GA4 and GTM event by event: duplicates, purchases counted twice, consent set up backwards and personal data where it should not be. You get a prioritised report and the gap against your backend explained.',
            sv_s2_title: 'Implementation & tracking',
            sv_s2_tag: 'GA4 and GTM telling the truth from the first data point.',
            sv_s2_text: 'Custom DataLayer, GTM on web and server side, Consent Mode v2, Meta CAPI and enhanced conversions. Validated in DebugView and documented so your team can maintain it without me.',
            sv_s3_title: 'Dashboards & reporting',
            sv_s3_tag: 'Reports that update themselves and get opened every Monday.',
            sv_s3_text: 'Power BI and Looker Studio over SQL in BigQuery, refreshed automatically. Status in five seconds up top, detail below.',
            qe_tag: 'First things first',
            qe_title: 'What is digital analytics?',
            qe_lead: 'Digital analytics means measuring what people do on your site or app and turning it into decisions: which channel brings customers and which only brings traffic, where in the checkout people drop off, and which change lifted sales and which did nothing.',
            qe_h1: 'Measure',
            qe_p1: 'Record every step that matters with stable names and respecting consent. If the data comes in dirty, the rest is pointless.',
            qe_h2: 'Understand',
            qe_p2: 'Cross sources, separate signal from noise and know which question each number answers. A chart is not a finding.',
            qe_h3: 'Decide',
            qe_p3: 'Turn it into KPIs the whole team understands and into concrete actions. If it does not change what someone does tomorrow, it is decoration, not analytics.',
            sv_s4_title: 'Training & mentoring',
            sv_s4_tag: 'Your team measuring on its own within weeks.',
            sv_s4_text: 'GA4 and GTM workshops for your team and 1:1 mentoring for analysts. Built on your data, not on generic slides.',
            sv_p_tag: '02 · Process',
            sv_p_title: 'How I work.',
            sv_p1_h: 'Diagnosis',
            sv_p1_p: 'Half an hour on a call and a review of your setup. Free, and you leave with one problem identified.',
            sv_p2_h: 'Proposal',
            sv_p2_p: 'Scope, timeline and a fixed price in writing. No surprises, no padded hours.',
            sv_p3_h: 'Implementation',
            sv_p3_p: 'Documented validation of every piece. You see progress, not a report at the end.',
            sv_p4_h: 'Delivery & support',
            sv_p4_p: 'Documentation, a handover video and one month of support. What I deliver stays yours and working.',
            sv_a_tag: '03 · About',
            sv_a_title: 'Who is behind this.',
            sv_a_lead: 'I am Antonio Luis Pérez Carmona, Digital Analyst: I measure 1300+ websites daily and maintain 100+ dashboards in production. On my own I built Roometrics, cookieless web analytics, and Analytics Copilot, a Chrome extension for measurement QA. What I sell is what I do every day.',
            sv_a_cv: 'Full career & CV →',
            sv_c_tag: '05 · Contact',
            sv_foot_rec: 'Recruiters: CV & career',

            brand_role: 'Data analyst in Málaga',
            hero_role: 'AI & Data Analyst',
            hero_owner: 'Owner of Roometrics.es',
            hero_cta_cv: 'Download CV',
            hero_cta_contact: "Let's talk",
            paths_label: 'What are you looking for?',
            path_web: 'Ecommerce / Web Analyst',
            path_ds: 'Data Science',
            path_da: 'Data Analyst',

            clients_label: 'They already trust me',
            clients_aria: 'Clients',

            quotes_label: 'What clients say',
            quotes_aria: 'Client reviews',
            q_sumal: '"He quickly understood what we needed and solved it with precision and efficiency. Punctual, accurate and very professional throughout the process. We would work with him again."',
            q_vam: '"Exceptional work. Fast delivery, great communication and a report on everything done that many professionals would envy. I will definitely count on him again."',
            q_emi: '"He is technically very skilled in web analytics and Google Tag Manager, and he understood and executed the task very quickly. He also provided me with a report on the work done and the improvements in my client\'s analytics."',
            q_otm: '"Antonio is amazing, he is truly an expert, and I highly recommend him."',
            q_seeds: '"We are very happy with the delivery. He is very professional and detail-oriented, with deep knowledge of what he was hired for. He also presented us with an excellent audit."',
            q_suntropy: '"Great work on web analytics. Very professional service and fast delivery."',

            about_tag: '01 · About',
            about_title: 'One profile, three fronts.',
            about_lead: 'I am Antonio Luis Pérez Carmona, Digital Analyst at Paraty Tech: I measure the booking funnel of 1300+ hotel websites with GA4, GTM and BigQuery, and maintain 100+ dashboards that Product, Marketing and Operations use daily. I came from marketing, stayed for the data, and along the way ended up covering three roles that usually take three people.',
            about_h1: 'Ecommerce / Web Analyst',
            about_p1: 'End-to-end measurement: GA4, GTM on web and server side, custom DataLayer, Consent Mode, Meta CAPI and CRO. Clean data in, campaigns measured for real.',
            about_h2: 'Data Analyst',
            about_p2: 'SQL in BigQuery, Python and dashboards in Power BI and Looker Studio. From raw data to the report people open every morning without being told to.',
            about_h3: 'Data Scientist',
            about_p3: 'Supervised models, time series with RNNs and LSTMs, and explainability. A master in Data Science and AI plus a real fraud case with 0.92 ROC-AUC.',
            about_cv: 'Download CV (PDF)',
            about_linkedin: 'View LinkedIn',

            timeline_tag: 'Journey',
            timeline_title: 'How I got here.',
            tl_uma_role: 'BA in Marketing and Market Research',
            tl_uma_text: "Four years chasing a marketing career, only to find out what really hooked me wasn't the pretty campaigns but the data behind them. Plot twist accepted.",
            tl_taco_date: 'Sep 2022 → Apr 2025',
            tl_taco_role: 'From line cook to Shift Leader',
            tl_taco_text: "Started frying tacos and ended up running entire shifts as a shift leader. Sounds like a CV anecdote, but that's where I learned to manage teams, keep inventory in check and make calls under real pressure. The fryer-side MBA, and I'd do it again.",
            tl_windup_date: 'Sep 2024 → Apr 2025',
            tl_windup_role: 'Master in Digital Marketing + Digital Analytics Junior',
            tl_windup_text: "A 532h digital marketing master while working as a Digital Analytics Junior. My first real dive into analytics, with GA4, GTM, DataLayer, dashboards and tracking audits alongside Paid, SEO and CRO teams. The 'yeah, this is what I want to do' moment.",
            tl_talent_role: 'Finalist · FYCMA & Diario SUR',
            tl_talent_text: 'Picked as one of 25 finalists in a three day program run by FYCMA and Diario SUR. Three days meeting companies from Málaga and people my age doing far stranger things than I do.',
            tl_paraty_date: 'Mar 2025 → Present',
            tl_paraty_text: 'Digital analytics in hospitality tech. Measurement with GA4 and GTM, web and server side, plus DataLayer design and tracking audits so the data arrives clean. Then SQL in BigQuery, dashboards in Looker Studio and Power BI, funnels and attribution. And the part nobody wants to touch: Consent Mode, GDPR and enhanced conversions with Google Ads and Meta CAPI.',
            tl_bigschool_role: 'Master in Data Science and AI · 400h',
            tl_bigschool_text: 'A 400h master to formalize the jump into Data Science. Machine Learning, Explainable AI, Python, SQL, Tableau and cloud analytics on real projects. The bridge from analyst to scientist, this time with a piece of paper to prove it.',
            tl_current: 'Current',
            tl_done: 'Completed',

            stack_tag: '02 · Stack',
            stack_title: 'Tools I reach for every day.',
            stack_core_title: 'Python & SQL',
            stack_viz_title: 'Analytics & Viz',
            stack_meas_title: 'Measurement & privacy',
            chip_ec: 'Enhanced conversions',
            chip_ab: 'A/B testing',
            stack_ml_title: 'Machine Learning',
            stack_cloud_title: 'Cloud & DevOps',
            stack_data_title: 'Data engineering',
            stack_certs: 'Certifications',
            certs_aria: 'Certification badges',
            stack_lang: 'English · B2 First',
            stack_az: 'Azure AZ-900 · in progress',

            proj_tag: '03 · Projects',
            proj_title: 'What I am building on my own.',
            proj_fraud_title: 'Bank fraud detection with ML',
            proj_fraud_text: 'End-to-end model on 590K real transactions from the IEEE-CIS dataset, with 434 features across transaction data and identity signals like device, email domain or geolocation. A 500-tree Gradient Boosting does the work. The real finding was the threshold. At the default 0.5 more fraud slipped through than got caught, and dropping it to 0.1 the model captures 60% of all fraud while bothering only 0.46% of legitimate users.',
            proj_fraud_m1: 'transactions',
            proj_fraud_m2: 'features',
            proj_fraud_m4: 'fraud caught',
            proj_fraud_repo: 'View the code on GitHub',
            proj_fraud_cta: 'Read on LinkedIn',
            proj_rm_title: 'Roometrics, cookieless web analytics',
            proj_rm_text: 'My product, and it is live. Web analytics that sets no cookies and stores no IPs, so it does not need a banner either. Every visit becomes an anonymous code with keys that rotate daily: nothing left to consent to. Two lines to install, or straight from GTM, and the data never leaves Europe. It came out of a line that annoys me precisely because it is true: when something is free, you are the product.',
            proj_rm_m2: 'lines to install it',
            proj_rm_m3: 'key rotation',
            proj_rm_m4_val: 'EU',
            proj_rm_m4: 'servers',
            proj_rm_cta: 'See Roometrics live',
            tools_tag: '04 · Tools',
            tools_title: 'Small tools I ship when nothing off-the-shelf fits.',
            tools_lead: 'Things I needed that did not exist, or existed badly. I use them myself and leave them published. No accounts, and your data never leaves your browser.',
            tool_ac_tagline: 'One-click web analytics QA, inside Chrome.',
            tool_ac_text: 'Chrome extension with 10 tools to audit GA4, GTM, Google Ads and Consent Mode: live session, end-to-end attribution, event generator and annotated full-page capture. All from the popup, without opening the Network tab, and without a single byte leaving your browser.',
            tool_ac_chip_9: '10 tools',
            tool_ac_chip_stack: 'GA4 + Ads + Consent',
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
            tool_bank_tagline: 'Put cold numbers where there used to be gut feeling.',
            tool_bank_text: 'Bet log, EV per entry, fractional Kelly and an equity curve with drawdown. It flags any stake above 5% of bankroll and any entry with negative expected value. A discipline tool, not a tipster.',
            tool_bank_chip_ev: 'EV + Kelly',
            tool_bank_chip_equity: 'Equity curve',
            tool_bank_chip_alerts: 'Risk alerts',
            tool_bank_chip_bilingual: 'Bilingual',

            lp_solve_tag: 'What I solve',
            lp_proof_tag: 'Proof',
            lp_stack_tag: 'The stack for this',
            lp_back: 'Back to portfolio',

            lpw_title: 'Ecommerce & Web Analyst · Antonio Luis Pérez',
            lpw_tag: 'Web analytics & measurement',
            lpw_h1: 'Your web analytics says one thing. Your business, another.',
            lpw_lead: 'Your site sells and your data should tell the story. End-to-end measurement for ecommerce and service sites: GA4, Google Tag Manager on web and server side, custom DataLayer and the privacy work nobody wants to touch.',
            lp_pains_tag: 'Sound familiar?',
            lp_plan_tag: 'The plan',
            lp_trust: '5.0 reviews · Same-day reply · Free diagnosis',
            lpw_pain1: 'GA4 says 80 sales, your backend says 110, and nobody knows which to trust.',
            lpw_pain2: 'Every tool gives a different number for the same thing.',
            lpw_pain3: 'You added the cookie banner and conversions sank.',
            lpw_pain4: 'You spend on campaigns without knowing which channel really brings customers.',
            lpw_pain5: 'Or nothing is set up yet and you are deciding blind.',
            lpw_plan1: 'I audit whatever you have and tell you where it lies. If there is nothing yet, I design the measurement from scratch.',
            lpw_plan2: 'I rebuild GA4, Tag Manager and the DataLayer, with consent done right.',
            lpw_plan3: 'I validate against your backend and hand it over documented and working.',
            lpda_pain1: 'The monthly report takes three days to build and is born stale.',
            lpda_pain2: 'Every department walks into the meeting with its own number.',
            lpda_pain3: 'Data everywhere and answers nowhere.',
            lpda_pain4: 'Nobody has opened the dashboard you commissioned since March.',
            lpda_pain5: 'Or nothing is set up at all: the data lives in loose spreadsheets and in two people\'s heads.',
            lpda_plan1: 'I start from the decision you need to make, not from the chart.',
            lpda_plan2: 'I build the panel in Power BI or Looker Studio, connected and refreshing itself.',
            lpda_plan3: 'I train your team so it runs without depending on anyone.',
            lpw_solve_title: 'The usual three fires.',
            lpw_s1_h: 'Broken or half-done tracking',
            lpw_s1_p: 'Full measurement audit, GA4 and GTM implementation, a DataLayer designed around your business and DebugView validation before anything is called done.',
            lpw_s2_h: 'Privacy without surprises',
            lpw_s2_p: 'Consent Mode v2, GDPR, enhanced conversions and Meta CAPI. Comply with the law without going blind: consent done right and data that keeps working.',
            lpw_s3_h: 'From data to decisions',
            lpw_s3_p: 'Funnels, channel attribution and dashboards people actually open every morning. If a report does not change a decision, it should not exist.',
            lpw_proof_title: 'Numbers that are not brochure material.',
            lpw_n1: 'websites measured',
            lpw_n2: 'dashboards in production',
            lpw_n3: 'ecommerce and B2B audited',
            lpw_n4: 'businesses measured on my own',
            lpw_cta_title: 'Shall we look at your tracking?',
            lpw_cta_text: 'Tell me what you sell and which number does not add up. I will tell you what I would do, no strings and no jargon.',

            lpds_title: 'Data Science & Machine Learning · Antonio Luis Pérez',
            lpds_tag: 'Data Science',
            lpds_h1: 'Applied data science with honest metrics.',
            lpds_lead: 'Machine learning applied to business problems: classification, forecasting and explainability. I start with the simplest model that could work and only add complexity when the numbers ask for it.',
            lpds_solve_title: 'Where I can help.',
            lpds_s1_h: 'Classification and prediction',
            lpds_s1_p: 'End-to-end supervised models: EDA, feature engineering, training and decision-threshold tuning built around the real cost of each error.',
            lpds_s2_h: 'Time series',
            lpds_s2_p: 'Forecasting with RNNs and LSTMs in PyTorch for demand, revenue or traffic. Always with a simple baseline next to it, to know if the network truly wins.',
            lpds_s3_h: 'Explainability',
            lpds_s3_p: 'Explainable AI so the model is not a black box: which variable drives each prediction and how to explain it to whoever makes the call.',
            lpds_proof_title: 'The fraud case.',
            lpds_proof_text: 'Full pipeline on the IEEE-CIS dataset: 590K real transactions and 434 features feeding a 500-tree Gradient Boosting. The finding was not the model, it was the threshold: dropping it from 0.5 to 0.1 captures 60% of all fraud while bothering only 0.46% of legitimate users.',
            lpds_cta_title: 'Got data and a question?',
            lpds_cta_text: 'Bring me the problem. The dataset does not need to arrive clean, that part is on me.',

            lpda_title: 'Data Analyst · Antonio Luis Pérez',
            lpda_tag: 'Business intelligence and reporting',
            lpda_h1: 'Business intelligence people actually open every morning.',
            lpda_lead: 'SQL, Python and dashboards that actually get used. I sort out data that arrives in a mess and turn it into reports people open every morning without being told to.',
            lpda_solve_title: 'Less manual Excel, more answers.',
            lpda_s1_h: 'Clean data',
            lpda_s1_p: 'Extraction and cleaning with SQL in BigQuery, quality validation and pipelines that do not wake you up at 3 AM.',
            lpda_s2_h: 'Dashboards that get used',
            lpda_s2_p: 'Power BI and Looker Studio for conversion, revenue and UX KPIs. If a dashboard does not change what someone does tomorrow, it should not exist.',
            lpda_s3_h: 'Hands-free reporting',
            lpda_s3_p: 'Automation with Python and advanced Excel: what used to be a whole morning of copy-paste becomes a button.',
            lpda_proof_title: 'Already up and running.',
            lpda_n1: 'dashboards in production',
            lpda_n2: 'websites feeding the data',
            lpda_n3: 'teams using them daily',
            lpda_n4: 'clients audited',
            lpda_cta_title: 'Buried in spreadsheets?',
            lpda_cta_text: 'Tell me which report eats your week and I will hand it back automated.',

            contact_tag: '05 · Contact',
            faq_tag: '04 · Frequently asked',
            faq_title: 'What people usually ask me',
            faq_q1: 'How much does it cost?',
            faq_a1: 'It depends on the size of the site and what is already in place. After the diagnosis call, which is free, I send you a closed price for the whole project. I do not charge by the hour: you know what you are paying before we start.',
            faq_q2: 'How long does it take?',
            faq_a2: 'A measurement audit, one to two weeks. A full GA4 and Tag Manager implementation, two to four, depending on how many events and systems need connecting. You get the date before we start, not along the way.',
            faq_q3: 'I already have GA4 installed, is this any use to me?',
            faq_a3: 'Almost every project I take on is exactly that: fixing what is already there. Having GA4 installed and having GA4 measuring properly are two different things, and the difference shows the day someone asks where the sales came from.',
            faq_q4: 'Do you only work in Málaga?',
            faq_a4: 'I am based in Málaga and work with clients across Spain remotely. This is done with access and video calls: we do not need to be in the same city for the data to come in clean.',
            faq_q5: 'What do you need from me to start?',
            faq_a5: 'Read access to whatever you have: GA4, Tag Manager, the ecommerce platform if there is one. And someone who can touch the site or drop in a script when needed. That is enough.',
            faq_q6: 'When we finish, am I left on my own?',
            faq_a6: 'No. Everything I build comes documented so your team can maintain it without depending on me, which is how it should be. If you would rather I stay on it, there is monthly support.',
            cur_title: 'Google Analytics 4 online course · Antonio Luis Pérez',
            cur_tag: 'Training · Online course',
            cur_h1: 'A Google Analytics 4 course with no fluff, in plain language.',
            cur_pain1: 'You open GA4 and do not even know where to look: it is all menus.',
            cur_pain2: 'You come from Universal Analytics and nothing is where it was.',
            cur_pain3: 'The YouTube tutorials are outdated or not in your language.',
            cur_pain4: 'Work asks you for data and you answer with screenshots you do not understand.',
            cur_offer_tag: 'The course',
            cur_price_note: 'one-time payment · lifetime access',
            cur_off1: 'Video lessons, self-paced, from zero.',
            cur_off2: 'With real cases: what I use daily measuring 1300+ websites.',
            cur_off3: 'Updates included: when GA4 changes, the course changes.',
            cur_cta: 'I want the course',
            cur_cta2: 'See the syllabus ↓',
            cur_trust: 'In production: the first students get this launch price',
            cur_t_tag: '01 · Syllabus',
            cur_t_title: 'What you will learn.',
            cur_m1_h: '1 · GA4 from scratch: setup and first steps',
            cur_m1_p: 'What GA4 measures and what it does not, creating the property right the first time, installing it with Tag Manager, and the settings almost everyone skips: data retention, time zones and internal traffic filters.',
            cur_m2_h: '2 · Events and conversions that mean something',
            cur_m2_p: 'The event model explained without jargon, what to measure for your business, marking conversions and naming everything so it still makes sense six months from now.',
            cur_m3_h: '3 · Google Tag Manager without fear',
            cur_m3_p: 'Tags, triggers and variables with real examples: clicks, forms, scroll and video. And DebugView to confirm that what you think you measure is measured.',
            cur_m4_h: '4 · Reports and explorations: finding answers',
            cur_m4_p: 'Where everything lives, funnels, paths and cohorts, and how to answer the questions people actually ask: which channel works, where users drop, what changed this week.',
            cur_m5_h: '5 · Consent Mode and privacy without scares',
            cur_m5_p: 'What the law requires, what the cookie banner does to your data, and how to set up Consent Mode v2 to comply without going blind.',
            cur_m6_h: '6 · From data to report: Looker Studio',
            cur_m6_p: 'Connect GA4 to Looker Studio and build a panel your boss understands without you explaining it. The same criteria I use in the dashboards I sell.',
            cur_q_tag: '02 · Who it is for',
            cur_q_title: 'Who it is for, and who it is not.',
            cur_q1_h: 'Marketing and business',
            cur_q1_p: 'You run campaigns or a website and need to read the data without depending on anyone. This course is exactly for you.',
            cur_q2_h: 'Ecommerce owners',
            cur_q2_p: 'You sell online and want to know what works before spending one more euro on ads. You leave the course reading your own funnel.',
            cur_q3_h: 'Who it is not for',
            cur_q3_p: 'If you are after server side, BigQuery or advanced attribution, this will fall short: that is consulting, not a course. Write me and we will see.',
            cur_c_title: 'Are you in?',
            cur_c_text: 'Tell me you want the course and I will write you with access as soon as it opens, at the launch price. And if it is training for your team, tell me here too.',
            form_need_6: 'The GA4 course',
            contact_title: 'Tell me what you need',
            contact_lead: "Drop me a line and I'll tell you where to start. No commitment and no sales pitch: if your case is not for me, I'll say so.",
            contact_place: 'Málaga, Spain · working remotely',
            form_name: 'Name',
            form_company: 'Company',
            form_optional: '(optional)',
            form_email: 'Email',
            form_need: 'What do you need?',
            form_need_1: 'Measurement audit',
            form_need_2: 'Implementation and tracking',
            form_need_3: 'Dashboards and reporting',
            form_need_4: 'Training for my team',
            form_need_5: 'Something else',
            form_msg: 'Tell me about your case',
            form_send: 'Send message',
            form_legal: 'Your details are used only to reply to you. No lists, no third parties.',
            form_sending: 'Sending...',
            form_ok: 'Message sent. I will reply as soon as I read it.',
            form_err: 'It could not be sent. Write to alpcmalaga@gmail.com and we will sort it out.',
            form_err_campos: 'Check the highlighted fields before sending.',
            form_err_captcha: 'I could not verify you are not a robot. Try again, and if it keeps failing write to alpcmalaga@gmail.com.',
            form_err_frecuencia: 'Too many submissions in a row. Wait a minute and try again.',
            form_mailto: 'Your email app opens with the message ready. Hit send and it reaches me.',
            contact_cv: 'CV as PDF',
            contact_reply: 'I usually reply within the day.',
            wa_href: 'https://wa.me/34601427159?text=Hi%20Antonio%20Luis%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20know%20more.',

            footer_cookies: 'Cookie preferences',

            consent_title: 'Cookies',
            consent_text: 'Alright, the same old song: cookies and consent. Sorry, I am a data analyst, a good one, and I need everything measured and under control.',
            consent_accept: 'Accept',
            consent_reject: 'Reject',

            nf_title: 'No data here.',
            nf_text: 'This page does not exist. Or it did and no longer does, which for you amounts to the same thing. Head back to the start, there is actually something there.',
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

        // Hay más de un selector de idioma (el de la barra y el del banner de
        // cookies), así que se marcan todos por data-lang en vez de por id.
        document.querySelectorAll('[data-lang]').forEach((btn) => {
            const on = btn.getAttribute('data-lang') === lang;
            btn.classList.toggle('is-active', on);
            btn.setAttribute('aria-pressed', String(on));
        });
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

        // Se calcula al vuelo porque dentro del diálogo también viven los dos
        // botones de idioma, y todos tienen que entrar en la trampa de foco.
        const focusables = () => Array.prototype.slice.call(box.querySelectorAll('button'));
        let lastFocus = null;

        const onKeydown = (e) => {
            if (e.key !== 'Tab') return;
            // Encierra el foco dentro del diálogo: sin decisión no se puede
            // tabular hasta el contenido de debajo.
            e.preventDefault();
            const f = focusables();
            if (!f.length) return;
            const i = f.indexOf(document.activeElement);
            const next = e.shiftKey
                ? (i <= 0 ? f.length - 1 : i - 1)
                : (i === f.length - 1 ? 0 : i + 1);
            f[next].focus();
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
            // Se enfoca el diálogo, no "Aceptar": enfocar un botón le dibuja
            // el anillo de foco y lo haría parecer el destacado, que es justo
            // lo que no puede pasar aquí.
            box.focus();
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

    /* ---------- Altura real de la barra superior ---------- */
    // El hero se dimensiona restando la barra a la altura de pantalla, pero esa
    // barra no mide siempre igual: en móvil el menú salta de línea y pasa de
    // 74px a 144px. Con un número fijo, los tres caminos se salían del primer
    // pantallazo justo en las pantallas donde más importa.
    const initTopbarHeight = () => {
        const bar = document.querySelector('.topbar');
        if (!bar) return;

        const medir = () => {
            const alto = Math.round(bar.getBoundingClientRect().height);
            if (alto > 0) document.documentElement.style.setProperty('--topbar-h', alto + 'px');
        };

        medir();
        if ('ResizeObserver' in window) new ResizeObserver(medir).observe(bar);
        else window.addEventListener('resize', medir, { passive: true });
    };

    /* ---------- Aparicion al entrar en pantalla ---------- */
    const initReveal = () => {
        const els = document.querySelectorAll('.reveal');
        if (!els.length) return;

        const mostrarTodo = () => els.forEach((el) => el.classList.add('is-visible'));

        if (!('IntersectionObserver' in window) ||
            window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            mostrarTodo();
            return;
        }

        const io = new IntersectionObserver((entries) => {
            entries.forEach((e) => {
                if (!e.isIntersecting) return;
                e.target.classList.add('is-visible');
                io.unobserve(e.target); // una vez visto, no se vuelve a esconder
            });
        }, { threshold: 0.08, rootMargin: '0px 0px -6% 0px' });

        els.forEach((el) => io.observe(el));

        // Red de seguridad: si algo fallara, a los 3s se muestra todo igual
        window.setTimeout(mostrarTodo, 3000);
    };

    /* ---------- Rotacion de logos de clientes ---------- */
    // Se ven 4 logos; cada pocos segundos los 4 se funden a la vez y entran
    // los 4 siguientes, en ventana circular sobre la lista completa. Sin JS
    // o con movimiento reducido se muestra la parrilla entera, quieta.
    const initClients = () => {
        const grid = document.getElementById('clients-grid');
        if (!grid) return;

        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        const items = Array.prototype.slice.call(grid.children);
        const GROUP = 4;
        if (items.length <= GROUP) return;

        let start = 0;
        const show = () => {
            items.forEach((li, i) => {
                const offset = (i - start + items.length) % items.length;
                li.hidden = offset >= GROUP;
            });
        };
        show();

        // Solo rota cuando la franja esta en pantalla y la pestaña activa
        let onScreen = true;
        if ('IntersectionObserver' in window) {
            onScreen = false;
            const io = new IntersectionObserver((entries) => {
                entries.forEach((e) => { onScreen = e.isIntersecting; });
            }, { threshold: 0.2 });
            io.observe(grid);
        }

        const FADE_MS = 340;
        window.setInterval(() => {
            if (!onScreen || document.hidden) return;
            grid.classList.add('is-out');
            window.setTimeout(() => {
                start = (start + GROUP) % items.length;
                show();
                grid.classList.remove('is-out');
            }, FADE_MS);
        }, 4500);
    };

    /* ---------- Rotacion de reseñas ---------- */
    // Una cita visible cada vez; el resto espera su turno y entran en fundido
    // sobre un escenario de altura fija. Con movimiento reducido se queda la
    // primera; sin JS el CSS las apila todas y no se pierde ninguna.
    const initQuotes = () => {
        const stage = document.getElementById('quotes-stage');
        if (!stage) return;

        const quotes = Array.prototype.slice.call(stage.children);
        if (quotes.length < 2) return;

        quotes[0].classList.add('is-current');

        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            quotes.slice(1).forEach((q) => { q.hidden = true; });
            return;
        }

        let onScreen = true;
        if ('IntersectionObserver' in window) {
            onScreen = false;
            const io = new IntersectionObserver((entries) => {
                entries.forEach((e) => { onScreen = e.isIntersecting; });
            }, { threshold: 0.3 });
            io.observe(stage);
        }

        let i = 0;
        window.setInterval(() => {
            if (!onScreen || document.hidden) return;
            quotes[i].classList.remove('is-current');
            i = (i + 1) % quotes.length;
            quotes[i].classList.add('is-current');
        }, 6500);
    };

    /* ---------- Contadores ---------- */
    // Las cifras suben desde cero al entrar en pantalla, una sola vez.
    // El separador de miles se pone en el idioma activo, asi que 1300
    // se lee 1.300 en español y 1,300 en ingles.
    const initCounters = () => {
        const nums = document.querySelectorAll('[data-count]');
        if (!nums.length) return;

        const formatear = (n) => n.toLocaleString(document.documentElement.lang || 'es');
        const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        // Se mide el ancho del valor final y se reserva antes de contar: si no,
        // pasar de 0 a 1.202 ensancha el contador y empuja a sus vecinos.
        const reservarAncho = (el, fin) => {
            const previo = el.textContent;
            el.textContent = formatear(fin);
            const ancho = el.getBoundingClientRect().width;
            el.textContent = previo;
            if (ancho > 0) el.style.minWidth = Math.ceil(ancho) + 'px';
        };

        const contar = (el) => {
            const fin = parseInt(el.getAttribute('data-count'), 10) || 0;
            reservarAncho(el, fin);
            if (reduce) { el.textContent = formatear(fin); return; }

            const DUR = 1500;
            let t0 = null;
            const paso = (t) => {
                if (!t0) t0 = t;
                let p = Math.min(1, (t - t0) / DUR);
                p = 1 - Math.pow(1 - p, 3);   // frena al final, como un cuentakilometros
                el.textContent = formatear(Math.round(fin * p));
                if (p < 1) requestAnimationFrame(paso);
            };
            requestAnimationFrame(paso);
        };

        if (!('IntersectionObserver' in window)) {
            nums.forEach(contar);
            return;
        }

        const io = new IntersectionObserver((entries) => {
            entries.forEach((e) => {
                if (!e.isIntersecting) return;
                contar(e.target);
                io.unobserve(e.target);
            });
        }, { threshold: 0.4 });
        nums.forEach((el) => io.observe(el));
    };

    /* ---------- Burbuja de contacto ---------- */
    // Se inyecta desde aqui y no en cada HTML porque son trece paginas y el
    // mismo bloque repetido trece veces se desincroniza a la primera.
    // Ofrece los tres canales en vez de elegir uno: cada uno mide por separado,
    // asi dentro de unas semanas los datos diran cual sobra.
    const initFab = () => {
        if (document.getElementById('fab')) return;

        const canales = [
            { id: 'whatsapp', txt: 'WhatsApp', href: 'https://wa.me/34601427159?text=Hola%20Antonio%20Luis%2C%20vi%20tu%20portfolio%20y%20me%20gustar%C3%ADa%20saber%20m%C3%A1s.', i18n: 'wa_href', fuera: true },
            { id: 'linkedin', txt: 'LinkedIn', href: 'https://www.linkedin.com/in/antonio-luis-perez-carmona/', fuera: true },
            { id: 'email', txt: 'Email', href: 'mailto:alpcmalaga@gmail.com?subject=Contacto%20desde%20el%20portfolio' }
        ];

        const fab = document.createElement('div');
        fab.className = 'fab';
        fab.id = 'fab';

        const menu = document.createElement('div');
        menu.className = 'fab__menu';
        menu.id = 'fab-menu';
        menu.hidden = true;

        canales.forEach((c) => {
            const a = document.createElement('a');
            a.className = 'fab__item';
            a.href = c.href;
            a.textContent = c.txt;
            if (c.fuera) { a.target = '_blank'; a.rel = 'noopener'; }
            if (c.i18n) a.setAttribute('data-i18n-attr', 'href:' + c.i18n);
            a.setAttribute('data-track', 'contact_intent_click');
            a.setAttribute('data-track-location', 'fab_' + c.id);
            menu.appendChild(a);
        });

        const btn = document.createElement('button');
        btn.className = 'fab__btn';
        btn.id = 'fab-btn';
        btn.type = 'button';
        btn.setAttribute('aria-expanded', 'false');
        btn.setAttribute('aria-controls', 'fab-menu');
        btn.setAttribute('aria-label', 'Contacto');
        btn.setAttribute('data-i18n-attr', 'aria-label:fab_aria');
        btn.innerHTML =
            '<svg class="fab__ico fab__ico--open" viewBox="0 0 24 24" aria-hidden="true">' +
            '<path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 9.5 9.5 0 0 1-2.8-.4L3 21l1.6-4.7A8.2 8.2 0 0 1 3.6 11.5 8.4 8.4 0 0 1 12 3.1a8.4 8.4 0 0 1 9 8.4z"/></svg>' +
            '<svg class="fab__ico fab__ico--close" viewBox="0 0 24 24" aria-hidden="true">' +
            '<path d="M6 6l12 12M18 6L6 18"/></svg>';

        // Globo de aviso: aparece solo a los pocos segundos para que la
        // burbuja no pase desapercibida. Con una X para cerrarlo, porque
        // un aviso que no se puede callar molesta mas de lo que capta.
        const globo = document.createElement('div');
        globo.className = 'fab__hint';
        globo.id = 'fab-hint';
        globo.hidden = true;

        const texto = document.createElement('span');
        texto.setAttribute('data-i18n', 'fab_hint');
        texto.textContent = '¿Necesitas ayuda?';

        const cerrar = document.createElement('button');
        cerrar.className = 'fab__hint-x';
        cerrar.type = 'button';
        cerrar.textContent = '\u00d7';
        cerrar.setAttribute('aria-label', 'Cerrar aviso');
        cerrar.setAttribute('data-i18n-attr', 'aria-label:fab_hint_close');

        globo.appendChild(texto);
        globo.appendChild(cerrar);

        fab.appendChild(globo);
        fab.appendChild(menu);
        fab.appendChild(btn);
        document.body.appendChild(fab);

        const VISTO = 'alpc_fab_hint';
        const ocultarGlobo = (recordar) => {
            globo.hidden = true;
            if (!recordar) return;
            try { sessionStorage.setItem(VISTO, '1'); } catch (e) { /* modo privado */ }
        };

        const abrir = (si) => {
            menu.hidden = !si;
            fab.classList.toggle('is-open', si);
            btn.setAttribute('aria-expanded', String(si));
            if (si) ocultarGlobo(true);
        };

        // El globo solo asoma una vez por sesion y a los cuatro segundos:
        // el tiempo justo para que el visitante haya leido el titular.
        let yaVisto = false;
        try { yaVisto = sessionStorage.getItem(VISTO) === '1'; } catch (e) { /* modo privado */ }
        if (!yaVisto && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            window.setTimeout(() => {
                if (menu.hidden) globo.hidden = false;
            }, 4000);
        }

        // Pulsar el globo abre la burbuja, que es lo que se le pide al visitante
        texto.addEventListener('click', () => {
            ocultarGlobo(true);
            abrir(true);
            track('contact_fab_opened', { origen: 'hint' });
        });

        cerrar.addEventListener('click', (e) => {
            e.stopPropagation();
            ocultarGlobo(true);
        });

        btn.addEventListener('click', () => {
            const abriendo = menu.hidden;
            abrir(abriendo);
            if (abriendo) track('contact_fab_opened');
        });

        // Se cierra al pulsar fuera o con Escape, como cualquier menu
        document.addEventListener('click', (e) => {
            if (!fab.contains(e.target)) abrir(false);
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !menu.hidden) { abrir(false); btn.focus(); }
        });
    };

    /* ---------- Cabecera pegada ---------- */
    // Marca la barra en cuanto la pagina se despega del principio. Un
    // centinela invisible en lo alto evita escuchar el scroll en cada
    // fotograma, que es lo que suele volver pesada esta pieza.
    const initStickyBar = () => {
        const bar = document.querySelector('.topbar');
        if (!bar || !('IntersectionObserver' in window)) return;

        const centinela = document.createElement('div');
        centinela.setAttribute('aria-hidden', 'true');
        centinela.style.cssText = 'position:absolute;top:0;left:0;width:1px;height:1px';
        document.body.insertBefore(centinela, document.body.firstChild);

        new IntersectionObserver(([e]) => {
            bar.classList.toggle('is-stuck', !e.isIntersecting);
        }, { threshold: 0 }).observe(centinela);
    };

    /* ---------- Menu movil ---------- */
    // Sandwich + panel lateral. Solo opera en movil: en escritorio el burger
    // esta oculto por CSS y no hay forma de abrirlo.
    const initMenu = () => {
        const burger = document.querySelector('.topbar__burger');
        const drawer = document.getElementById('mobile-menu');
        if (!burger || !drawer) return;

        let abierto = false;

        const abrir = () => {
            abierto = true;
            drawer.hidden = false;
            // El estado inicial (panel fuera) tiene que pintarse antes de
            // añadir is-open, o la transicion de entrada no se ve.
            window.requestAnimationFrame(() => drawer.classList.add('is-open'));
            burger.classList.add('is-open');
            burger.setAttribute('aria-expanded', 'true');
            document.body.classList.add('menu-open');
        };

        const cerrar = () => {
            abierto = false;
            drawer.classList.remove('is-open');
            burger.classList.remove('is-open');
            burger.setAttribute('aria-expanded', 'false');
            document.body.classList.remove('menu-open');
            // Se esconde cuando acaba la transicion de salida
            window.setTimeout(() => { if (!abierto) drawer.hidden = true; }, 300);
        };

        burger.addEventListener('click', () => (abierto ? cerrar() : abrir()));

        // Tocar el fondo oscuro (fuera del panel) cierra
        drawer.addEventListener('click', (e) => { if (e.target === drawer) cerrar(); });

        // Navegar a una seccion tambien cierra
        drawer.querySelectorAll('a').forEach((a) => a.addEventListener('click', cerrar));

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && abierto) cerrar();
        });
    };

    /* ---------- Formulario de contacto ---------- */
    // El envío lo atiende una Pages Function de Cloudflare, el fichero
    // functions/api/contacto.js de este mismo repositorio. La clave del
    // servicio de correo vive como secreto en Cloudflare y nunca baja al
    // navegador.
    //
    // Si la ruta no responde, y eso pasa en cualquier alojamiento que no
    // ejecute funciones, el formulario no se queda muerto: compone el correo
    // y abre el cliente de email del visitante.
    const FORM_ENDPOINT = '/api/contacto';
    const FORM_EMAIL = 'alpcmalaga@gmail.com';

    // Turnstile, el captcha de Cloudflare. Esta es la clave PUBLICA (site
    // key); la secreta vive en el Worker como TURNSTILE_SECRET. Vacia = no se
    // carga nada y el servidor no exige token. Las dos claves van juntas: con
    // el secreto puesto y esta vacia, ningun envio real pasaria.
    //
    // Se carga solo cuando el visitante empieza a tocar el formulario, no al
    // abrir la pagina: asi el 99% de las visitas no descarga un script de
    // terceros que no necesita. Modo "interaction-only": invisible salvo que
    // Cloudflare dude, y entonces pide un clic, nunca semaforos ni bicicletas.
    const TURNSTILE_SITEKEY = '0x4AAAAAAEVpcfMMt9LZepKI';
    const TURNSTILE_SRC = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';

    const initContactForm = () => {
        const form = document.getElementById('contact-form');
        if (!form) return;

        const boton = form.querySelector('.form__send');
        const aviso = form.querySelector('.form__status');
        let empezado = false;

        const decir = (clave, estado) => {
            const dict = I18N[document.documentElement.lang] || I18N.es;
            aviso.textContent = dict[clave] || '';
            aviso.className = 'form__status' + (estado ? ' ' + estado : '');
        };

        // Cuanta gente empieza a escribir y no llega a enviar
        form.addEventListener('input', () => {
            if (empezado) return;
            empezado = true;
            track('form_start', { form_id: 'contacto' });
        });

        // Quien pulsa "Formación" o el plan de una landing no deberia tener
        // que volver a decir que necesita: el enlace deja puesto el desplegable
        document.querySelectorAll('[data-need]').forEach((el) => {
            el.addEventListener('click', () => {
                const sel = document.getElementById('f-asunto');
                if (sel) sel.value = el.getAttribute('data-need');
            });
        });

        /* ---- Turnstile ---- */
        const hueco = form.querySelector('.form__turnstile');
        let widget = null;          // id que devuelve turnstile.render
        let cargando = false;

        const pintarTurnstile = () => {
            if (widget !== null || !window.turnstile || !hueco) return;
            widget = window.turnstile.render(hueco, {
                sitekey: TURNSTILE_SITEKEY,
                theme: 'dark',
                language: document.documentElement.lang || 'es',
                appearance: 'interaction-only',
                'response-field-name': 'cf-turnstile-response'
            });
        };

        const cargarTurnstile = () => {
            if (!TURNSTILE_SITEKEY || cargando) return;
            cargando = true;
            if (window.turnstile) { pintarTurnstile(); return; }
            const s = document.createElement('script');
            s.src = TURNSTILE_SRC;
            s.async = true;
            s.onload = pintarTurnstile;
            document.head.appendChild(s);
        };

        // Al primer contacto con el formulario: foco en un campo o un dedo
        // sobre el, lo que llegue antes
        form.addEventListener('focusin', cargarTurnstile, { once: true });
        form.addEventListener('pointerdown', cargarTurnstile, { once: true });

        // El token tarda un momento en llegar tras pintar el widget. Si
        // alguien rellena y envia mas rapido que eso, se espera un poco en
        // vez de mandar un envio sin token que el servidor va a rechazar.
        const esperarToken = () => new Promise((resolver) => {
            if (!TURNSTILE_SITEKEY || !window.turnstile || widget === null) { resolver(); return; }
            const t0 = Date.now();
            const mirar = () => {
                const tok = window.turnstile.getResponse(widget);
                if (tok || Date.now() - t0 > 6000) { resolver(); return; }
                setTimeout(mirar, 150);
            };
            mirar();
        });

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            form.classList.add('is-checked');

            // Campo trampa relleno: es un bot, se descarta en silencio
            const trampa = form.querySelector('[name="website"]');
            if (trampa && trampa.value) return;

            if (!form.checkValidity()) {
                decir('form_err_campos', 'is-err');
                const fallo = form.querySelector('input:invalid, textarea:invalid');
                if (fallo) fallo.focus();
                return;
            }

            boton.disabled = true;
            decir('form_sending');

            esperarToken().then(() => enviar());
        });

        const enviar = () => {
            const datos = new FormData(form);
            datos.delete('website');
            datos.append('idioma', document.documentElement.lang || 'es');

            track('form_submitted', { form_id: 'contacto', form_subject: datos.get('asunto') });

            const abrirCorreo = () => {
                const cuerpo = [];
                datos.forEach((v, k) => cuerpo.push(k + ': ' + v));
                window.location.href = 'mailto:' + FORM_EMAIL
                    + '?subject=' + encodeURIComponent('Contacto web: ' + datos.get('nombre'))
                    + '&body=' + encodeURIComponent(cuerpo.join('\n'));
                decir('form_mailto', 'is-ok');
            };

            if (!FORM_ENDPOINT) {
                abrirCorreo();
                boton.disabled = false;
                return;
            }

            fetch(FORM_ENDPOINT, {
                method: 'POST',
                body: datos,
                headers: { Accept: 'application/json' }
            }).then((r) => {
                // 404 o 405 significan que la función no está desplegada,
                // no que el envío haya fallado. Ahí sí compensa el plan B.
                if (r.status === 404 || r.status === 405) {
                    abrirCorreo();
                    return;
                }
                // Errores con mensaje propio: el captcha no ha pasado y el
                // freno por frecuencia. Lo demas cae en el generico.
                if (r.status === 400 || r.status === 429) {
                    return r.json().catch(() => ({})).then((d) => {
                        if (d.error === 'captcha') decir('form_err_captcha', 'is-err');
                        else if (d.error === 'frecuencia') decir('form_err_frecuencia', 'is-err');
                        else decir('form_err', 'is-err');
                        if (window.turnstile && widget !== null) window.turnstile.reset(widget);
                    });
                }
                if (!r.ok) throw new Error(r.status);
                form.reset();
                form.classList.remove('is-checked');
                decir('form_ok', 'is-ok');
                // Un segundo envio necesita un token nuevo
                if (window.turnstile && widget !== null) window.turnstile.reset(widget);
            }).catch(() => {
                decir('form_err', 'is-err');
            }).then(() => {
                boton.disabled = false;
            });
        };
    };

    /* ---------- Boot ---------- */
    const boot = () => {
        // La burbuja se construye antes de traducir para que entre en el barrido
        initFab();

        applyTranslations(detectLang());

        document.querySelectorAll('[data-lang]').forEach((btn) => {
            btn.addEventListener('click', () => {
                const to = btn.getAttribute('data-lang');
                setLang(to);
                track('language_switched', { language_to: to });
            });
        });

        const year = document.getElementById('current-year');
        if (year) year.textContent = new Date().getFullYear();

        initTopbarHeight();
        initStickyBar();
        initMenu();
        initTracking();
        initConsent();
        initReveal();
        initCounters();
        initClients();
        initQuotes();
        initContactForm();

        // Los tres caminos todavía no llevan a ninguna página, pero sí miden.
        // Saber cuál pulsan los recruiters decide cuál merece construirse antes.
        document.querySelectorAll('[data-path]').forEach((btn) => {
            btn.addEventListener('click', () => {
                track('path_interest_click', { path_id: btn.getAttribute('data-path') });
            });
        });
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', boot);
    } else {
        boot();
    }
})();
