 // Hamburger Menu Toggle
 const hamburger = document.querySelector('.hamburger');
 const navLinks = document.querySelector('.nav-links');
 
 hamburger.addEventListener('click', () => {
     hamburger.classList.toggle('active');
     navLinks.classList.toggle('active');
 });
 
 // Projects Slider
 const sliderContainer = document.querySelector('.slider-container');
 const prevBtn = document.querySelector('.prev-btn');
 const nextBtn = document.querySelector('.next-btn');
 const indicators = document.querySelectorAll('.indicator');
 const projectCards = document.querySelectorAll('.project-card');
 
 let currentIndex = 0;
 const totalSlides = projectCards.length;
 
 // Update slider position
 function updateSlider() {
     const slideWidth = projectCards[0].offsetWidth + parseInt(getComputedStyle(projectCards[0]).marginRight);
     sliderContainer.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
     
     // Update indicators
     indicators.forEach((indicator, index) => {
         if (index === currentIndex) {
             indicator.classList.add('active');
         } else {
             indicator.classList.remove('active');
         }
     });
 }
 
 // Event listeners for buttons
 prevBtn.addEventListener('click', () => {
     currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalSlides - 1;
     updateSlider();
 });
 
 nextBtn.addEventListener('click', () => {
     currentIndex = (currentIndex < totalSlides - 1) ? currentIndex + 1 : 0;
     updateSlider();
 });
 
 // Event listeners for indicators
 indicators.forEach((indicator, index) => {
     indicator.addEventListener('click', () => {
         currentIndex = index;
         updateSlider();
     });
 });
 
 // Automatic slider
 let sliderInterval = setInterval(() => {
     currentIndex = (currentIndex < totalSlides - 1) ? currentIndex + 1 : 0;
     updateSlider();
 }, 5000);
 
 // Pause automatic slider on hover
 sliderContainer.addEventListener('mouseenter', () => {
     clearInterval(sliderInterval);
 });
 
 sliderContainer.addEventListener('mouseleave', () => {
     sliderInterval = setInterval(() => {
         currentIndex = (currentIndex < totalSlides - 1) ? currentIndex + 1 : 0;
         updateSlider();
     }, 5000);
 });
 
 // Smooth scrolling for navigation
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
     anchor.addEventListener('click', function(e) {
         e.preventDefault();
         
         const targetId = this.getAttribute('href');
         const targetElement = document.querySelector(targetId);
         
         window.scrollTo({
             top: targetElement.offsetTop - 70,
             behavior: 'smooth'
         });
         
         // Close mobile menu if open
         hamburger.classList.remove('active');
         navLinks.classList.remove('active');
     });
 });