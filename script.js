// This script is currently not strictly necessary because of `scroll-behavior: smooth` in the CSS,
// but it's here for browsers that might not support it and for future enhancements.
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
