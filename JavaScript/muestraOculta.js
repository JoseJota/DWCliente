window.onload = function() {
    var enlaces = document.getElementsByTagName('a');
    for(i in enlaces) {
      enlaces[i].onclick = muestraOculta;
    }
    function muestraOculta() {
      var idEnlace = this.id;
      var trozos = idEnlace.split('_');
      var numero = trozos[1];
      var parrafo = document.getElementById('contenidos_' + numero);
  
      switch(parrafo.style.display) {
          case 'none':
              parrafo.style.display = 'block'
              this.innerHTML = 'Ocultar contenidos';
              break;
            case 'block':
            case '':
              parrafo.style.display = 'none';
              this.innerHTML = 'Mostrar contenidos';
              break;
      }
  }
}