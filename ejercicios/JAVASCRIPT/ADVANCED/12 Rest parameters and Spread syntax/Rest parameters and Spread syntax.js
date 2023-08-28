// Perform a code refactoring by using the Rest Operator. The output of the console.log must be the same.

const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

const {id, ...personInfo} = person;

console.log(id, personInfo);
