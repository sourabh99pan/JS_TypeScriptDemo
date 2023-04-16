let cars = new Array("AUDI","BMW","VOLVO");
 
//let cars2 = ["AUDI","BMW","VOLVO"];
 console.log(cars);

 console.log(cars[1]);//here 1 is index and it will print element which is present on index 1

 //change a element in array
 cars[0]="OPEL";
 console.log(cars);

 //we can have variables of different types in the same array

 let myarray=[10, "Welcome", 12.50, true];

 console.log(myarray);
console.log("length of array: "+myarray.length);

//looping in array
console.log("Looping in myarray:")
for(let i=0;i<=myarray.length-1;i++)
{
    console.log(myarray[i]);
}

//looping elements from array using for/of loop
console.log("looping elements from array using for/of loop:")
for(ele of myarray)
{
    console.log(ele);
}
 //we can have objects in array
 let person1=
 {
    name:"john",
    age: 30,
 };

 let person2=
 {
    name:"David",
    age:40
 };

let objArray = [person1,person2];

console.log(objArray);
console.log(objArray[0]);//to print specific object

//recognize an array -typeof

console.log(typeof myarray);//this will give output as object

console.log(Array.isArray(myarray));//this will give output as true 
