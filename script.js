document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const sections = document.querySelectorAll('section');

    // Toggle between light and dark mode
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            themeToggle.textContent = 'Cambiar a modo claro';
        } else {
            themeToggle.textContent = 'Cambiar a modo oscuro';
        }
    });

    // Function to reveal sections with animation
    const revealSections = () => {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const revealPoint = 150;

            if (sectionTop < window.innerHeight - revealPoint) {
                section.classList.add('visible');
            } else {
                section.classList.remove('visible');
            }
        });
    };

    // Reveal sections on scroll
    window.addEventListener('scroll', revealSections);

    // Initial reveal
    revealSections();
});
