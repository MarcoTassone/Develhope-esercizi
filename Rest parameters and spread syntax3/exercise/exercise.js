const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

//la consegna dice "refactoring", ma secondo me era meglio "destracturing" con rest operator

const {id, ...personInfo} = person;

console.log(id, personInfo);