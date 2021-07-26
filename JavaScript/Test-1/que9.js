// A spoonerism is an error in speech in which corresponding consonants, vowels, or morphemes are switched between two words in a phrase. 
// For example,

//     kite flying becomes fite klying

// Your task is to create a function 'spoon' that takes a string of two words, separated by a space and returns a spoonerism of those words in a string, as in the above example.
// Note: Input will always contain 2 words

let data = "kite flying";

spoon(data);

function spoon(data)
{
    let A=0;
    let first ;
    let second;
    for(let i=0;i<data.length;i++)
    {
         A = data.split(" ");
        //  console.log(A);
    }
    first = A[0][0];
    second = A[1][0];
    let res1 = first;
    let res2 = second;
    let third = first;
    first = second;
    second = third;
    // console.log(first,second);
    
    var result1 = A[0].replace(res1, first);
    var result2 = A[1].replace(res2, second);
    console.log(result1 +" "+ result2);
}