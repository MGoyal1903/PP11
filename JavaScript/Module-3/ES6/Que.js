// Q-1 : Make replica of Map
// Q-2 : Make replica of filter
// Q-3 : Make replica of Reduce



//////////////////////////////// Ans 1 //////////////////////////////////////

let arr = [1,2,3,4,5]
function mymap(arr,double)
{
    let res = [];
    for(let i=0;i<arr.length;i++)
    {
        res.push(double(arr[i]));
    }
    return res;
}

function double(x)
{
    return 2*x;
}
console.log(mymap(arr,double));    



//////////////////////////////// Ans 2 ///////////////////////////////////

let a = [1,2,3,4,5]
function myfilter(a,isEven)
{
    let res = [];

    for(let i=0;i<a.length;i++)
    {
        if(isEven(a[i]))
        {
            res.push((a[i]));
        }
    }
    return res;
}

function isEven(x)
{
    return x%2==0;
}

console.log(myfilter(a,isEven));



/////////////////////////////// Ans 3 ///////////////////////////////////

let x = [1,2,3];
function myReduce(x,sum)
{
    let ans = x[0];
    for(let i=1;i<x.length;i++)
    {
        ans = sum(ans,x[i])
    }
    return ans;
}

function sum(a,b)
{
    return a+b;
}

console.log(myReduce(x,sum))