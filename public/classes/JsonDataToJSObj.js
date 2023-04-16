let text = '{"employees":['+
'{"firstname":"John","lastname":"Doe"},'+
'{"firstname":"Anna","lastname":"Smith"},'+
'{"firstname":"Peter","lastname":"Jones"}]}';

let obj = JSON.parse(text);

console.log(obj.employees[1].firstname+" "+obj.employees[1].lastname);