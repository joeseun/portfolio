// Theme Toggle
const toggleBtn = document.getElementById("theme-toggle");
toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

// Mobile Menu
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

// Copy Email
document.getElementById("copy-email").addEventListener("click", () => {
    const email = document.getElementById("email").innerText;
    navigator.clipboard.writeText(email);
    alert("Email copied!");
});

// Fade-in Animation
const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
    threshold: 0.2
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

// Skill Bar Animation
const bars = document.querySelectorAll(".progress-bar");

const skillsObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.style.width = entry.target.dataset.width;
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

bars.forEach(bar => {
    skillsObserver.observe(bar);
});