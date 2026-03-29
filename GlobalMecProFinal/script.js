/**
 * GlobalMec - Script de Funcionalidad Avanzada
 */

// 1. Manejo de Scroll para el Header (Cambio de color)
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.padding = "0.5rem 0";
        header.style.backgroundColor = "rgba(2, 6, 23, 0.98)";
    } else {
        header.style.padding = "1rem 0";
        header.style.backgroundColor = "rgba(2, 6, 23, 0.85)";
    }
});

// 2. Intersection Observer para Animaciones (Alto rendimiento)
const revealOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
};

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            revealObserver.unobserve(entry.target); // Animación solo una vez
        }
    });
}, revealOptions);

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// 3. Smooth Scroll para enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80, // Compensar el header fijo
                behavior: 'smooth'
            });
        }
    });
});

// 4. Lógica de Formulario con Feedback Pro
const contactForm = document.getElementById('form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const btn = this.querySelector('button');
        const respuesta = document.getElementById('respuesta');

        // Estado cargando
        btn.innerText = "Enviando...";
        btn.style.opacity = "0.7";
        btn.disabled = true;

        // Simulación de envío (Reemplazar con servicio real como EmailJS)
        setTimeout(() => {
            respuesta.innerHTML = `<span style="color: #4ade80; display: block; margin-top: 1rem; font-weight: 600;">
                ✅ ¡Solicitud enviada! Nos contactaremos a la brevedad.
            </span>`;
            this.reset();
            btn.innerText = "Enviar Solicitud";
            btn.style.opacity = "1";
            btn.disabled = false;
        }, 1800);
    });
}
