class Student
{
    constructor()
    {
        let name, marks;
    }

    getName()
    {
        return this.name;
    }

    setName(name)
    {
        this.name=name;
    }

    getMarks()
    {
        return this.marks;
    }

    setmarks(marks)
    {
        this.marks=marks;
    }
}
let stu = new Student();
stu.setName("Sourabh");
stu.setmarks(90);
console.log(stu.getName(), stu.getMarks());