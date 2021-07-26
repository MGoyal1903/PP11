// Sort the folder

let extensionMapping = require("./util");
console.log(extensionMapping);

const fs = require("fs");


// get all the files 
let testFolderPath = "./Downloads";
let allFiles = fs.readdirSync(testFolderPath);
console.log(allFiles);

//call sortFile and put value of allfiles in file
for(let i=0; i<allFiles.length ;i++)
{
    sortFile(allFiles[i]);
}

//split the file and return the extension
function getextension(file)
{
 file = file.split(".");
 return file[1];
}


//check weather extension is present and  folder is created or not
function checkextension(extension)
{
 let extensionFolderName = testFolderPath;
 for(let key in extensionMapping)
 {
    let extensions = extensionMapping[key];
    if(extensions.includes(extension)) //check extensions in extension we give to prog
    {
        extensionFolderName = extensionFolderName + "/" + key; // update the path of extensionFolder
        break;
    }
 }

 //check folder exist or not !!! if not create one
 let isFolderExist =  fs.existsSync(extensionFolderName);
 if(!isFolderExist){
     fs.mkdirSync(extensionFolderName);
 }
 return extensionFolderName;

}

//copy file from sorce to destination 
function movefile(file , extensionFolderName)
{
    let sourceFile = testFolderPath+"/"+file;
    let destinationFile = extensionFolderName+"/"+file;
    // copy file from the source path to destination path !!
    fs.copyFileSync(sourceFile , destinationFile);
    // then delete file from the source path !!
    fs.unlinkSync(sourceFile);
}

function sortFile(file)
{
 let extension = getextension(file);
 let extensionFolderName = checkextension(extension);
 movefile(file , extensionFolderName);
}