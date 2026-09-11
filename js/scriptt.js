let menuVisible = false;
//Función que oculta o muestra el menú
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

// Envía el formulario de contacto sin abandonar la página
const formularioContacto = document.getElementById("formulario-contacto");
const mensajeFormulario = document.getElementById("mensaje-formulario");

formularioContacto.addEventListener("submit", async function(evento) {
    evento.preventDefault();

    const datosFormulario = new FormData(formularioContacto);

    mensajeFormulario.textContent = "Enviando mensaje...";
    mensajeFormulario.classList.add("visible");

    try {
        const respuesta = await fetch(formularioContacto.action, {
            method: "POST",
            body: datosFormulario,
            headers: {
                Accept: "application/json"
            }
        });

        if (!respuesta.ok) {
            throw new Error("No se pudo enviar el formulario");
        }

        mensajeFormulario.textContent = "Mensaje enviado correctamente.";
        mensajeFormulario.classList.add("visible");
        formularioContacto.reset();

    } catch (error) {
        mensajeFormulario.textContent = "No se pudo enviar el mensaje. Inténtalo nuevamente.";
        mensajeFormulario.classList.add("visible");
    }

    setTimeout(() => {
    mensajeFormulario.classList.remove("visible");
    }, 4000);
});