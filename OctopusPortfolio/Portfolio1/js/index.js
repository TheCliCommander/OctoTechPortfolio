// Get references to the navigation elements
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');
if (navToggle) {
    // Toggle mobile menu when hamburger icon is clicked
    navToggle.addEventListener('click', () => {
        console.log('hamburgled');//check to validate js functionality
        document.body.classList.toggle('.nav-open');
    });
};
// Close mobile menu when a navigation link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        console.log('something witty about a missing hamburger')
        document.body.classList.remove('.nav-open');
    });
});

// Banner element gradient animation
function changeText() {
    const textPairs = ['Multi-Disciplined', 'Development Operations', 'Linux Wise-Guy', 'Systems Analysis'];
    bannerText.innerHTML = textPairs[index];
    index = (index + 1) % textPairs.length;
    setTimeout(changeText, 2500);
}

function resetText() {
    bannerText.innerHTML = 'Multi-Disciplined';
    index = 0;
}

// Call the changeText function to start the animation
changeText();
