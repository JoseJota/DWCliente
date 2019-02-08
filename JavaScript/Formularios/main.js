window.onload = function(){
    //Llamamos al boton
    enviar = document.getElementById("enviar");
    enviar.addEventListener("click", validacion, false);

    //Container
    form = document.getElementById("form");

    //Eventos de la contraseña
    password1 = document.getElementById("pass1");
    password2 = document.getElementById("pass2");

    password1.addEventListener("input", validacion, false); 
    password2.addEventListener("input", validacion, false);

    //Eventos de la Fecha
    fechaInicio = document.getElementById("fecha");
    fechaActual = new Date();
    fechaI = fechaInicio.value.split("/");
    fechaIni = new Date(fechaI[2], fechaI[1] -1, fechaI[0] );

    //Eventos del CP
    cp = document.getElementById("codigoPostal");

}

//Funcion Flecha
function validacion() {
    fails = 0;

    //Datos Personales
    //Comprobar las contraseñas
    if (password1.value !== password2.value) {
        password2.setCustomValidity('Las contraseñas no coinciden');
        fails ++;
    }else{
        password2.setCustomValidity('');
    }

    //Comprobar Fecha	
    if (fechaActual > fechaInicio) {
        fechaInicio.setCustomValidity('El año no puede ser menor');
        fails++;
    }else{
        fechaInicio.setCustomValidity('');
    }

    //Comprobar Codigo Postal
    if (!cp_valido(cp.value)) {
        cp.setCustomValidity('Codigo postal no es correcto');
        fails++;
    }

    //validacion de CP
    function cp_valido(valor) {
        const patt = /^\d{5}$/;
        if (patt.test(valor)) {
            return true;
        } else {
            return false;
        }
    }

    enviarForm();

    //Mensaje de formulario enviado
    function enviarForm() {
        if (fails == 0) {
            document.getElementById("correcto").innerHTML = "Correcto";
        } else{
            document.getElementById("correcto").innerHTML = "Error";
        }
    }

}