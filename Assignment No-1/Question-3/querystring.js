const querystring = require('querystring');
let obj = {
    user: "Rutuja",
    isFemale:true,
    role: ["admin", "editor", "manager"],
}

let output = querystring.encode(obj, '/', '->');

console.log("Encoded Output: ", output);
let input = querystring.decode(output);
console.log("Decoded Output: ", input);