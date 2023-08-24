class Person {
  
  static fromObject(obj){
    const {firstName, lastName} = obj;
    return new Person (firstName, lastName);
  }

  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const obj = {
  firstName: "Mario",
  lastName: "Rossi",
};

const person = Person.fromObject(obj);
console.log(person.firstName + " " + person.lastName);
