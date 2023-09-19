const isLogged = true;

const firstPromise = new Promise((resolve, reject) => {
  if (isLogged) {
    const randomNum = Math.random();
    resolve(randomNum);
  } else {
    reject(new Error("Usuario no está autenticado"));
  }
});

function secondPromise(randomNum) {
  return new Promise((resolve, reject) => {
    if (randomNum > 0.5) {
      resolve({ name: "John", age: 24 });
    } else {
      reject(new Error("El número no es mayor que 0.5"));
    }
  });
}

firstPromise
  .then((randomNum) => {
    return secondPromise(randomNum);
  })
  .then((result) => {
    console.log(result); 
  })
  .catch((error) => {
    console.error(error.message); 
  })
  .finally(() => {
    console.log("Finalizado");
  });