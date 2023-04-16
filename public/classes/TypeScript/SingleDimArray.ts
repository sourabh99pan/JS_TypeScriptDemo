//array declaration and initialization

var fruits:string[]=["mango","Apple","Banana","Orange"];

var fruits2:Array<string>;  //declartion

 fruits2=["mango","Apple","Banana","Orange"]  //initilization

 console.log(fruits);

 console.log(fruits2);

 //multiType array
 var values:(string|number)[]=["sourabh",1,"rahul",10];

 console.log(values);
//or

var values2:Array<string|number>=["sourabh",1,"rahul",10];

console.log(values2);

//Access any element

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[4]); //undefined will print

//for loop
console.log("in forloop")
for(var i:number=0;i<values.length;i++)
{
    console.log(values[i]);
}

