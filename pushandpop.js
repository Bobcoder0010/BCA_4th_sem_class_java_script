let people = [
    { name: 'Aashish', age: 22 },
    { name: 'pranjal', age: 23 },
    { name: 'Anup', age: 21 },
    { name: 'manish', age: 25 },
    { name: 'Aryan', age: 26 }
  ];
  
  console.log("Initial list of people:");
  console.log(people);
  
  const newPerson = { name: 'tejbahadur', age: 27 };
  people.push(newPerson);
  
  console.log("\nList of people after adding a new person:");
  console.log(people);
  
  const removedPerson = people.pop();
  
  console.log("\nList of people after removing the last person:");
  console.log(people);
  
  console.log("\nRemoved person:");
  console.log(removedPerson);
  