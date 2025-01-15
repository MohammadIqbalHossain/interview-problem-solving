// function segmentCustomers(customers) {
//     const customerObj =  {
//       low: [],
//       medium: [],
//       high: []
//     };
  
//     customers.forEach((customer) => {
//        if(customer.orders < 5){
//           // console.log(customer.name, 'Low');
//           customerObj.low.push(customer.name);
//        }
//        else if(customer.orders <= 10){
//           // console.log(customer.name, "medium");
//           customerObj.medium.push(customer.name);
//        }
//        else{
//           // console.log(customer.name, 'High')
//           customerObj.high.push(customer.name);
//        }
//     })

//     return customerObj;
//   }


// const customers = [
//     { id: 1, name: "Alice", orders: 3 },
//     { id: 2, name: "Bob", orders: 8 },
//     { id: 3, name: "Charlie", orders: 15 },
//   ];

// console.log(segmentCustomers(customers));


function segmentCustomers(customers) {
    const customerObj =  {
      Low: [], // Adjusted to match the required key case
      Medium: [],
      High: []
    };
  
    customers.forEach((customer) => {
       if(customer.orders < 5){
          customerObj.Low.push(customer.name); // Adjusted key case
       }
       else if(customer.orders <= 10){
          customerObj.Medium.push(customer.name); // Adjusted key case
       }
       else{
          customerObj.High.push(customer.name); // Adjusted key case
       }
    });
    return customerObj;
}

const customers = [
    { id: 1, name: "Alice", orders: 3 },
    { id: 2, name: "Bob", orders: 8 },
    { id: 3, name: "Charlie", orders: 15 },
];

console.log(segmentCustomers(customers));
// Output:
// {
//   Low: ["Alice"],
//   Medium: ["Bob"],
//   High: ["Charlie"]
// }