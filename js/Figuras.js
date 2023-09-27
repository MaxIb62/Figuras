
class Poligono {
    constructor(lados) {
      this.lados = lados;
    }

    calcularPerimetro() {
      console.log("Este método debe ser implementado en las clases hijas.");
    }

    calcularArea() {
      console.log("Este método debe ser implementado en las clases hijas.");
    }
  }
  
  
  class Triangulo extends Poligono {
    constructor(lado) {
      super(3);
      this.lado = lado;
    }
  
   
    calcularPerimetro() {
      return this.lado * 3;
    }
  

    calcularArea() {
      
      return (Math.sqrt(3) / 4) * Math.pow(this.lado, 2);
    }
  }
  
 
  class Cuadrado extends Poligono {
    constructor(lado) {
      super(4); 
      this.lado = lado;
    }

    calcularPerimetro() {
      return this.lado * 4;
    }
  
    calcularArea() {
      return Math.pow(this.lado, 2);
    }
  }
  

  class Pentagono extends Poligono {
    constructor(lado) {
      super(5); 
      this.lado = lado;
    }
  
  
    calcularPerimetro() {
      return this.lado * 5;
    }
  
   
    calcularArea() {

      return (5 / 4) * Math.pow(this.lado, 2) * (1 / Math.tan(Math.PI / 5));
    }
  }
  
  // Ejemplo de uso
  const ladoTriangulo = 5;
  const ladoCuadrado = 4;
  const ladoPentagono = 6;
  
  const triangulo = new Triangulo(ladoTriangulo);
  const cuadrado = new Cuadrado(ladoCuadrado);
  const pentagono = new Pentagono(ladoPentagono);
  
  console.log("Triángulo:");
  console.log("Perímetro:", triangulo.calcularPerimetro());
  console.log("Área:", triangulo.calcularArea());
  
  console.log("\nCuadrado:");
  console.log("Perímetro:", cuadrado.calcularPerimetro());
  console.log("Área:", cuadrado.calcularArea());
  
  console.log("\nPentágono:");
  console.log("Perímetro:", pentagono.calcularPerimetro());
  console.log("Área:", pentagono.calcularArea());
  