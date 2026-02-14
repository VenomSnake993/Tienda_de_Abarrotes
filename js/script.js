function ColorBarra() {
    window.addEventListener("scroll", () => {
        const barraNavegacion = document.querySelector(".barra-navegacion");
        const posicionScroll = window.scrollY;
        let claseActivada = barraNavegacion.getAttribute("class").search("activar-color-barra-navegacion");

        if (posicionScroll && claseActivada == -1) {
            barraNavegacion.classList.add("activar-color-barra-navegacion");

        } else if (!posicionScroll) {
            barraNavegacion.classList.remove("activar-color-barra-navegacion");
        }
    })
}

ColorBarra();