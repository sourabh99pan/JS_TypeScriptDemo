/** fat Arrow function
 */

var sum1=(x:number,y:number):number=>
{
    return x+y;
}

//we can write above function in one line and no need to mention return type. see below
//var sum = (x:number,y:number)=>x+y 
console.log(sum1(10,20)); //50

//parameterless Arrow Function

var Print=()=>
{
    console.log("Welcome to TypeScript");
}

Print();

//if the function body consist of only one statement
//then no need for the curly brackets and return keyword

