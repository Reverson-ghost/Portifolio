document.querySelectorAll("details").forEach(detail => {
    detail.addEventListener("toggle", event => {
      if (detail.open) {
        detail.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
  /*
  ajustes para os acordions
  */