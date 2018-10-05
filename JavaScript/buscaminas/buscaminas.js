window.onload = function() {
  //Elementos ocultos
  document.getElementById("juego").style.display = "none";

  let ganado = false;
  let perdido = false;
  let idCeldasConMina = [];

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
    document.getElementById("juego").style.display = "";

    seleccionDificultad();
    creartabla();
  }
  function seleccionDificultad() {
    //Establece el tamaño de la tabla según la dificultad elegida
    let dificultad = getRadioButtonSelectedValue(
      document.selectorDif.dificultad
    );
    //let dificultad= document.getElementById("dificultadPrincipiante").value;
    if (dificultad == "principiante") {
      const largo = 8;
      const ancho = 8;
      const cantidadMinas = 10;
      creartabla(largo, ancho);
      ponerMinas(largo, ancho, cantidadMinas);
    } else if (dificultad == "intermedio") {
      const largo = 16;
      const ancho = 16;
      const cantidadMinas = 40;
      creartabla(largo, ancho);
      ponerMinas(largo, ancho, cantidadMinas);
    } else if (dificultad == "experto") {
      const largo = 16;
      const ancho = 30;
      const cantidadMinas = 99;
      creartabla(largo, ancho);
      ponerMinas(largo, ancho, cantidadMinas);
    } else {
      const largo = 8;
      const ancho = 8;
      const cantidadMinas = 10;
      creartabla(largo, ancho);
      ponerMinas(largo, ancho, cantidadMinas);
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
        celda.id = i + "-" + j;
        idCelda = i + "-" + j;
        var textoCelda = document.createTextNode("");
        celda.appendChild(textoCelda);
        hilera.appendChild(celda);

        document.getElementById(idCelda).addEventListener("click", celdaClic, false);
      }

      // agrega la hilera al final de la tabla (al final del elemento tblbody)
      tblBody.appendChild(hilera);
    }
    // posiciona el <tbody> debajo del elemento <table>
    tabla.appendChild(tblBody);
    // appends <table> into <body>
    body.appendChild(tabla);
  }

  function ponerMinas(largo, ancho, cantidadMinas) {
    celdaMina = "";
    oldCeldaMina = "";

    for (let index = 0; index < cantidadMinas; index++) {
      while (celdaMina == "" || celdaMina == oldCeldaMina) {
        let minaX = Math.floor(Math.random() * largo);
        let minaY = Math.floor(Math.random() * ancho);
        idMina = minaX + "-" + minaY;
        celdaMina = document.getElementById(idMina);
        //celdaMina.innerHTML="*";
        //document.getElementById(minaX+"-"+minaY).style.backgroundImage = "url('bombrevealed.gif')"
        celdaMina.style.backgroundColor = "red";

        //Meto las "celdas con regalito" en el array de "idCeldasConMina"
        idCeldasConMina[index] = idMina;
      }

      oldCeldaMina = celdaMina;
    }

    console.log(idCeldasConMina);
  }
  celdaClic = (e) => {
    e.target.id;
  }
};
