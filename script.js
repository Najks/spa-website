document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');

    function removeActiveClass() {
        navLinks.forEach(link =>{
            link.classList.remove('active');
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            removeActiveClass();
            link.classList.add('active');
        });
    });

    const currentPage = window.location.pathname.split('/').pop();
    navLinks.forEach(link => {
        if(link.getAttribute('href') === currentPage || link.getAttribute === '') {
            link.classList.add('active');            
        }
    });
});
AOS.init();
