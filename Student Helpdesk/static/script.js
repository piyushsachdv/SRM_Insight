// Preloader animation
window.addEventListener('load', () => {
    document.getElementById('preloader').style.display = 'none';
});

// Scroll-triggered animations
const animatedElements = document.querySelectorAll('.scroll-animation');

window.addEventListener('scroll', () => {
    animatedElements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
});

// Form submit success message
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();  // Prevent default form submission
        alert('Your message has been sent successfully!');
        form.reset();  // Reset form fields
    });
});
