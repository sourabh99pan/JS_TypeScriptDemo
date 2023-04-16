class Employee
{
    constructor(eid,ename)
    {
        this.eid=eid;
        this.ename=ename;
    }
}

Employee.prototype.sal = 50000;

Employee.prototype.display=function()
{
    console.log(this.eid,this.ename,this.sal)
}

empobj1 = new Employee(101,"Sourabh");
empobj1.display();
//console.log(empobj1.eid,empobj1.ename,empobj1.sal);

empobj2 = new Employee(202,"Virat");
empobj2.display();
//console.log(empobj2.eid,empobj2.ename,empobj2.sal);
