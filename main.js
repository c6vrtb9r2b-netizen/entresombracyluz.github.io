document.addEventListener("DOMContentLoaded", function() {
    // Verifica si el usuario ya aceptó las cookies en el pasado
    if (!localStorage.getItem("cookiesAceptadas")) {
        
        // Crea el bloque de HTML del banner de forma dinámica
        const banner = document.createElement("div");
        banner.className = "cookie-banner";
        banner.innerHTML = `
            <p>Utilizamos cookies propias y de terceros para mejorar tu experiencia y mostrarte publicidad relacionada con tus preferencias (Google AdSense). Lee nuestra <a href="privacidad.html">Política de Privacidad</a>.</p>
            <button class="cookie-btn" id="btn-cookies">Aceptar</button>
        `;
        
        // Lo mete dentro de la página web
        document.body.appendChild(banner);
        
        // Escucha cuando el usuario hace clic en el botón "Aceptar"
        document.getElementById("btn-cookies").addEventListener("click", function() {
            localStorage.setItem("cookiesAceptadas", "true"); // Guarda la decisión
            banner.remove(); // Hace desaparecer el banner de la pantalla
        });
    }
});