// THEME TOGGLE
const toggle = document.getElementById("theme-toggle");
toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    toggle.textContent =
        document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// MOBILE MENU
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

// SMOOTH SCROLL
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
    });
});

// FADE-IN ANIMATION
const faders = document.querySelectorAll(".fade-in");

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
    });
}, { threshold: 0.2 });

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

// ANIMATED SKILL BARS
const skills = document.querySelectorAll(".progress div");

const skillObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.width =
                entry.target.getAttribute("data-width");
        }
    });
}, { threshold: 0.5 });

skills.forEach(skill => {
    skillObserver.observe(skill);
});

// COPY EMAIL
function copyEmail() {
    const email = document.getElementById("email").innerText;
    navigator.clipboard.writeText(email);
    alert("Email copied to clipboard!");
}