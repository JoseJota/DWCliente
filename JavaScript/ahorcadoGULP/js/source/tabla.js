import Juego from "./juego";

export default class Tabla extends Juego {
    constructor(len) {
        this.len = len;
    }

    crearTabla() {
        const contenedor = document.getElementById("contenedorLetras");
        let tabla = document.createElement("table");
        let tblBody = document.createElement("tbody");
        for (let i = 0; i < 1; i++) {
            let filas = document.createElement("tr");
            for (let j = 0; j < this.len; j++) {
                let celda = document.createElement("td");
                celda.id = "celdaAcierto" + j;
                celda.innerHTML = "_ ";
                filas.appendChild(celda);
            }
            tabla.appendChild(filas);
            tblBody.appendChild(tabla);

            contenedor.appendChild(tblBody);
        }
    }

    crearTablaAhorcado() {
        const contenedor = document.getElementById("contenedorAhorcado");
        let tabla = document.createElement("table");
        let tblBody = document.createElement("tbody");

        for (let i = 0; i < 1; i++) {
            let filas = document.createElement("tr");
            for (let j = 0; j < 8; j++) {
                let celdas = document.createElement("td");
                celdas.id = "ahorcado" + j;
                //celdas.innerHTML = "*";

                filas.appendChild(celdas);
            }
            tabla.appendChild(filas);
            tblBody.appendChild(tabla);

            contenedor.appendChild(tblBody);
        }
    }
}