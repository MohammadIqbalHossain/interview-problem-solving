function segmentCustomers(customers) {
    const customerObj =  {
      low: [],
      medium: [],
      high: []
    };
  
    customers.forEach((customer) => {
       if(customer.orders < 5){
          customerObj.low.push(customer.name);
       }
       else if(customer.orders <= 10){
          customerObj.medium.push(customer.name);
       }
       else{
          customerObj.high.push(customer.name);
       }
    })

    return customerObj;
  }


const customers = [
    { id: 1, name: "Alice", orders: 3 },
    { id: 2, name: "Bob", orders: 8 },
    { id: 3, name: "Charlie", orders: 15 },
  ];

console.log(segmentCustomers(customers));


