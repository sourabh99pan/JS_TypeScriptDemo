//Number 

var first:number=12.0;
var second:number=0x37CF;
var third:number = 0o377;
var fourth:number=0b111001;

console.log(first);
console.log(second);
console.log(third);
console.log(fourth);

//String
var empName:string="John";
var empDept:string="IT";

console.log(empName);
console.log(empDept);

var stmt=empName+" works in "+empDept;

console.log(stmt);


 //boolean
 var b:boolean=true;
 console.log(b);

 //void

 function hello():void
 {
    console.log("This is welcome message");
 }

 //Null : Null represent a variable whose value is undefined.

 var num1:number=null;
num1=100;
console.log(num1);


//undefined: Undefined is primitive type which denotes all uninitalize variable
var num2:number=undefined;
num2 = 10;
console.log(num2);

//Any type 
var value:any="Hi";

value=100;
console.log(value);

value=false;
console.log(value);

function myFunction(x:any,y:any)
{
    console.log(x+y);
}

myFunction(10,12);
myFunction("Hi"," Welcome");





