/*
Write a function that takes an array of objects as a parameter. 
Each object has a "name" property and an "age" property. 
The function should return the object with the highest age.
const people= [
  { name: 'Mario', age: 32 },
  { name: 'Luigi', age: 28 },
  { name: 'Peach', age: 29 },
  { name: 'Toad', age: 35 }
];
*/
const people = [
  { name: "Mario", age: 32 },
  { name: "Luigi", age: 28 },
  { name: "Peach", age: 29 },
  { name: "Toad", age: 35 },
];

function older(array1) {
  let mayor1 = array1[0];
  for (let x = 1; x < array1.lenghth; x++) {
    if (array1[x].age > mayor1.age) {
      mayor1 = array1[x].age;
    }
  }
  return mayor1;
}

function peopleAge(arrayPersonas) {
  let mayor = arrayPersonas[0];
  for (let i = 1; i < arrayPersonas.length; i++) {
    if (arrayPersonas[i].age > mayor.age) {
      mayor = arrayPersonas[i].age;
    }
  }
  return mayor;
}

console.log(peopleAge(people));
