const fs = require("fs");

let pendingpromise = fs.promises.readFile("./f1.txt");

console.log(pendingpromise);

// promise has 2 functions then() and catch()


// then() is run when there is successful promise and get the data.
pendingpromise.then(function(data)
{
    console.log("Inside then")
    console.log(data+"");
})


// catch() is run when there is error in getting the data from f1.txt
pendingpromise.catch(function(error)
{
    console.log("Inside catch");
    console.log(error);
})