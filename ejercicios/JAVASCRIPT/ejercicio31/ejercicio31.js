function sayHelloName(callback) {
  console.log("Hello");
  callback();
}

function printName() {
  console.log("Esteve");
}

sayHelloName(printName);
