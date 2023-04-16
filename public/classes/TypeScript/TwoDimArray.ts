// Declaration and initilization two Dim array

var myarray:number[][]= [[10,20],[30,40],[50,60]];

console.log(myarray);

//2D multi Type array
var myarray2:(string|number)[][] = [[1,"sourabh"],[2,"david"],[3,"john"]];

console.log(myarray2);

//Accessing 2D array elements

console.log(myarray2[0][0]);
console.log(myarray2[0][1]);
console.log(myarray2[1][0]);
console.log(myarray2[1][1]);

//loop to access 2D array elements
for(var i=0;i<myarray2.length;i++)
{
    for(var j=0;j<myarray2[i].length;j++)
    {
        console.log(myarray2[i][j]);
    }
}

//for each loop

for(var a in myarray2) //0 row
{
    for(var b in myarray2[a])
    {
        console.log(myarray2[a][b]);
    }
}