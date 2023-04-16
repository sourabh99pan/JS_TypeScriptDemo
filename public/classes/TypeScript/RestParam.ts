function Greet(greeting:string,name:string)
{
    return greeting+ " "+name;
}

console.log(Greet("Hello","John")); //Hello John

function Greet2(greeting:string,...name:string[])
{
    return greeting+ " "+name;
}

console.log(Greet2("Hello","John")); //Hello John

console.log(Greet2("Hello"));

console.log(Greet2("Hello","John","Smith"));

