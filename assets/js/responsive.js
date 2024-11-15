document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.querySelector('.navbar ul');

    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('nav-open');
    });
});