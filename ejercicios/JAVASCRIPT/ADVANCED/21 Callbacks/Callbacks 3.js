function repeatHello(callback) {
  const intervalId = setInterval(() => {
    callback();
  }, 1000);

  // Detener el intervalo después de 5 segundos
  setTimeout(() => {
    clearInterval(intervalId);
  }, 5000);
}

// Ejemplo de uso:
const helloCallback = () => {
  console.log("Hello");
};

repeatHello(helloCallback);
