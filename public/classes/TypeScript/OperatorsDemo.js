var x = 10;
var y = 20;
//********Arithmetic operator + - */ % ** ++ --
console.log(x + y); //30;
console.log(y - x); //10
console.log(x * y);
console.log(x / y);
console.log(x % y);
console.log(Math.pow(5, 2));
console.log(x++); //post increment
console.log(y--); //post decrement
//**  Assigment operators  */
x = 100;
y = 50;
x = x + y; // can also write in x+=y
console.log(x); //150
console.log(x -= y); //x=x-y
console.log(x *= y); //x=x*y
console.log(x /= y); //x=x/y
console.log(x %= y); //x=x%y
//******Relational/comparison operator */
//always return boolean value
//< > <= >= !=
x = 10;
y = 20;
console.log(x > y); //false
console.log(x < y); //true
console.log(x >= y);
console.log(x <= y);
console.log(x != y); //true
//ternary operator
console.log(x < y ? x : y); //10
console.log(x > y ? x : y); //20
//*****logical operator */
// && || !
var a = true;
var b = false;
console.log(a && b); //false
console.log(a || b); //true
console.log(!a); //fa;se
console.log(!b); //true
