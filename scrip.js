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
//Nav2 Conocimientos
// =============================================

// Funcionalidad de las pestañas
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remover clase active de todos los botones/contenidos
        tabBtns.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
        
        // Activar el botón y contenido seleccionado
        btn.classList.add('active');
        const tabId = btn.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
    });
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
const projectTabBtns = document.querySelectorAll('.project-tab-btn');
const projectContents = document.querySelectorAll('.project-content');

projectTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        projectTabBtns.forEach(btn => btn.classList.remove('active'));
        projectContents.forEach(content => content.classList.remove('active'));
        
        btn.classList.add('active');
        const projectId = btn.getAttribute('data-project');
        document.getElementById(projectId).classList.add('active');
    });
});
// Galería de imágenes modal
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById("modalImage");
const captionText = document.querySelector(".modal-caption");
const closeModal = document.querySelector(".close-modal");

document.querySelectorAll('.gallery-img').forEach(img => {
    img.addEventListener('click', function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    });
});

closeModal.addEventListener('click', () => {
    modal.style.display = "none";
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 70,
            behavior: 'smooth'
        });
        
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
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