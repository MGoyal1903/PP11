// Parallaly read content of f1 , f2 and f3 and show random output  using promisified function

const fs = require("fs");

let f1data = fs.promises.readFile("./f1.txt");
let f2data = fs.promises.readFile("./f2.txt");
let f3data = fs.promises.readFile("./f3.txt");

f1data.then(function(data)
{
    console.log(data+"");
})
f2data.then(function(data)
{
    console.log(data+"");
})
f3data.then(function(data)
{
    console.log(data+"");
})