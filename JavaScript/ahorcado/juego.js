window.onload = function() {
  //Elementos ocultos
  document.getElementById("letras").style.display = "none";

  //Funcion random
  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  const palabras = [
    "Naranja",
    "Fresa",
    "Kiwi",
    "Tomate",
    "Albaricoque",
    "Anana",
    "Nectarina",
    "Manzana",
    "Membrillo"
  ];

  //Cantidad de palabras que hay en el array palabras:
  numeroDePalabras = palabras.length;

  //Numero aleatorio dentro del número de palabras
  numeroAleatorio = getRndInteger(0, numeroDePalabras);
  //Split la palabra en letras
  let largo = palabras[numeroAleatorio].length;

  letras = palabras[numeroAleatorio].split("");

  //Escribir un parrafo en el html

  //Comenzar juego: Haces click en el botón, este desaparece y aparecen los botones y las celdas vacías.
  document.getElementById("botonStart").addEventListener("click", start, false);

  function start() {
    //Ocultar elementos
    document.getElementById("botonStart").style.display = "none";
    document.getElementById("instrucciones").style.display = "none";

    //Mostrar elementos
    document.getElementById("letras").style.display = "block";

    creartabla();
  }
  function creartabla() {
    // Obtener la referencia del elemento body
    var body = document.getElementsByClassName("posicionletras")[0];

    // Crea un elemento <table> y un elemento <tbody>
    var tabla = document.createElement("table");
    var tblBody = document.createElement("tbody");

    // Crea las celdas
    // Crea las hileras de la tabla
    var hilera = document.createElement("tr");

    for (var j = 0; j < largo; j++) {
      // Crea un elemento <td> y un nodo de texto, haz que el nodo de
      // texto sea el contenido de <td>, ubica el elemento <td> al final
      // de la hilera de la tabla
      var celda = document.createElement("td");
      var textoCelda = document.createTextNode(letras[j]);
      celda.appendChild(textoCelda);
      hilera.appendChild(celda);
    }

    // agrega la hilera al final de la tabla (al final del elemento tblbody)
    tblBody.appendChild(hilera);

    // posiciona el <tbody> debajo del elemento <table>
    tabla.appendChild(tblBody);
    // appends <table> into <body>
    body.appendChild(tabla);
  }

  //Crear un array con 27 numeros (los numeros del id de cada Button)
  const array27 = [];
  i = 1;
  while (array27.push(i++) < 27);

  for (let index = 0; index < array27.length; index++) {
    numeroLetra = array27[index];
    //Para conseguir el valor de cada boton:this.value
    document
      .getElementById("button" + numeroLetra)
      .addEventListener("click", buscarLetra, false);
  }

  function buscarLetra() {
    console.log("Has clicado la letra " + this.value);
    document.getElementById(this.id).disabled = true;
 
    for
    if (letras.indexOf(this.value) != -1) {
      console.log(letras.indexOf(this.value));
      alert("Correcto");
    } else {
      alert("Incorrecto");
    }
  }
};
