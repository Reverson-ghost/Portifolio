const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", function () {
  const searchTerm = searchInput.value.toLowerCase();
  const projects = document.querySelectorAll(".project-card");

  projects.forEach((project) => {
    const title = project.getAttribute("data-title").toLowerCase();
    if (title.includes(searchTerm)) {
      project.style.display = "block";
    } else {
      project.style.display = "none";
    }
  });
});

/*nao esquecer de adicionar o data-title="" nas imagens PARA FILTRAGEM */ 