document.addEventListener("DOMContentLoaded", function() {
    // Check if the device is a mobile device (e.g., screen width less than or equal to 768 pixels)
    if (window.innerWidth <= 768) {
        // Get the element representing the "About" section
        var aboutSection = document.getElementById("about");

        // Scroll to the "About" section
        aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        
        // Zoom out on mobile devices
        document.body.style.zoom = "80%"; // Adjust the zoom level as needed
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
