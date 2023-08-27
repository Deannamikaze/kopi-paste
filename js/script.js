const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navbarNav');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
