window.onload = function() {
  const galeria = document.getElementById("galeria");
  const clasif = document.getElementById("clasif");
  let slider = document.getElementById("slider");
  const subtitulo = document.getElementById("subtitulo");
  subtitulo.innerHTML = "Galería";
  let imgIndex = 1;

  slider.style.backgroundImage = "url(img_" + parseInt(imgIndex) + ".jpg)";

  var irGaleria = document.getElementById("irGaleria");
  irGaleria.addEventListener("click", muestraGaleria, false);
  var irClasif = document.getElementById("irClasif");
  irClasif.addEventListener("click", muestraClasificacion, false);

  var siguienteFoto = document.getElementById("siguienteFoto");
  siguienteFoto.addEventListener("click", pasafotos, false);
  var anteriorFoto = document.getElementById("anteriorFoto");
  anteriorFoto.addEventListener("click", pasafotos, false);
  anteriorFoto.disabled = true;

  function muestraGaleria(e) {
    clasif.style.display = "none";
    galeria.style.display = "block";
    subtitulo.innerHTML = "Galería";
  }

  function muestraClasificacion(e) {
    clasif.style.display = "block";
    galeria.style.display = "none";
    subtitulo.innerHTML = "Clasificación";
  }

  function pasafotos() {
	anteriorFoto.disabled = false;
	siguienteFoto.disabled = false;
    console.log(imgIndex);
    console.log(this.innerHTML);
    if (this.innerHTML == "Anterior") {
		imgIndex--;
      if (imgIndex == 1) {
		anteriorFoto.disabled = true;
		slider.style.backgroundImage ="url(img_" + parseInt(imgIndex) + ".jpg)";

      } else {
        //if (pic > 1)
        slider.style.backgroundImage ="url(img_" + parseInt(imgIndex) + ".jpg)";
        
	  }
	}

      if (this.innerHTML == "Siguiente") {
		imgIndex++;
        if (imgIndex == 4) {
			siguienteFoto.disabled = true;
			slider.style.backgroundImage ="url(img_" + parseInt(imgIndex) + ".jpg)";
        } else {
          slider.style.backgroundImage ="url(img_" + parseInt(imgIndex) + ".jpg)";
          
        }
	  }
    }
  
  function actualizaListaGanadores() {
    var ganadores = new Array(
      new Array(
        new Array("10K-Junior1", "10K-Junior2", "10K-Junior3"),
        new Array("10K-Senior1", "10K-Senior2", "10K-Senior3"),
        new Array("10K-Veteranos1", "10K-Veteranos2", "10K-Veteranos3")
      ),
      new Array(
        new Array("M-Junior1", "M-Junior2", "M-Junior3"),
        new Array("M-Senior1", "M-Senior2", "M-Senior3"),
        new Array("M-Veteranos1", "M-Veteranos2", "M-Veteranos3")
      )
    );
  }
};
