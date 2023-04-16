function student()
{
    this.name = "John";
    this.gender = "Male";
}

stu1 = new student();


student.prototype.age=35;

console.log("Print values from second obj stu1")
console.log(stu1.name,stu1.gender,stu1.age);

stu2 = new student();

console.log("Print values from second obj stu2")
console.log(stu2.name,stu2.gender,stu2.age);