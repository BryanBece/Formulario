function validarFormulario() {

    const rut = document.getElementById("rut");
    const nombre = document.getElementById("nombre");
    const apellidoPaterno = document.getElementById("apellido_paterno");
    const apellidoMaterno = document.getElementById("apellido_materno");
    const edad = document.getElementById("edad");
    const genero = document.getElementById("genero");
    const celular = document.getElementById("celular");
    const profesion = document.getElementById("profesion");
    const motivacion = document.getElementById("motivacion");

    // validacion rut
    if (rut.value.length < 9 || rut.value.length > 10) {
        rut.classList.add("is-invalid");
        rut.classList.remove("is-valid");
    } else {
        rut.classList.add("is-valid");
        rut.classList.remove("is-invalid");
    }
    // valicacion nombre
    if (nombre.value.length < 3 || nombre.value.length > 20) {
        nombre.classList.add("is-invalid");
        nombre.classList.remove("is-valid");
    } else {
        nombre.classList.add("is-valid");
        nombre.classList.remove("is-invalid");
    }
    // valicacion apellido paterno
    if (apellidoPaterno.value.length < 3 || apellidoPaterno.value.length > 20) {
        apellidoPaterno.classList.add("is-invalid");
        apellidoPaterno.classList.remove("is-valid");
    } else {
        apellidoPaterno.classList.add("is-valid");
        apellidoPaterno.classList.remove("is-invalid");
    }
    // valicacion apellido materno
    if (apellidoMaterno.value.length < 3 || apellidoMaterno.value.length > 20) {
        apellidoMaterno.classList.add("is-invalid");
        apellidoMaterno.classList.remove("is-valid");
    } else {
        apellidoMaterno.classList.add("is-valid");
        apellidoMaterno.classList.remove("is-invalid");
    }
    // validacion edad
    if (edad.value < 18 || edad.value > 35) {
        edad.classList.add("is-invalid");
        edad.classList.remove("is-valid");
    } else {
        edad.classList.add("is-valid");
        edad.classList.remove("is-invalid");
    }
    // validacion genero
    if (genero.value === "Seleccione Género") {
        genero.classList.add("is-invalid");
        genero.classList.remove("is-valid");
    } else {
        genero.classList.add("is-valid");
        genero.classList.remove("is-invalid");
    }
    // validacion celular
    if ( isNaN(celular.value) ||celular.value.length < 9 || celular.value.length > 12) {
        celular.classList.add("is-invalid");
        celular.classList.remove("is-valid");
    } else {
        celular.classList.add("is-valid");
        celular.classList.remove("is-invalid");
    }
    // validacion profesion
    if (profesion.value === "") {
        profesion.classList.add("is-invalid");
        profesion.classList.remove("is-valid");
    } else {
        profesion.classList.add("is-valid");
        profesion.classList.remove("is-invalid");
    }
    // validacion motivacion
    if (motivacion.value === "") {
        motivacion.classList.add("is-invalid");
        motivacion.classList.remove("is-valid");
    } else {
        motivacion.classList.add("is-valid");
        motivacion.classList.remove("is-invalid");
    }


    const camposInvalidos = document.getElementsByClassName("is-invalid");
    if (camposInvalidos.length > 0) {
        alert(
            "Hay campos inválidos en el formulario. Por favor, corrígelos y vuelve a intentarlo."
        );
        return false;
    } else {
        return true;
    }
}

function generarCarta() {
    if (validarFormulario()) {
        const rut = document.getElementById("rut").value;
        const nombre = document.getElementById("nombre").value;
        const apellidoPaterno = document.getElementById("apellido_paterno").value;
        const apellidoMaterno = document.getElementById("apellido_materno").value;
        const edad = document.getElementById("edad").value;
        const genero = document.getElementById("genero").value;
        const celular = document.getElementById("celular").value;
        const profesion = document.getElementById("profesion").value;
        const motivacion = document.getElementById("motivacion").value;

        const carta = `Estimados Señores de Chile Limpio:
  
  Me dirijo a ustedes con el fin de expresar mi interés en postular al puesto de Apoyo Ambiental Para Chiloé.
  
  Soy ${nombre} ${apellidoPaterno} ${apellidoMaterno}, con RUT ${rut}, y me considero una persona proactiva, responsable y con ganas de aprender. 
  Actualmente me desempeño como ${profesion}.
  
  Mi motivacion por el cargo es: ${motivacion}
  
  Espero tener la oportunidad de ser considerado/a para este puesto y poder aportar mis habilidades y conocimientos al equipo. Quedo atento/a a su respuesta.
  
  Agradeciendo su atención, les saluda atentamente,
  
  ${nombre} ${apellidoPaterno} ${apellidoMaterno}
  Edad: ${edad}
  Género: ${genero}
  Celular: ${celular}`;
        document.getElementById("carta").value = carta;
    }
}


function envioFormulario(){
    if (validarFormulario()) {
        const nombre = document.getElementById("nombre").value;
        const apellidoPaterno = document.getElementById("apellido_paterno").value;
        const mensaje = `Estimado/a ${nombre} ${apellidoPaterno}, su solicitud fue enviada con éxito.
        Nos contactaremos con usted a la brevedad.`;
        alert(mensaje);
    }
}

