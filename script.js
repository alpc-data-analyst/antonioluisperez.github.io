// --- FUNCIONALIDAD DE IDIOMA ---

// Seleccionamos los dos "botones" de texto
const btnEs = document.getElementById('btn-es');
const btnEn = document.getElementById('btn-en');

// Detectar si el usuario ya guardó un idioma, si no, usar inglés ('en')
const currentLang = localStorage.getItem('lang') || 'en'; 
let lang = currentLang;

// Diccionario de textos (IGUAL QUE ANTES)
const translations = {
    'en': {
        'nav_home': 'Home',
        'nav_about': 'About',
        'nav_portfolio': 'Portfolio',
        'nav_contact': 'Contact',
        'nav_resume': 'Resume',
        'hero_intro': 'I am',
        'hero_subtitle': 'Data Analyst & Data Science. Inspired by tough problems.',
        'btn_projects': 'My Projects',
        'btn_cv': 'My CV',
        'section_interests': 'Areas of Interest',
        'section_interests_sub': 'Take a look at some of the things I love working on.',
        'int_cloud': 'Cloud Compute',
        'desc_cloud': 'I maintain servers for database storage, model training, and model deployment.',
        'desc_nlp': 'Applying NLP techniques to make sense of the motivations behind human interactions.',
        'desc_ml': 'I love the math and theory behind algorithms as well as the implementation.',
        'int_parallel': 'Parallel Computing',
        'desc_parallel': 'Extracting data from Hadoop databases using the HIVE framework.',
        'int_deploy': 'Model Deployment',
        'desc_deploy': 'Implementing machine learning models in real world production systems.',
        'int_analytics': 'Data Analytics',
        'desc_analytics': 'I love telling a story. Making a beautiful and compelling presentation.',
        'section_projects': 'My Latest Projects',
        'section_projects_sub': 'Take a look at my recent work.',
        'proj_progress': 'In Progress...',
        'proj_working': 'Working on it!',
        'cta_text': 'Impressed by my work?',
        'cta_btn': 'Let\'s Talk!',
        'about_title': 'About Me',
        'about_subtitle': 'Data Analyst & Data Scientist from Málaga, Spain.',
        'about_bio_1': 'I\'m Antonio Luis Pérez, a professional driven by a passion for converting large volumes of data into actionable insights. My approach combines strong technical skills in Python and SQL with a critical business mindset, ensuring every analysis drives strategic decisions and tangible results.',
        'about_bio_2': 'I have hands-on experience developing Machine Learning models (RNNs, LSTMs) and automating cloud infrastructure (AWS EC2). I am constantly seeking new challenges and projects that allow me to further grow in the fields of AI and Big Data.',
        'btn_download_cv': 'Download CV',
        'skills_title': 'My Technical Stack',
        'contact_title': 'Get in Touch',
        'contact_subtitle': 'Have a question or want to collaborate? You can reach me directly here:',
        'contact_github': 'My GitHub Profile',
        // --- TEXTOS DEL POPUP (INGLÉS) ---
        'popup_title': 'Wait, Don\'t Be Shy! 😉',
        'popup_text': 'Leaving already? You haven\'t hired me yet!',
        'popup_cta': 'YES, Send Me the Good Stuff!',
        'popup_no': 'No, thanks. I guess I\'m a loser who walks away from talent.'

    },
    'es': {
        'nav_home': 'Inicio',
        'nav_about': 'Sobre mí',
        'nav_portfolio': 'Portafolio',
        'nav_contact': 'Contacto',
        'nav_resume': 'Currículum',
        'hero_intro': 'Soy',
        'hero_subtitle': 'Analista de Datos y Data Scientist. Inspirado por los desafios.',
        'btn_projects': 'Mis Proyectos',
        'btn_cv': 'Mi CV',
        'section_interests': 'Áreas de Interés',
        'section_interests_sub': 'Echa un vistazo a las cosas en las que me encanta trabajar.',
        'int_cloud': 'Cloud Compute',
        'desc_cloud': 'Mantengo servidores para almacenamiento de bases de datos, entrenamiento y despliegue de modelos.',
        'desc_nlp': 'Aplico técnicas de NLP para entender las motivaciones detrás de las interacciones humanas.',
        'desc_ml': 'Me encanta tanto la matemática y teoría detrás de los algoritmos como su implementación.',
        'int_parallel': 'Computación Paralela',
        'desc_parallel': 'Extracción de datos de bases de datos Hadoop utilizando el framework HIVE.',
        'int_deploy': 'Despliegue de Modelos',
        'desc_deploy': 'Implementación de modelos de aprendizaje automático en sistemas de producción reales.',
        'int_analytics': 'Analítica de Datos',
        'desc_analytics': 'Me encanta contar historias. Crear presentaciones hermosas y convincentes.',
        'section_projects': 'Mis Últimos Proyectos',
        'section_projects_sub': 'Echa un vistazo a mi trabajo reciente.',
        'proj_progress': 'En Progreso...',
        'proj_working': '¡Trabajando en ello!',
        'cta_text': '¿Impresionado con mi trabajo?',
        'cta_btn': '¡Hablemos!',
        'about_title': 'Sobre Mí',
        'about_subtitle': 'Analista de Datos y Data Scientist de Málaga, España.',
        'about_bio_1': 'Soy Antonio Luis Pérez, un profesional impulsado por la pasión de convertir grandes volúmenes de datos en información procesable. Mi enfoque combina sólidas habilidades técnicas en Python y SQL con una mentalidad empresarial crítica, asegurando que cada análisis impulse decisiones estratégicas y resultados tangibles.',
        'about_bio_2': 'Tengo experiencia práctica desarrollando modelos de Machine Learning (RNNs, LSTMs) y automatizando infraestructura en la nube (AWS EC2). Busco constantemente nuevos desafíos y proyectos que me permitan seguir creciendo en los campos de la IA y el Big Data.',
        'btn_download_cv': 'Descargar CV',
        'skills_title': 'Mi Stack Técnico',
        'contact_title': 'Contacta Conmigo',
        'contact_subtitle': '¿Tienes alguna pregunta o quieres colaborar? Puedes contactarme directamente aquí:',
        'contact_github': 'Mi Perfil de GitHub',
        // --- TEXTOS DEL POPUP (ESPAÑOL) ---
        'popup_title': '¡Espera, a donde ibas! 😉',
        'popup_text': '¿Ya te vas? ¡Pero si aún no me has contratado!',
        'popup_cta': '¡SÍ, envíame lo bueno!',
        'popup_no': 'No, gracias. Dejaré escapar el talento.'
        // (Añadir aquí si hay textos de thankyou.html)
    }
};

