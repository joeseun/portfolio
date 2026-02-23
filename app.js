/* ===============================
   DARK MODE TOGGLE
================================= */
const toggle = document.getElementById("theme-toggle");

toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        toggle.textContent = "☀️";
    } else {
        toggle.textContent = "🌙";
    }
});

/* ===============================
   MOBILE MENU TOGGLE
================================= */
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

/* Close mobile menu when clicking link */
document.querySelectorAll("#nav-menu a").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });
});

/* ===============================
   FADE-IN ON SCROLL
================================= */
const faders = document.querySelectorAll(".fade-in");

const fadeObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
    });
}, { threshold: 0.2 });

faders.forEach(fader => fadeObserver.observe(fader));

/* ===============================
   ANIMATE SKILL BARS
================================= */
const skillBars = document.querySelectorAll(".progress div");

const skillObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;

        const width = entry.target.getAttribute("data-width");
        entry.target.style.width = width;

        observer.unobserve(entry.target);
    });
}, { threshold: 0.5 });

skillBars.forEach(bar => skillObserver.observe(bar));

/* ===============================
   COPY EMAIL FUNCTION
================================= */
function copyEmail() {
    const email = document.getElementById("email").innerText;

    navigator.clipboard.writeText(email).then(() => {
        alert("Email copied to clipboard!");
    });
}