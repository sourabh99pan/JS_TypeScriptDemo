function Greet(greeting:string,name:string):string
{
    return greeting+"  "+name;
}

console.log(Greet("welcome","john"));

//console.log(Greet("welcome")); compiler error: An argument for 'name' was not provided.

//console.log(Greet("Welcome","john","David")); compiler error: Expected 2 arguments, but got 3


//Optional Parameter

function Greet1(greeting:string,name?:string):string
{
    return greeting+"  "+name;
}

console.log(Greet1("welcome","john"));//welcome  john

console.log(Greet1("welcome")); //welcome  undefined

console.log(Greet1("welcome again"));

//console.log(Greet1("Welcome","john","David"));

//Default Parameter
function Greet2(name:string,greeting:string="Hello"):string
{
    return greeting+" "+name
}

console.log(Greet2("john"));//Ok return "welcome  John" 

console.log(Greet2("John","welcome")); //OK return "welcome  John"

