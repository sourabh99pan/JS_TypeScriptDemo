// var empID:number=101;
// var empName:string="john";
// var empSal:number = 50000;
//Here above if we want to store employee data then we need 3 variables 
//instead of creating 3 variables we can create one variable
//Declare tuple
//var employee=[101,"john",50000];
//or
var employee = [101, "john", 50000];
console.log(employee);
//Accessing Tuple
console.log(employee[0]); //101
console.log(employee[1]); //john
console.log(employee[2]); //50000
//add elements into tuple() - push()
var employee = [101, "john", 50000];
employee.push(102, "Scott", 70000);
console.log(employee);
//remove element from tuple - pop()
employee.pop();
console.log("After removing new element " + employee);
//update element in Tuple
var student = [101, "Smith"];
student[1] = "David";
console.log("After update " + student);
//tuple array
var student1;
student1 = [[101, "smith"], [102, "john"], [103, "Sourabh"]];
console.log(student1[0]);
console.log(student1[1]);
console.log(student1[2]);
