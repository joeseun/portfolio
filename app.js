document.getElementById("copy-email").addEventListener("click", () => {
  navigator.clipboard.writeText(document.getElementById("email").innerText);
  alert("Copied!");
});

fetch("https://api.github.com/users/YOUR_GITHUB_USERNAME/repos?sort=updated")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("github-projects");
    data.slice(0,6).forEach(repo => {
      const card = document.createElement("div");
      card.classList.add("project-card");
      card.innerHTML = `
        <h3>${repo.name}</h3>
        <p>${repo.description || "No description"}</p>
        <a href="${repo.html_url}" target="_blank">View Repo →</a>
      `;
      container.appendChild(card);
    });
  });<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>Joe Ola | DevSecOps Engineer</title>
<link rel="stylesheet" href="style.css"/>
</head>
<body>

<header class="navbar">
  <div class="container">
    <h2 class="logo">Joe Ola</h2>
    <nav id="nav-menu">
      <a href="#about">About</a>
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </nav>
  </div>
</header>

<section class="hero">
  <div class="hero-content">
    <div class="hero-text">
      <h1>Hello, I'm Joe.</h1>
      <p class="hero-sub">DevSecOps Engineer building secure, scalable infrastructure.</p>
      <a href="#projects" class="btn-primary">View Work</a>
      <a href="Joe_Ola_Resume.pdf" download class="btn-secondary">Download Resume</a>
    </div>
    <div class="hero-image">
      <img src="profile.jpg" alt="Joe Ola Profile"/>
    </div>
  </div>
</section>

<section id="about" class="section clean-section">
  <div class="container">
    <h2>About Me</h2>
    <p>
      Experienced DevOps & DevSecOps engineer focused on cloud automation, CI/CD, and infrastructure security.
      I design resilient systems and efficient workflows that drive engineering velocity with safety in mind.
    </p>
  </div>
</section>

<section id="skills" class="section clean-section">
  <div class="container">
    <h2>Skills</h2>
    <div class="skills-list">
      <span>AWS</span> <span>Kubernetes</span> <span>Terraform</span> <span>CI/CD</span>
      <span>Monitoring</span> <span>Security Automation</span> <span>IaC</span>
    </div>
  </div>
</section>

<section id="projects" class="section clean-section">
  <div class="container">
    <h2>Projects</h2>
    <div id="github-projects" class="projects-grid"></div>
  </div>
</section>

<section id="contact" class="section clean-section">
  <div class="container">
    <h2>Contact</h2>
    <p>Email: <span id="email">j.joeseun@gmail.com</span></p>
    <button id="copy-email" class="btn-primary">Copy Email</button>
  </div>
</section>

<footer>
  <p>© 2026 Joe Ola</p>
</footer>

<script src="app.js"></script>
</body>
</html>