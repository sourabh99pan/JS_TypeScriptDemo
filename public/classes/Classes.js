class Student
{
    /*setDetails(sid,sname,grade)
    {
        this.sid=sid;  //here when we sya this.sid then this is belong to class
        this.sname = sname;
        this.grade = grade;
    }*/

    constructor(sid,sname,grade)
    {
        this.sid=sid;  
        this.sname = sname;
        this.grade = grade;
    }

    display()
    {
        console.log(this.sid,this.sname,this.grade);
    }
}

let Stu = new Student(101,"Sourabh","A");
Stu.display();
let Stu1 = new Student(102,"David","B");
Stu1.display();
let Stu2 = new Student(103,"Smith","C");
//Stu.setDetails(101,"Sourabh","A");
Stu2.display();
