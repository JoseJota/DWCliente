window.onload = function() {
  let puntuacion = 0;
  let scoreBox = document.getElementById("puntuacion");
document.getElementById("mensajeFinal");

  div1.addEventListener("dragover", allowDrop);
  div1.addEventListener("drop", drop);
  div2.addEventListener("dragover", allowDrop);
  div2.addEventListener("drop", drop);
  div3.addEventListener("dragover", allowDrop);
  div3.addEventListener("drop", drop);
  div4.addEventListener("dragover", allowDrop);
  div4.addEventListener("drop", drop);

  document.getElementById("imagen1").addEventListener("dragstart", drag);
  document.getElementById("imagen2").addEventListener("dragstart", drag);
  document.getElementById("imagen3").addEventListener("dragstart", drag);
  document.getElementById("imagen4").addEventListener("dragstart", drag);

  function allowDrop(ev) {
    ev.preventDefault();
  }
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  scoreBox.innerHTML = "Puntuacion: " + 0;
  function drop(ev) {
      ev.preventDefault();
      const data = ev.dataTransfer.getData("contenido");

      if ((data == 'imagen1') && (ev.target.id == 'div1')) {
          ev.target.appendChild(document.getElementById(data));
          alert('CORRECTO');
          puntuacion = puntuacion + 100;
      }
      if ((data == 'imagen2') && (ev.target.id == 'div2')) {
          ev.target.appendChild(document.getElementById(data));
          alert('CORRECTO');
          puntuacion = puntuacion + 100;
      }
      if ((data == 'imagen3') && (ev.target.id == 'div3')) {
          ev.target.appendChild(document.getElementById(data));
          alert('CORRECTO');
          puntuacion = puntuacion + 100;
      }
      if ((data == 'imagen4') && (ev.target.id == 'div4')) {
        ev.target.appendChild(document.getElementById(data));
        alert('CORRECTO');
        puntuacion = puntuacion + 100;
    }
      if (puntuacion > 0) {
          scoreBox.innerHTML = "Puntuacion: " + puntuacion;
      }
      if (puntuacion == 300) {
          document.getElementById("scoreBox").style.display = "none";
          document.getElementById("mensajeFinal").style.display = "block";
          document.getElementById("volver").style.display = "block";
      }
}
};
