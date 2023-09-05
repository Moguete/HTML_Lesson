function repeatHello(callback) {
  setInterval(() => {
    callback();
  }, 1000);
}

// Ejemplo de uso:
const helloCallback = () => {
  console.log("Hello");
};

repeatHello(helloCallback);
