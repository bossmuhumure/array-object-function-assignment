
let students=["john","bosco","ange","david"]
console.log("first student:", students[0]);
console.log("last student:", students [students.length -1]);
// students.push("peace");
students.pop()
console.log(`list of all students: ${students}`,);

// for (let i=0; i<students.length,i++) {
// console.log(students[i]);
// }

for(let k =0; k < students.length; k++  ){
  console.log(students[k]);
}

//this is a task 2c for creating object 
let school={
    name:"klab gatsibo hub",
     location:"kigali",
    studentcount:430
     
}    
 console.log("school name:", school.name);
     console.log("school location:", school.location);

     // add email to school object
     school.email="bossmuhumure71@gmail.com";
     
     school.studentcount = 600;
     console.log(school);
      

     //let create function greet
     function greet (age, id){
      return (age + id)

     }
     console.log(greet(5,2));
     
      
  
     