
const order = {
  customer: {
    name: "Marco",
    address: "Via Castello 41",
    city: "",
  }
};

  if (!order?.customer?.city){
    console.log("City is required");
  }else{
    console.log(order.customer);
  };

// ciclo if dell'esercizio

// if (order && order.customer && order.customer.address && !order.customer.address.city) {
//   console.log('City is required');
// }