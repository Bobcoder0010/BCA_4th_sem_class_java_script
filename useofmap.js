let students = [
    { name: "Pranjal", age: 20 },
    { name: "Anup", age: 22 },
    { name: "Manish", age: 21 },
    { name: "Aashish", age: 23 }
  ];
  
  let agesArray = students.map(student => student.age);
  
  console.log("Ages of the students:", agesArray);
  