// Función para actualizar el estilo visual (Negrita y color)
function updateLanguageUI(language) {
    if (btnEs && btnEn) {
        if (language === 'es') {
            btnEs.classList.add('active-lang');
            btnEn.classList.remove('active-lang');
        } else {
            btnEn.classList.add('active-lang');
            btnEs.classList.remove('active-lang');
        }
    }
}

// Función principal que cambia texto y estilos
function setLanguage(language) {
    const elements = document.querySelectorAll('[data-i18n]');
    
    elements.forEach(element => {
        const translationKey = element.getAttribute('data-i18n');
        if(translations[language] && translations[language][translationKey]) {
            element.textContent = translations[language][translationKey];
        }
    });

    updateLanguageUI(language); // Actualizar cuál está marcado
}

// Evento Click para ESPAÑOL
if (btnEs) {
    btnEs.addEventListener('click', () => {
        lang = 'es';
        setLanguage(lang);
        localStorage.setItem('lang', lang);
    });
}

// Evento Click para INGLÉS
if (btnEn) {
    btnEn.addEventListener('click', () => {
        lang = 'en';
        setLanguage(lang);
        localStorage.setItem('lang', lang);
    });
}

// --- CÓDIGO DEL POPUP (MODIFICADO CON PERSISTENCIA TEMPORAL) ---
const popup = document.getElementById('exit-popup');
const closeBtn = document.getElementById('close-popup');
const noThanksLink = document.getElementById('no-thanks-link');

// Constante para el key de localStorage
const POPUP_LAST_SHOWN = 'AntonioPerezPopupLastShown';
// Tiempo de expiración: 30 minutos en milisegundos (30 * 60 * 1000)
const POPUP_EXPIRY_MS = 30 * 60 * 1000; 

if (popup) {
    
    // Función central de lógica del Pop-up
    const showPopup = () => {
        const lastShown = localStorage.getItem(POPUP_LAST_SHOWN);
        const now = new Date().getTime();

        // 1. Si no se ha mostrado NUNCA o si ha pasado el tiempo de expiración
        if (!lastShown || (now - lastShown) > POPUP_EXPIRY_MS) {
            
            // Mostrar Pop-up
            popup.classList.remove('hidden-popup');
            document.body.style.overflow = 'hidden';

            // 2. Actualizar la marca de tiempo de la última vez que se mostró
            localStorage.setItem(POPUP_LAST_SHOWN, now);
        }
    };

    const hidePopup = () => {
        popup.classList.add('hidden-popup');
        document.body.style.overflow = 'auto';
    };

    // Detección de Intención de Salida (Exit-Intent)
    document.addEventListener('mouseout', (e) => {
        // Solo si el ratón está cerca del borde superior
        if (e.clientY < 50) { 
           // Usamos un pequeño retraso antes de llamar a la lógica de mostrar
           setTimeout(showPopup, 100); 
        }
    });

    // 3. Cierre del Pop-up
    closeBtn.addEventListener('click', hidePopup);
    noThanksLink.addEventListener('click', hidePopup);
    
    // Cierra con la tecla ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            hidePopup();
        }
    });
}
// ----------------------------------------------------------------------


// Al cargar la página (se ejecuta al final)
document.addEventListener('DOMContentLoaded', () => {
    setLanguage(currentLang);
    // Aseguramos que el año se actualice, solo si existe el elemento
    const currentYear = document.getElementById('current-year');
    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }
});