// Particle animation
particlesJS.load('particles-js', 'particles.json', function() {
    console.log('callback - particles.js config loaded');
});

// Scroll to Top Button
const scrollToTopButton = document.querySelector('.scroll-to-top');
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
};

scrollToTopButton.onclick = function() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
};

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');
mobileMenuBtn.onclick = function() {
    navLinks.classList.toggle('active');
};

// Modal Functionality for Certificates
function openModal(imageSrc, title) {
    document.getElementById('modalImage').src = imageSrc;
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('certificateModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('certificateModal').style.display = 'none';
}
// JavaScript for typewriter effect
const designationText = document.querySelector('.designation-text');
const designations = [
    "Cybersecurity Expert",
    "Ethical Hacker",
    "Penetration Tester",
    "Security Consultant"
];

let currentIndex = 0;

function typeDesignation(text, index) {
    designationText.textContent = ''; // Clear previous text
    let charIndex = 0;

    const typeInterval = setInterval(() => {
        if (charIndex < text.length) {
            designationText.textContent += text.charAt(charIndex);
            charIndex++;
        } else {
            clearInterval(typeInterval);
            setTimeout(() => {
                eraseDesignation(text);
            }, 1000); // Pause before erasing
        }
    }, 100); // Typing speed (lower is faster)
}

function eraseDesignation(text) {
    let charIndex = text.length;

    const eraseInterval = setInterval(() => {
        if (charIndex > 0) {
            designationText.textContent = text.substring(0, charIndex - 1);
            charIndex--;
        } else {
            clearInterval(eraseInterval);
            currentIndex = (currentIndex + 1) % designations.length; // Move to the next designation
            setTimeout(() => {
                typeDesignation(designations[currentIndex], currentIndex);
            }, 500); // Pause before typing the next designation
        }
    }, 50); // Erasing speed (lower is faster)
}

// Start the typewriter effect with the first designation
typeDesignation(designations[currentIndex], currentIndex);

function changeDesignation() {
    currentIndex = (currentIndex + 1) % designations.length;
    designationText.textContent = designations[currentIndex];
}

// Change text every 5 seconds (or adjust to your desired timing)
setInterval(changeDesignation, 5000);
