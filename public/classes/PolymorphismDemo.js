class Shape
{
    draw()
    {
        return "I am in draw function";
    }
}

class Square extends Shape
{
    draw()
    {
        return "I am in Square class";
    }
}


class Circle extends Shape
{
    draw()
    {
        return "I am in circle class";
    }
}

let s = new Shape();

console.log(s.draw()); //output from Shape class

s= new Square();
console.log(s.draw()); //output from Square class

s=new Circle(); 
console.log(s.draw()); //output from Circle class


