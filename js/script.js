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

function CarruselPromociones() {
    const contenedorPromociones = document.querySelector(".promociones");
    const promociones = contenedorPromociones.children;
    let direccion = 1;

    for (let index = 0; index < promociones.length; index++) {
        promociones[index].addEventListener("mouseover", () => { direccion = 0; });
        promociones[index].addEventListener("mouseout", () => { direccion = 1});
    }
    
    setInterval(() => {
        let scrollActual = contenedorPromociones.scrollLeft;
        const scrollMax = contenedorPromociones.scrollWidth - contenedorPromociones.clientWidth;
        // console.log(scrollActual, scrollMax)
        if (scrollActual >= scrollMax) {
            direccion = -1;
        } else if (scrollActual <= 0) {
            direccion = 1;
        }
        contenedorPromociones.scrollBy(direccion, 0);

    }, 16);
}

ColorBarra();
CarruselPromociones();