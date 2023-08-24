class Person {

  firstName = "";
  lastName = "";
  age = 0;
  
  constructor (firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get firstName(){
    this.firstName;
  }

  set firstName(newFirstName){
    this.firstName = newFirstName;
  }

  get lastName(){
    this.lastName;
  }

  set lastName(newLastName){
    this.lastNameName = newLastName;
  }


  get age(){
    this.age;
  }

  set age(newAge){
    this.age = newAge;
  }


  get fullName(){
    return this.firstName + " " + this.lastName;
  }
}

const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);

person.firstName = 'Maria';
person.lastName = 'Verdi';
console.log(person.fullName);