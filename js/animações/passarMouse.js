// script.js/*
document.addEventListener("mousemove", (e) => {
    createParticle(e.clientX, e.clientY);
  });
  
  function createParticle(x, y) {
    const particle = document.createElement("div");
    particle.classList.add("particle");
    document.getElementById("particles").appendChild(particle);
  
    // Define a posição inicial da partícula
    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;
  
    // Remove a partícula após a animação
    particle.addEventListener("animationend", () => {
      particle.remove();
    });
  }
  