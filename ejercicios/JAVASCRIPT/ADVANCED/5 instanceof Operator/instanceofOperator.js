class Square {
  constructor(side) {
    this.side = side;
  }
}

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
}

class AreaCalculator {
    static area (figura) {
        if (figura instanceof Square) {
            return figura.side * figura.side;
        }
        else if (figura instanceof Rectangle) {
            return figura.width * figura.height;
        }
        else if (figura instanceof Circle) {
            return Math.PI * figura.radius * figura.radius;
        }
        else {
            console.log("Figura geometrica invalida")
        }
    }
}

const square = new Square(4);
const rectangle = new Rectangle(4, 2);
const circle = new Circle(5);

console.log(AreaCalculator.area(square));
console.log(AreaCalculator.area(rectangle));
console.log(AreaCalculator.area(circle));
