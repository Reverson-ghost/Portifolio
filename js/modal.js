document.addEventListener("DOMContentLoaded", () => {
  const carouselOverlay = document.getElementById("carouselOverlay");
  const carouselImage = document.getElementById("carouselImage");
  const infoModal = document.getElementById("infoModal");

  let currentImageIndex = 0;
  let images = [];

  // Função para abrir modais
  function openModal(type, data) {
    if (type === "carousel") {
      images = JSON.parse(data.images || "[]");
      if (images.length > 0) {
        currentImageIndex = 0;
        carouselImage.src = images[currentImageIndex];
        carouselOverlay.style.display = "flex";
      }
    } else if (type === "info") {
      document.getElementById("modalTitle").textContent = data.title;
      document.getElementById("modalDescription").textContent = data.description;
      const modalFeatures = document.getElementById("modalFeatures");
      modalFeatures.innerHTML = data.features.map((f) => `<li>${f}</li>`).join("");
      infoModal.style.display = "flex";
    }
  }

  // Função para fechar modais
  function closeModal(modal) {
    modal.style.display = "none";
  }

  // Função para atualizar a imagem do carrossel
  function updateCarouselImage(direction = 0) {
    if (images.length > 0) {
      currentImageIndex = (currentImageIndex + direction + images.length) % images.length;
      carouselImage.src = images[currentImageIndex];
    }
  }

  // Delegação de eventos
  document.body.addEventListener("click", (e) => {
    const target = e.target;

    // Clique em uma miniatura (thumbnail)
    if (target.classList.contains("thumbnail")) {
      const container = target.closest(".image-container");
      openModal("carousel", {
        images: container.getAttribute("data-images"),
      });
    }

    // Clique no botão "Ver Projeto"
    if (target.classList.contains("view-more")) {
      const container = target.closest(".card-projetos");
      const projectData = container.querySelector(".image-container");
      openModal("info", {
        title: projectData.getAttribute("data-title"),
        description: projectData.getAttribute("data-description"),
        features: JSON.parse(projectData.getAttribute("data-features") || "[]"),
      });
    }

    // Fechar modais
    if (target.matches(".close-btn, #carouselOverlay")) {
      closeModal(target.closest(".carousel-overlay") || infoModal);
    }

    // Navegação do carrossel
    if (target.classList.contains("prev-btn")) updateCarouselImage(-1);
    if (target.classList.contains("next-btn")) updateCarouselImage(1);
  });
});
