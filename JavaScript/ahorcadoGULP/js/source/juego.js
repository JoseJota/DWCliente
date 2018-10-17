window.onload = function () {
  //Elementos ocultos
  document.getElementById("letras").style.display = "none";
  document.getElementById('botonReiniciar').style.display = "none";
  document.getElementById("f1").style.display = "none";
  document.getElementById("f2").style.display = "none";
  document.getElementById("f3").style.display = "none";
  document.getElementById("f4").style.display = "none";
  document.getElementById("f5").style.display = "none";
  document.getElementById("f6").style.display = "none";
  document.getElementById("f7").style.display = "none";
  document.getElementById("f8").style.display = "none";


  //Funcion random
  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  const palabras = [
    "NARANJA",
    "FRESA",
    "KIWI"/*
    "TOMATE",
    "ALBARICOQUE",
    "ANANA",
    "NECTARINA",
    "MANZANA",
    "MEMBRILLO"*/
  ];

  //Cantidad de palabras que hay en el array palabras:
  numeroDePalabras = palabras.length;

  //Numero aleatorio dentro del número de palabras
  numeroAleatorio = getRndInteger(0, numeroDePalabras);
  //Split la palabra en letras
  let largo = palabras[numeroAleatorio].length;

  letras = palabras[numeroAleatorio].split("");

  //Crear String "AHORCADO"
  const stringAhorcado = ["A", "H", "O", "R", "C", "A", "D", "O"];
  let numFallos = 0;
  let numAciertos = 0;

  //Comenzar juego: Haces click en el botón, este desaparece y aparecen los botones y las celdas vacías.
  document.getElementById("botonStart").addEventListener("click", start, false);

  function start() {
    //Ocultar elementos
    document.getElementById("botonStart").style.display = "none";
    document.getElementById("instrucciones").style.display = "none";

    //Mostrar elementos
    document.getElementById("letras").style.display = "block";
    document.getElementById('botonReiniciar').style.display = "";


    document.getElementById('botonReiniciar').addEventListener('click', reiniciar, false);


    creartabla();
  }
  function creartabla() {
    // Obtener la referencia del elemento
    var body = document.getElementById("divjuego");

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
      celda.setAttribute("id", "td" + j);
      var textoCelda = document.createTextNode("-");
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
  function compruebaLetra() {

    document.getElementById(this.id).disabled = true;

    console.log(this.value);
    if (letras.includes(this.value)) {
      for (var i = 0; i < letras.length; i++) {
        //si coinciden se va al table
        if (letras[i] == this.value) {
          document.getElementById("td" + i).innerHTML = letras[i];
          numAciertos++;
          if (numAciertos == letras.length) {
            alert("¡Has ganado, la palabra era "+letras+ "!");
            reiniciar();

          }
        }
      }
    } else {
      numFallos++;
      //escribeAhorcado(numFallos);
      document.getElementById("f"+numFallos).style.display = "";
      console.log(numFallos)


      if (numFallos == 8) {
        alert("Has perdido, la palabra era " + letras);
        reiniciar();
      }

    }
  }
  //Crear un array con 27 numeros (los numeros del id de cada Button)
  const array27 = [];
  i = 1;
  while (array27.push(i++) < 27);

  for (let index = 0; index < array27.length; index++) {
    numeroLetra = array27[index];
    //Para conseguir el valor de cada boton:this.value
    document.getElementById("button" + numeroLetra).addEventListener("click", compruebaLetra, false);
  }

  function reiniciar() {
    window.location.reload();
  }
}