// ceo => 2200
// manager => 1800
// cto => 1800
// developer => 1500
// default => 1000
function calculateSalary(role) {
  switch (role){
    case 'ceo':
      console.log("The ceo's salary is 2200");
      break;
    case 'manager':
      console.log("The manager's salary is 1800");
      break;
    case 'cto':
      console.log("The cto's salary is 1800");
      break;
    case 'developer':
      console.log("The developer's salary is 1500");
      break;
    case 'other':
      console.log("The default's salary is 1000");
      break;
  }
}

const ceoSalary = calculateSalary('ceo');
const managerSalary = calculateSalary('manager');
const ctoSalary = calculateSalary('cto');
const developerSalary = calculateSalary('developer');
const otherSalary = calculateSalary('other');

//a mio parere non servono perché la funzione viene richiamata prima
console.log(ceoSalary);
console.log(managerSalary);
console.log(ctoSalary);
console.log(developerSalary);
console.log(otherSalary);

