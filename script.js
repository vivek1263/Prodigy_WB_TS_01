document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.querySelector('.navbar');
    const menuItems = document.querySelectorAll('.menu-item a');

    // Change navbar background color on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = '#003366';
        } else {
            navbar.style.backgroundColor = 'linear-gradient(to right, #0066ff, #00ccff)';
        }
    });

    // Add hover effect for menu items
    menuItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.color = '#ffcc00';
        });
        item.addEventListener('mouseout', () => {
            item.style.color = 'white';
        });
    });
});
