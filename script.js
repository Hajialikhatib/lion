document.addEventListener("DOMContentLoaded", function () {
    // Kuweka 'Active' Class kwenye Menyu kulingana na ukurasa ulipo
    const currentLocation = location.pathname.split("/").pop();
    const menuItems = document.querySelectorAll('.nav-links a');

    menuItems.forEach(item => {
        if (item.getAttribute('href') === currentLocation || (currentLocation === '' && item.getAttribute('href') === 'index.html')) {
            item.classList.add('active');
        }
    });

    // Hero background slideshow
    const heroSlides = document.querySelectorAll('.hero-slide');

    if (heroSlides.length > 1) {
        let activeIndex = 0;

        setInterval(() => {
            activeIndex = (activeIndex + 1) % heroSlides.length;
            heroSlides.forEach((slide, index) => {
                slide.classList.toggle('active', index === activeIndex);
            });
        }, 4000);
    }
});
