
const fs = require("fs");

console.log("Start");

fs.readFile("./f1.txt" , f1data);
fs.readFile("./f2.txt" , f2data);
fs.readFile("./f3.txt" , f2data);

function f1data(error , data)
{
    console.log(data+"");
}
function f2data(error , data)
{
    console.log(data+"");
}
function f3data(error , data)
{
    console.log(data+"");
}

console.log("end");

// Output

/* Random on same size of file(f1.txt,f2.txt,f3.txt) */
