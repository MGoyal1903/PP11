// Write a function 'decToBin' which takes a decimal number and returns its binary.

let num=45;

decToBin(num);

function decToBin(num)
{
    let pow = 1;
    let res = 0;
    let rem = 0;

    while(num!=0)
    {
        rem = num % 2;
        res = res + (rem*pow);
        pow = pow*10;
        num = Math.floor(num / 2);

    }
    console.log(res);
    
}