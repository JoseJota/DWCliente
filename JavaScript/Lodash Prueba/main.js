window.onload = function() {
  let numeros = [];
  for (let index = 1; index < 12; index++) {
    let numeroAleatorio = _.random(1, 12);
    numeros.push(numeroAleatorio);

    var numerosUnicos = Array.from(new Set(numeros)); //Elimina los numeros repetidos
  }

  //Sin esta función solo compara el primer caracter (1,10,100,2,20,200).
  //Con esta funcion compara todo el número (1,2,10,20,100,200).
  function comparar(a, b) {
    return a - b;
  }
  numerosUnicos.sort(comparar); //Ordena el array

  let notas =["A","B","C","D","E","F","G"];
  document.getElementById("demo").innerHTML = numerosUnicos;
  console.log(numerosUnicos);
};
