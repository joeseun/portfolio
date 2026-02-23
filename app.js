// Typing Animation
const text = "Building Secure, Automated & Resilient Cloud Infrastructure.";
let index = 0;
function typeEffect(){
  if(index < text.length){
    document.querySelector(".typing").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 40);
  }
}
typeEffect();

// Counter Animation
const counters = document.querySelectorAll(".counter");
counters.forEach(counter=>{
  const updateCount = ()=>{
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;
    const increment = target / 100;
    if(count < target){
      counter.innerText = Math.ceil(count + increment);
      setTimeout(updateCount,20);
    } else {
      counter.innerText = target;
    }
  };
  updateCount();
});

// Fade Sections
const sections = document.querySelectorAll(".fade-section");
const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.style.opacity=1;
      entry.target.style.transform="translateY(0)";
    }
  });
},{threshold:0.2});

sections.forEach(sec=>{
  sec.style.opacity=0;
  sec.style.transform="translateY(40px)";
  sec.style.transition="all 0.8s ease";
  observer.observe(sec);
});

// Copy Email
document.getElementById("copy-email").addEventListener("click",()=>{
  const email=document.getElementById("email").innerText;
  navigator.clipboard.writeText(email);
  alert("Email copied!");
});

// ========== GitHub API Integration ==========
fetch("https://api.github.com/users/YOUR_GITHUB_USERNAME/repos?sort=updated")
  .then(res=>res.json())
  .then(data=>{
    const container=document.getElementById("github-projects");
    data.slice(0,6).forEach(repo=>{
      const div=document.createElement("div");
      div.classList.add("project-card");
      div.innerHTML=`
        <h3>${repo.name}</h3>
        <p>${repo.description || "No description provided."}</p>
        <a href="${repo.html_url}" target="_blank">View Repository →</a>
      `;
      container.appendChild(div);
    });
  });