// import emailjs from "/@emailjs/browser";

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
    });
}

function EnviarCorreo() {
    const formulario = document.querySelector(".form-contacto");
    formulario.addEventListener("submit", (event) => {
        event.preventDefault();
        const datosFormulario = Object.fromEntries(new FormData(formulario));
        const nombrePersona = datosFormulario.nombreCompleto;
        const correo = datosFormulario.correo;
        const asunto = datosFormulario.asunto;
        const mensaje = datosFormulario.mensaje;

        const parametrosCorreo = {
            name: nombrePersona,
            email: correo,
            title: asunto,
            message: mensaje
        };

        emailjs.init({ publicKey: "q3nXe68EI_Jlh8yMg" });
        emailjs.send("gmail_service_abarrotes", "template_lpj89n3", parametrosCorreo)
            .then((response) => {
                console.log("SUCCESS!", response.status, response.text);
                formulario.reset();
                alert("Correo enviado correctamente, te tendremos en cuenta, GRACIAS. 💖");
            },
                (error) => {
                    console.log("FAILED...", error);
                    alert("Error al enviar el correo, por favor intenta nuevamente. 😔");
                });
    });
}
EnviarCorreo();
ColorBarra();