// fs -> FileSystem

const fs = require("fs");
// console.log(fs);

// let data = fs.readFileSync("C:\Users\MGOYA\Desktop\Certificates","utf-8");
// console.log(data);

let data = fs.readFileSync("./FileSystem/hi.txt","utf-8");
console.log(data);

let data2 = fs.writeFileSync("./FileSystem/hello.txt","hello my name is mayank");
