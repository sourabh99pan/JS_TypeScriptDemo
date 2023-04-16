class Test
{
    static a=10; //static variable
    b=20;       //non static variable

   static m1()
    {
        console.log("In Static method");
    }

    m2()
    {
        console.log("In non Static method");
    }
}

//1) Directly access static variables and methods using class name
    console.log(Test.a);// print 10
    //console.log(Test.b); // print undefined
    Test.a=1000;
    console.log("modified value of a: "+Test.a);
    Test.m1();//print value
    //Test.m2();// Incorrect way: type error will come

    //2)we can access non static variables and methods using objects 
    let t = new Test();
    console.log(t.b);
    t.m2();