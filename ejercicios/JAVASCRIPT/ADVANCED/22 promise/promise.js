const number = 15;

const myPromise = new Promise((resolve, reject) => {
  if (number > 10) {
    resolve("El número es mayor que 10.");
  } else {
    reject("El número no es mayor que 10.");
  }
});

myPromise
  .then((message) => {
    console.log("Éxito: " + message);
  })
  .catch((error) => {
    console.error("Error: " + error);
  });