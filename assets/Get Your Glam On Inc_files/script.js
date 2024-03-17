function toggleMenu() {
    var menu = document.querySelector('.nav-links');
    var hamburger = document.querySelector('.hamburger');

    if (menu.style.display === "flex") {
        menu.style.display = "none"; // Hide the navigation links
        hamburger.classList.remove('change'); // Change hamburger icon back to bars
    } else {
        menu.style.display = "flex"; // Show the navigation links
        hamburger.classList.add('change'); // Change hamburger icon to X
    }
}