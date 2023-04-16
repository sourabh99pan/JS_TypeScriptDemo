var Employee = /** @class */ (function () {
    function Employee(id, name, dno) {
        this.eid = id;
        this.ename = name;
        this.deptno = dno;
    }
    Employee.prototype.display = function () {
        console.log(this.eid);
        console.log(this.ename);
        console.log(this.deptno);
    };
    Employee.prototype.setData = function (id, name, dno) {
        this.eid = id;
        this.ename = name;
        this.deptno = dno;
    };
    return Employee;
}());
var emp1 = new Employee(103, "Warner", 13);
emp1.display();
emp1.eid = 101;
emp1.ename = "John";
emp1.deptno = 10;
emp1.display();
emp1.setData(102, "david", 11);
emp1.display();
