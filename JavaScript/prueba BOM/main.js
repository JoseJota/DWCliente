window.onload = function() {
    document.getElementById("abrir").addEventListener('click', abrir,false);
    document.getElementById("nameparametros").addEventListener('click', abrirParametros,false);
    document.getElementById("mostraralerta").addEventListener('click', mostrarAlerta,false);
    document.getElementById("confirmar").addEventListener('click', confirmar,false);
    document.getElementById("cargarcadena").addEventListener('click', cargarCadena,false);


  function abrir() {
    var ventana = open();
    ventana.document.write("Estoy escribiendo en la nueva ventana<br>");
    ventana.document.write("Segunda linea");
  }

  function abrirParametros() {
    var ventana = open("", "", "status=yes,width=400,height=250,menubar=yes");
    ventana.document.write("Esto es lo primero que aparece<br>");
  }

  function mostrarAlerta() {
    alert("Esta ventana de alerta ya la utilizamos en otros problemas.");
  }

  function confirmar() {
    var respuesta = confirm("Presione alguno de los dos botones");
    if (respuesta == true) alert("presionó aceptar");
    else alert("presionó cancelar");
  }

  function cargarCadena() {
    var cad = prompt("cargue una cadena:", "");
    alert("Usted ingreso " + cad);
  }
};
