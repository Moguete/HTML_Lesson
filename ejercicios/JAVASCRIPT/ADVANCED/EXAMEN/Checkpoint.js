// Write a function that takes an array of strings as a parameter and returns a new array containing only the strings that contain the letter 'a'.

const strings = ["casa", "albero", "libro", "macchina", "giornale"];

const filtro = (param) => {
  const filtrado = param.filter((palabra) => palabra.includes("a"));
  return filtrado;
};

const filtrado = filtro(strings);

console.log(filtrado)
