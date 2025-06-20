// main.js

// Smooth scrolling behavior for internal nav links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href && href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
        // Let external links (mailto:, https:) behave normally
    });
});

// Back to top smooth scroll
document.querySelector('.back-to-top').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('#home').scrollIntoView({ behavior: 'smooth' });
});
