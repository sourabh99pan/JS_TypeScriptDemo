let employee=
{
    empname:"Sourabh",
    empid: 100,
    job:"Engineer",
    basic_sal:50000,
    bonus: function()
            {
               return ((this.basic_sal*10)/100);
            }

}

console.log(employee["empname"]);

console.log(employee.bonus());