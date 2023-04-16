let i=0;

//while loop
while(i<5)
{
    console.log(i);
    i++;
}

//do while
console.log("in do while loop");

let j=0;
do
{
    console.log(j);
    j++;
}while(j<10)

//for loop
 for(let i=1;i<5;i++)
 {
    console.log(i);
 }

 //jumping statement 

 for(let i=1;i<5;i++)
 {
    if(i==3)
    break;
    console.log(i);
 }

 for(let i=1;i<5;i++)
 {
    if(i==3)
    continue;
    console.log(i);
 }

 let array = ["a","b","c","d","e"]

 for(let i of array)
 {
   console.log(i);
 }

 