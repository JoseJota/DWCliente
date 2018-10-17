class Calculadora {
  constructor(x1, x2) {
    this.x1 = x1;
    this.x2 = x2;
    this.resultado = null;
  }

  sumar() {
    this.resultado = this.x1 + this.x2;
    document.write(`La suma de ${this.x1} y ${this.x2} es `);
    this.imprimir();
  }

  restar() {
    this.resultado = this.x1 - this.x2;
    document.write(`La resta de ${this.x1} y ${this.x2} es `);
    this.imprimir();      
  }

  multiplicar() {
    this.resultado = this.x1 * this.x2;
    document.write(`La multiplicación de ${this.x1} y ${this.x2} es `);
    this.imprimir();      
  }

  dividir() {
    this.resultado = this.x1 / this.x2;
    document.write(`La división de ${this.x1} y ${this.x2} es `);
    this.imprimir();      
  }

  imprimir() {
    document.write(this.resultado+'<br>');
  }
}

class CalculadoraCientifica extends Calculadora{
    cuadrado() {
      this.resultado = this.x1*this.x1;
      document.write(`El cuadrado de ${this.x1} es `);
      this.imprimir();
    }

    raiz(){
      this.resultado = Math.sqrt(this.x1);
      document.write("La raiz de "+ x1 +" es: ");
      this.imprimir();


    }
}

const calculadora1=new Calculadora(100, 20);
calculadora1.sumar();
calculadora1.restar();
calculadora1.multiplicar();
calculadora1.dividir();  

const calculadora2=new CalculadoraCientifica(3,7);
calculadora2.cuadrado();