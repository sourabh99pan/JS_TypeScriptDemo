var str = "Welcome to TypeScript";
var myString = "Welcome";
//charAt()
console.log(str.charAt(0));
console.log(str.charAt(2));
//concat()
var str1 = "welcome";
var str2 = " To TypeScript";
console.log(str1.concat(str2));
//replace()
var str = "typeScript Programming";
console.log(str.replace('i', 'x'));
console.log(str.replace('type', 'Java'));
//split()
var fruits = "Apple, Banana,Orange";
console.log(fruits.split(',')); //['Apple','Banana','Orange']
console.log(fruits.split(',', 2)); //['Apple','Banana']
console.log(fruits.split(',', 1)); //['Apple']
//substring()
str = "Welcome";
console.log(str.substring(0, 3)); //Wel
console.log(str.substring(2, 5)); //lco
//toUpperCase() && toLowerCase()
str = "Welcome";
console.log(str.toUpperCase());
console.log(str.toLowerCase());
//trim()
str = "  Welcome   ";
console.log(str.trim());
console.log(str.trimLeft());
console.log(str.trimRight());
