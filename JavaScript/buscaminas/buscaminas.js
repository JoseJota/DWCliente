window.onload = function() {
  //Elementos ocultos
  document.getElementById("juego").style.display = "none";

  let idCeldasConMina = [];
  let idCelda = "";
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
      tabla = new Tabla(8, 8, 10);
    } else if (dificultad == "intermedio") {
      tabla = new Tabla(16, 16, 40);
    } else if (dificultad == "experto") {
      tabla = new Tabla(16, 30, 99);
    } else {
      tabla = new Tabla(8, 8, 10);
    }
    tabla.creartabla();
    tabla.ponerMinas();
  }

  class Tabla {
    constructor(alto, ancho, cantidadMinas) {
      this.alto = alto;
      this.ancho = ancho;
      this.cantidadMinas = cantidadMinas;
    }
    creartabla() {
      // Obtener la referencia del elemento
      var body = document.getElementsByClassName("juego")[0];

      // Crea un elemento <table> y un elemento <tbody>
      var tabla = document.createElement("table");
      var tblBody = document.createElement("tbody");

      // Crea las celdas
      for (var i = 0; i < this.alto; i++) {
        // Crea las hileras de la tabla
        var hilera = document.createElement("tr");

        for (var j = 0; j < this.ancho; j++) {
          // Crea un elemento <td> y un nodo de texto, haz que el nodo de
          // texto sea el contenido de <td>, ubica el elemento <td> al final
          // de la hilera de la tabla
          var celda = document.createElement("td");
          celda.id = i + "-" + j;

          console.log(idCelda);
          var textoCelda = document.createTextNode("");
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
    ponerMinas() {
      let celdaMina = "";
      let idMina = "";
      for (let index = 0; index < this.cantidadMinas; index++) {
        let minaX = Math.floor(Math.random() * this.ancho);
        let minaY = Math.floor(Math.random() * this.alto);
        idMina = minaX + "-" + minaY;
        celdaMina = document.getElementById(idMina);
        //celdaMina.innerHTML="*";
        //document.getElementById(minaX+"-"+minaY).style.backgroundImage = "url('bombrevealed.gif')"
        celdaMina.style.backgroundColor = "red";

        //OLD Meto las "celdas con regalito" en el array de "idCeldasConMina"
        idCeldasConMina[index] = idMina;
      }
    }
  }
};
