import * as fs from "node:fs";

const content = 'Hola, Manu!!';
const filePath = '/Users/estevemogas/git_start/HTML_Lesson/ejercicios/NODE/07 Command-line art/ejercicio8.txt';
fs.writeFile(filePath, content, (err) => {
  if (err) {
    console.error("Error al escribir el archivo:", err);
  } else {
    console.log(`Se ha escrito el contenido en ${filePath}`);
  }
});
