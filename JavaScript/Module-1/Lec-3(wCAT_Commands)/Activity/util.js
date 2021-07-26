const fs = require("fs");

function getFilesData(files) 
{
    let filesData = "";
    for (let i = 0; i < files.length; i++) {
      if (!fs.existsSync(files[i])) {
        console.log("One or more Files Doesn't Exist !");
        return;
      }
      if (i == files.length - 1) {
        filesData += fs.readFileSync(files[i]);
      } else {
        filesData += fs.readFileSync(files[i]) + "\r\n";
      }
    }
    return filesData;
}


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
    // console.log(Bflag);
    return Bflag;

}


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
    // console.log(Nflag);
    return Nflag;
}

module.exports.getFilesData = getFilesData;
module.exports.applySFlag = applySFlag;
module.exports.applyBFlag = applyBFlag;
module.exports.applyNFlag = applyNFlag;

