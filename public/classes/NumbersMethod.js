//Numbers
let x=100;

//let x = new Number(100);

let y=105.2;
let z = 10e2;

console.log(x,y,z);

//isInteger(): Check variable value is integer or not
x = 10;
y=1.8;
z="x";

console.log(Number.isInteger(x)); //true
console.log(Number.isInteger(y)); //false
console.log(Number.isInteger(z)); //false

//parseInt() - Convert string into number
s = "12445";
console.log("Type of s is "+typeof(s));

console.log("Now Type of s is "+typeof(Number.parseInt(s)));//number

//parseFloat() - Convert string into number
s = "124.33";
console.log("Type of s is "+typeof(s));

console.log("Now Type of s is "+typeof(Number.parseFloat(s)));//number

//toString() - convert number into String
let n=1234;
console.log("Type of n is "+typeof(n));//number

console.log("Now Type of n is "+typeof(Number.toString(n)));//string
