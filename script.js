
function toggleMenu() {
    var menu = document.querySelector('.nav-links');
    var hamburger = document.querySelector('.hamburger');

    if (menu.classList.contains('active')) {
        menu.classList.remove('active'); // Hide the navigation links
        hamburger.classList.remove('change'); // Change hamburger icon back to bars
    } else {
        menu.classList.add('active'); // Show the navigation links
        hamburger.classList.add('change'); // Change hamburger icon to X
    }
}
