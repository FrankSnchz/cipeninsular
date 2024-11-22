document.addEventListener("scroll", () => {
    const header = document.getElementById("header");
  
    // Comprueba si el usuario se ha desplazado más de 50px
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });


  //-----------------SLIDES-------------------------
$(function () {
  $(".rslides").responsiveSlides({
    nav: true, // Activar los botones de navegación
    prevText: "❮", // Texto para el botón "anterior"
    nextText: "❯", // Texto para el botón "siguiente"
    pauseControls: false, // No pausar al hacer hover en controles
  });
});

