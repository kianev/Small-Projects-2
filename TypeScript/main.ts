let message;
message = 'abc';
let endsWithC = message.endsWith('c');
let endsWithB = message.endsWith('b');
console.log(endsWithC);
console.log(endsWithB);

let log = function (message) {
    console.log(message);
};

let doLog = (message) => console.log(message);