const value1 = 3;
const value2 = 8;
var value3 = value1 + value2;
var value4 = 4 + 1;

if (value4 === 5) {
    var message = prompt();
    logRandomValues(message);
}

function logRandomValues(msg) {
    console.log(msg);
    console.log(Math.round(Math.random()));
}