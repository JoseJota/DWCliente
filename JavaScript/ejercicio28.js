window.onload = function() {
  document.getElementById("botonmostrar").onclick = mostrar;

  function mostrar() {
    var resultado = "";
    //var str1=document.getElementById("checkbox1").nodeType;
    var str1 = "Futbol ";
    var str2 = "Basket ";
    var str3 = "Tenis ";

    if (document.getElementById("checkbox1").checked) {
      resultado = resultado + str1;
    }
    if (document.getElementById("checkbox2").checked) {
      resultado = resultado + str2;
    }
    if (document.getElementById("checkbox3").checked) {
      resultado = resultado + str3;
    } else {
      resultado = "";
    }
    alert("Deportes: " + resultado);
  }
};
