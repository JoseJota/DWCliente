window.onload = function() {
  //Elementos ocultos
  document.getElementById("juego").style.display = "none";

  document
    .getElementById("botonComenzar")
    .addEventListener("click", start, false);

  //funcion para obtener el valor del RadioButton
  function getRadioButtonSelectedValue(ctrl) {
    for (i = 0; i < ctrl.length; i++) if (ctrl[i].checked) return ctrl[i].value;
  }

  function start() {
    //Ocultar instrucciones
    document.getElementById("arriba").style.display = "none";

    //Mostrar pantalla de juego
    document.getElementById("juego").style.display = "block";

    seleccionDificultad();
    creartabla();
  }
  function seleccionDificultad() {
    //Establece el tamaño de la tabla según la dificultad elegida
    let dificultad = getRadioButtonSelectedValue(
      document.selectorDif.dificultad
    );
    //let dificultad= document.getElementById("dificultadPrincipiante").value;
    console.log(dificultad);

    if (dificultad == "principiante") {
      let largo = 8;
      const ancho = 8;
      const cantidadMinas = 10;
      creartabla(largo, ancho);
    } else if (dificultad == "intermedio") {
      const largo = 16;
      const ancho = 16;
      const cantidadMinas = 40;
      creartabla(largo, ancho);
    } else if (dificultad == "experto") {
      const largo = 16;
      const ancho = 30;
      const cantidadMinas = 99;
      creartabla(largo, ancho);
    } else {
      let largo = 8;
      const ancho = 8;
      const cantidadMinas = 10;
      creartabla(largo, ancho);
    }
  }

  function creartabla(largo, ancho) {
    // Obtener la referencia del elemento
    var body = document.getElementsByClassName("juego")[0];

    // Crea un elemento <table> y un elemento <tbody>
    var tabla = document.createElement("table");
    var tblBody = document.createElement("tbody");

    // Crea las celdas
    for (var i = 0; i < largo; i++) {
      // Crea las hileras de la tabla
      var hilera = document.createElement("tr");

      for (var j = 0; j < ancho; j++) {
        // Crea un elemento <td> y un nodo de texto, haz que el nodo de
        // texto sea el contenido de <td>, ubica el elemento <td> al final
        // de la hilera de la tabla
        var celda = document.createElement("td");
        celda.id = i + " " + j;
        var textoCelda = document.createTextNode("maw");
        celda.appendChild(textoCelda);
        hilera.appendChild(celda);
      }

      // agrega la hilera al final de la tabla (al final del elemento tblbody)
      tblBody.appendChild(hilera);
    }
    // posiciona el <tbody> debajo del elemento <table>
    tabla.appendChild(tblBody);
    // appends <table> into <body>
    body.appendChild(tabla);
  }
};
