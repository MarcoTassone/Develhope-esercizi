
const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}

let keys = Object.keys(person);

// giusto

keys.forEach((key) => {
  console.log(`${key} - ${person[key]}`)
})

// sbagliato 

// let values = Object.values(person)
// console.log(keys, values)

// Print values of person using Object.keys
