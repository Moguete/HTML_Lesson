// Use the destructuring to assign the values just with one code line.

const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

const [id, firstName, lastName, age] = [person.id, person.firstName, person.lastName, person.age];

console.log(id, firstName, lastName, age);