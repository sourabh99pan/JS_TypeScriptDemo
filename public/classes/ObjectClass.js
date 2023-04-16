let person=
{
    firstname: "john",
    lastname: "smith",
    age: 35,
    weight: 60,

}

//access object property 
//console.log(person["firstname"]);
//console.log(person.age);
 
//add new property to object 
person["height"] = 6.0;

console.log(person.height);

//update existing property
person["weight"]=65;

console.log(person.weight);

//remove the property from object

delete person["age"];

console.log(person.age);//out put will be undefined


for (let x in person)
{
    console.log(x);// print only property name
}

for (let x in person)
{
    console.log(x+" "+ person[x]);// print property names with values
}