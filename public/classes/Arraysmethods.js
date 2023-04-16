let fruits = ["Banana","Apple","Mango","Orange"];

//toString() & join()
console.log(fruits.toString()); //toString method convert array to string of , separated 

console.log(fruits.join("*")); //it will seperate value with given character

//pop()
//it will remove the last element of array ans print the removed element

fruits.pop(); 

console.log("After pop function")
console.log(fruits);

//push()
//it will add the element
console.log("After push function")
fruits.push("Kiwi");
console.log(fruits);

//shift()
//it will remove first element and shift other elements and return removed element
console.log("In shift function")
fruits = ["Banana","Apple","Mango","Orange"];
console.log(fruits);
console.log("After shift function")
console.log(fruits.shift());
console.log(fruits);

//unshift
//it is just opp of shift function
console.log("In unshift function")
fruits = ["Apple","Mango","Orange"];
console.log(fruits.unshift("Lemon"));
console.log(fruits);

//Deleting elements from array
console.log("In delete function")
fruits = ["Banana","Apple","Mango","Orange"];
console.log("After delete function")
delete fruits[0];
console.log(fruits);

//concat() - join two or mpre arrays

let array1 = [1,2,3,4];
let array2 = ["A","B","C"];
console.log("In concat function");
console.log(array1.concat(array2));

//slice()
console.log("In slice function");
fruits = ["Banana","Apple","Mango","Orange"];
console.log(fruits.slice(2)); //it will start from index 1 and create the array from given index

//sort() -  bydefault it sort in ascending order
console.log("In sort function");
fruits = ["Banana","Apple","Mango","Orange"];
console.log(fruits.sort());

//reverse() -  it reverse the current order
console.log("In reverse function");
fruits = ["Banana","Apple","Mango","Orange"];
console.log(fruits.reverse());





