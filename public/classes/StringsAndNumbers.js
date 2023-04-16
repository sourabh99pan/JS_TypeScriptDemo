let s = "welcome";

//can define with new keyword also
//let str = new String();

//charAt()
console.log(s.charAt(2));

//concat()
console.log(s.concat(" to JS Programming"))

//replace()
let str = "Welcome to JS programming"
console.log(str.replace("JS","Java"));

//substring()
s="Welcome";
console.log(s.substring(0,3)); //it will print Wel

//toUpperCase() and toLowerCase()
s="WELcome"
console.log(s.toUpperCase());
console.log(s.toLowerCase());

//split()
s = "welcome to JavaScript";
let arr = s.split(" ");

console.log(arr[2]);
