const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;

person2.firstName = "Simon";

/* cambia anche person1 in Simon perché non facciamo una copia, ma facciamo un'assegnazione per reference
 e siccome si riferiscono allo stesso oggetto in memoria, viene modificato anche person1*/
// Modify the property `firstName` of the `person2` in "Simon".

console.log(person1);
console.log(person2);
