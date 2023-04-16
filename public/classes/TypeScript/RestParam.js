function Greet(greeting, name) {
    return greeting + " " + name;
}
console.log(Greet("Hello", "John")); //Hello John
function Greet2(greeting) {
    var name = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        name[_i - 1] = arguments[_i];
    }
    return greeting + " " + name;
}
console.log(Greet2("Hello", "John")); //Hello John
console.log(Greet2("Hello"));
console.log(Greet2("Hello", "John", "Smith"));
