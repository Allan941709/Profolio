// =============================================
// CÓDIGO JAVASCRIPT - FUNCIONALIDADES PRINCIPALES
// =============================================

// =============================================
// MENÚ HAMBURGUESA - TOGGLE
// =============================================
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
 
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// =============================================
// SLIDER DE PROYECTOS
// =============================================
const sliderContainer = document.querySelector('.slider-container');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const indicators = document.querySelectorAll('.indicator');
const projectCards = document.querySelectorAll('.project-card');
 
let currentIndex = 0;
const totalSlides = projectCards.length;
 
// Función para actualizar la posición del slider
function updateSlider() {
    const slideWidth = projectCards[0].offsetWidth + parseInt(getComputedStyle(projectCards[0]).marginRight);
    sliderContainer.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    
    // Actualizar indicadores
    indicators.forEach((indicator, index) => {
        if (index === currentIndex) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
}
 
// Eventos para los botones de navegación
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalSlides - 1;
    updateSlider();
});
 
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex < totalSlides - 1) ? currentIndex + 1 : 0;
    updateSlider();
});
 
// Eventos para los indicadores
indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        currentIndex = index;
        updateSlider();
    });
});
 
// Slider automático
let sliderInterval = setInterval(() => {
    currentIndex = (currentIndex < totalSlides - 1) ? currentIndex + 1 : 0;
    updateSlider();
}, 5000);
 
// Pausar slider automático al pasar el mouse
sliderContainer.addEventListener('mouseenter', () => {
    clearInterval(sliderInterval);
});
 
sliderContainer.addEventListener('mouseleave', () => {
    sliderInterval = setInterval(() => {
        currentIndex = (currentIndex < totalSlides - 1) ? currentIndex + 1 : 0;
        updateSlider();
    }, 5000);
});
 
// =============================================
// SCROLL SUAVE PARA NAVEGACIÓN
// =============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 70,
            behavior: 'smooth'
        });
        
        // Cerrar menú móvil si está abierto
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});