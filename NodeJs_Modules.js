const fs = require("fs");
let text = fs.readFileSync("test.txt", "utf-8");
text = text.replace("file"," new file");
console.log("The content of the file is :");
console.log(text);

console.log("Creating new file.....");
fs.writeFileSync("harsh.txt",text);
