window.onload = function() {
  var objeto = document.getElementById("rotating");
  var circuloRojo = document.getElementById("circuloRojo");
  var circuloVerde = document.getElementById("circuloVerde");
  var circuloAzul = document.getElementById("circuloAzul");
  var verRojo = true;
  var verVerde = true;
  var verAzul = true;
  var started = true;

  document.onkeydown = checkKey;
  let duracion = 0.5;

  function checkKey(e) {
    e.preventDefault();
    e = e || window.event;

    if (e.keyCode == 38) {
      // up arrow
      duracion = duracion / 1.5;
      objeto.style.animationDuration = duracion + "s";
      console.log(duracion);
    } else if (e.keyCode == "40") {
      // down arrow
      duracion = duracion * 1.5;
      objeto.style.animationDuration = duracion + "s";
      console.log("Duracion cambiada a: " + duracion);
    } else if (e.keyCode == "49") {
      // 1
      console.log("Botón 1");

      if (verRojo == true) {
        circuloRojo.style.display = "none";
        verRojo = false;
      } else if (verRojo == false) {
        circuloRojo.style.display = "block";
        verRojo = true;
      }
    } else if (e.keyCode == "50") {
      // 2
      console.log("Botón 2");

      if (verVerde == true) {
        circuloVerde.style.display = "none";
        verVerde = false;
      } else if (verVerde == false) {
        circuloVerde.style.display = "block";
        verVerde = true;
      }
    } else if (e.keyCode == "51") {
      // 3
      console.log("Botón 3");

      if (verAzul == true) {
        circuloAzul.style.display = "none";
        verAzul = false;
      } else if (verAzul == false) {
        circuloAzul.style.display = "block";
        verAzul = true;
      }
    } else if (e.keyCode == "88") {
      // down arrow
      if (started == true){
      duracion = 0;
      started = false;
      } else if (started == false){
          duracion = 0.5;
          started=true;
      }
      objeto.style.animationDuration = duracion + "s";

      console.log(duracion);
    }
  }
};
