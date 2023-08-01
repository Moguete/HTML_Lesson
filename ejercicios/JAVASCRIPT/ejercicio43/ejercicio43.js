let user = {
  name: "Cosimo",
  age: 30,
};

Object.freeze(user);

let newUser = user;

newUser.name = "Paolo";

console.log(newUser);
console.log(user);
