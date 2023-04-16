class Employee
{
    eid:number; //instance variable or global variable
    ename:string;
    deptno:number;

    constructor(id:number,name:string,dno:number)
    {
        this.eid=id;
        this.ename=name;
        this.deptno=dno;
    }

    display(): void
    {
        console.log(this.eid);
        console.log(this.ename);
        console.log(this.deptno);
    }

    setData(id:number,name:string,dno:number):void
    {
        this.eid=id;
        this.ename=name;
        this.deptno=dno;
    }
}


var emp1=new Employee(103,"Warner",13);
emp1.display();

emp1.eid=101;
emp1.ename="John";
emp1.deptno=10;

emp1.display();

emp1.setData(102,"david",11);

emp1.display();
