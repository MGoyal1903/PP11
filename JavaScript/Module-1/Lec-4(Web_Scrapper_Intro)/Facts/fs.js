const fs = require("fs");

const cheerio = require("cheerio");
 let htmlkadata = fs.readFileSync("./index.html" , "utf-8");

 let myDoc = cheerio.load(htmlkadata);

 // document.querySelector("h1");

let h1KaData = myDoc("h1").text();
// console.log(h1Element); element => cheerio => object form me data
console.log(h1KaData);
