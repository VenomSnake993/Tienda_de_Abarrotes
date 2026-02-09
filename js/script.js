function ColorBarra() {
    window.addEventListener("scroll", () => {
        const barraNavegacion = document.querySelector(".barra-navegacion");
        const posicionScroll = window.scrollY;

        if (posicionScroll) {
            barraNavegacion.classList.add("activar-color-barra-navegacion");
        } else {
            barraNavegacion.classList.remove("activar-color-barra-navegacion");
        }
    })
}

ColorBarra();