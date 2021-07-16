var fs = require("fs");

const demo = "Hi! This Is Rutuja";
fs.writeFile("example.txt", demo, () => {
    console.log("Updated the file");
});

const demo2 = " The data is appended to existing file";
fs.appendFile("example.txt", demo2, () => {
    console.log("Updated the file");
});
fs.readFile("example.txt", "utf8", (err, data) => {
    console.log(data);
});