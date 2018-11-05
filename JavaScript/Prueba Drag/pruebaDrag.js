window.onload = function() {
  const div1 = document.getElementById("div1");
  const div2 = document.getElementById("div2");
  const div3 = document.getElementById("div3");
  const div4 = document.getElementById("div4");

  const img1 = document.getElementById("imagen1");
  const img2 = document.getElementById("imagen2");
  const img3 = document.getElementById("imagen3");
  const img4 = document.getElementById("imagen4");

  div1.ondrop = drop;
  div1.ondragover = allowDrop;

  div2.ondrop = drop;
  div2.ondragover = allowDrop;

  div3.ondrop = drop;
  div3.ondragover = allowDrop;

  div4.ondrop = drop;
  div4.ondragover = allowDrop;

  img1.ondragstart = drag;
  img2.ondragstart = drag;
  img3.ondragstart = drag;
  img4.ondragstart = drag;
console.log(div1.hasChildNodes);
if(div1.hasChildNodes()){
console.log("Tiene ChildNodes");
}
  function allowDrop(ev) {
    ev.preventDefault();
  }
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }
};
