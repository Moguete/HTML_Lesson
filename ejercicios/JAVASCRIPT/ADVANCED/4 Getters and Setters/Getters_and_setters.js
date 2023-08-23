class Person {
  #firstName = "";
  #lastName = "";
  #age = 0;

  constructor(firstName, lastName, age) {
    this.#firstName = firstName;
    this.#lastName = lastName;
    this.#age = age;
  }

  set firstName(name) {
    if (typeof(name) === "string") {
        this.#firstName = name;
    }
    else {
        this.#firstName = "Not a valid name."
    }
  }

  set lastName(surname) {
    if (typeof(surname) === "string") {
        this.#lastName = surname;
    }
    else {
        this.#lastName = "Not a valid surname."
    }
  }

  get fullName() {
    return this.#firstName + " " + this.#lastName
  }
}

const person = new Person("Mario", "Rossi", 25);
console.log(person.fullName);

person.firstName = "Maria";
person.lastName = "Verdi";
console.log(person.fullName);
