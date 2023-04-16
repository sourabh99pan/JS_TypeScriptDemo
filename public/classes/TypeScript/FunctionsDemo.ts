//Named Function
function display()
{
    console.log("Welcome to TypeScript")
}

display(); //Welcome to TypeScript

function sum(x:number,y:number)
{
    return x+y;
}

sum(100,200); //300

//Anonymous Function

var greeting=function()
{
    console.log("Welcome to Anonymous Function");
}

greeting();

//Anonymous function include parameter types and return type

var add=function(x:number,y:number):number
{
    return x+y;
}

console.log(add(10,20));