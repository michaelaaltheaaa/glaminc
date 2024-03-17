document.addEventListener("DOMContentLoaded", function() {
    // Check if the device is a mobile device (e.g., screen width less than or equal to 768 pixels)
    if (window.innerWidth <= 768) {
        // Get the element representing the "home" section
        var aboutSection = document.getElementById("home");

        // Scroll to the "About" section
        aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });

        // Adjust hero image size for better visibility on mobile devices
        var heroImage = document.getElementById("hero-image");
        home.style.maxWidth = "100%"; // Set maximum width to 100% to ensure it fits within the viewport width
        home.style.height = "auto"; // Allow the height to adjust proportionally based on the width
    }
});

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
