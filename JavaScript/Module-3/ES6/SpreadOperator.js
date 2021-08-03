let a = [1,2,3];
let b = [4,5,6];

let c = [...a, ...b];
let d = [...a, ...b, ...a];

console.log(a);
console.log(b);
console.log(c);
console.log(d);


// Q : let a = [1,2,4,5];  let b = [?];  using slice and spread operator [1,2,3,4,5]

let a1 = [1, 2, 4, 5];

// let b = [1, 2, 3, 4, 5];

// a.slice(0,2) => [1,2]

// a.slice(2,4) => [4,5]

let b1 = [...a1.slice(0, 2), 3, ...a1.slice(2, 4)];

console.log(b1);




// Q : let o1 = {a:1,b:2};  let o2 = {c:3}; let o3 = {...o1, ...o2, ...o1, ...o2}

let o1 = { a: 1, b: 2 };

let o2 = { c: 3 };

let o3 = { ...o1, ...o2, ...o1, ...o2 };

console.log(o3);
