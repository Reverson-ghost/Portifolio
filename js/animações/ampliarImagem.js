function expandImage(img) {
    const overlay = document.getElementById("overlay");
    const expandedImage = document.getElementById("expandedImage");
    
    expandedImage.src = img.src;  // Usa a mesma imagem
    overlay.style.display = "flex"; // Exibe o overlay
  }
  
  function closeImage() {
    const overlay = document.getElementById("overlay");
    overlay.style.display = "none"; // Oculta o overlay
  }
  