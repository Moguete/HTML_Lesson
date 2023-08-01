function Smartphone(brand, name, price) {
    this.brand = brand;
    this.name = name;
    this.price = price;
}

let iphone14 = new Smartphone("Apple", "Iphone 14", "1400€");
let nokian95 = new Smartphone("Nokia", "N95", "15€ de tercera mano");

console.log(iphone14)
console.log(nokian95)