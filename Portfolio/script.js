/*
 * Portfolio Scripts (Dark Blue Theme)
 */

document.addEventListener('DOMContentLoaded', () => {

    // 1. Navigation Active State
    const currentLocation = location.href;
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        if (link.href === currentLocation) {
            link.classList.add('active');
        }
    });

    // 2. Typing Effect (Disabled)
    /* 
    const typingElement = document.querySelector('.typing-text span');
    ... (typing logic removed for static display)
    */

    // 3. Skill Bar Animation (Only on Skills Page)
    const skillBars = document.querySelectorAll('.skill-progress');
    if (skillBars.length > 0) {
        setTimeout(() => {
            skillBars.forEach(bar => {
                const width = bar.getAttribute('data-width');
                bar.style.width = width + '%';
            });
        }, 500);
    }

    // 4. Scroll Reveal Animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.glass-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });

    // Add 'visible' class styles dynamically
    const styleSheet = document.createElement("style");
    styleSheet.innerText = `
        .visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(styleSheet);
});
