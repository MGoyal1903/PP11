const fs = require("fs");

let F1data = fs.readFileSync("./f1.txt","utf-8");
let F2data = fs.readFileSync("./f2.txt","utf-8");

// console.log(F1data);
// console.log(F2data);

function applySFlag(F1data)
{
    let splitdata = F1data.split("\r\n");
    // console.log(splitdata);

    let emptyInclude = false;
    let removedspaces = [];
    for(let i=0; i<splitdata.length; i++)
    {
        if(splitdata[i] == "" && emptyInclude == false)
        {
            removedspaces.push(splitdata[i])
            emptyInclude = true;
        }
        else if(splitdata[i]!="")
        {
            removedspaces.push(splitdata[i]);
            if(i < splitdata.length-2 ) 
            {
             emptyIncluded = false;
            }
    
        }
    }


        let removedSpacesString = removedspaces.join("\r\n");
        return removedSpacesString;
    
}
let removedSpacesString = applySFlag(F1data);
console.log(removedSpacesString);


function applyBFlag(F1data)
{
    let count = 1;
    let splitdata = F1data.split("\r\n");

    for(let i=0;i<splitdata.length; i++)
    {
      if(splitdata[i]!="")
      {
          splitdata[i] = `${count}. ${splitdata[i]}`;
          count++;
      }  
    }
    let Bflag = splitdata.join("\n");
    console.log(Bflag);
    return Bflag;

}
let Bflag = applyBFlag(F1data);


function applyNFlag(F1data)
{
    let count = 1;
    let splitdata = F1data.split("\r\n");

    for(let i=0;i<splitdata.length; i++)
    {

        splitdata[i] = `${count}. ${splitdata[i]}`;
        count++;
      
    }
    let Nflag = splitdata.join("\n");
    console.log(Nflag);
    return Nflag;
}
let Nflag = applyNFlag(F1data);
