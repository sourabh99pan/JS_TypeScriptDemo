data = '{"name":"Sourabh","age":30,"address":{"streetAddress":"80 feet Ratlam"},"phoneNumber":"86656689"}';

let obj = JSON.parse(data);

console.log(obj["name"]);

console.log(obj.address.streetAddress);