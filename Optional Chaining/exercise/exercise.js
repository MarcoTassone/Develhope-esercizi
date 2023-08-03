
const order = {
  customer: {
    name: "Marco",
    address: "Via Castello 41",
    city: "",
  }
};

let values = Object.values(order.customer);

for(let value in order.customer){
  if (!order.customer.city){
    console.log("City is required")
    break;
  }else{
    value = values;
    console.log(value);
  }
}

//altro esempio che mi era venuto in mente guardando il video dalla piattaforma

// let entries = Object.entries(order.customer)

// for (let entry of entries){
//   if(order.customer.city == ""){
//     console.log('City is required');
//     break;
//   }else{
//   let [key, value] = entry ;
//   console.log(key);
//   console.log(value);
//   }
// }

// ciclo if dell'esercizio

// if (order && order.customer && order.customer.address && !order.customer.address.city) {
//   console.log('City is required');
// }