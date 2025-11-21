document.addEventListener('DOMContentLoaded', () => {
    
    const POPUP_SEEN_KEY = 'AntonioPerezPopupShown';
    
    const popup = document.getElementById('exit-popup');
    const closeBtn = document.getElementById('close-popup');
    const noThanksLink = document.getElementById('no-thanks-link');
    
    
    
    // 1. Persistencia
    let hasShownPopup = localStorage.getItem(POPUP_SEEN_KEY) === 'true';

    if (!popup) { return; } 

    // Funciones
    const showPopup = () => {
        if (!hasShownPopup) {
            popup.classList.remove('hidden-popup');
            hasShownPopup = true;
            localStorage.setItem(POPUP_SEEN_KEY, 'true'); 
        }
    };

    const hidePopup = () => {
        popup.classList.add('hidden-popup');
    };

    // 2. Detección de Intención de Salida (Exit-Intent)
    document.addEventListener('mouseout', (e) => {
        // Opción que ha funcionado (la más estable):
        if (e.clientY < 50) { 
         showPopup();
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
    

});