let name = "Mayank Goyal";

function outerfun() 
{
    console.log(name);
    let a = 10;
    console.log(a);
    function innerfun()
    {
        console.log(a);
    }
    a = 100;
    return innerfun;
}
let res = outerfun();
res();
