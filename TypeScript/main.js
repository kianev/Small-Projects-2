var message;
message = 'abc';
var endsWithC = message.endsWith('c');
var endsWithB = message.endsWith('b');
console.log(endsWithC);
console.log(endsWithB);
var log = function (message) {
    console.log(message);
};
var doLog = function (message) { return console.log(message); };
