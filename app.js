// Theme Toggle
const toggle = document.getElementById("theme-toggle");
toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    toggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// Copy Email
function copyEmail() {
    const email = document.getElementById("email").innerText;
    navigator.clipboard.writeText(email);
    alert("Email copied!");
}

// Reveal Animation
const reveals = document.querySelectorAll(".reveal");
function revealOnScroll() {
    const windowHeight = window.innerHeight;
    reveals.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < windowHeight - 100) {
            el.classList.add("active");
        }
    });
}
window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// Animate Skill Bars
const progressBars = document.querySelectorAll(".progress");
function animateSkills() {
    progressBars.forEach(bar => {
        const width = bar.getAttribute("data-width");
        bar.style.width = width;
    });
}
window.addEventListener("load", animateSkills);

// Hamburger Menu
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});