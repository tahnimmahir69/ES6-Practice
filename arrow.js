// function doubleIt(num){
//     return num*2;
// }

//Or

// const doubleIt = function(num){
//     return num *2;
// }

//Or
const doubleIt = num => num * 2; // es6 function short
const add = (x, y) => x + y;
const give5 = () => 5;
const doMath = (x, y) =>{
    const sum = x +y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}

//const result = doubleIt(50);
const result = add(50, 70);

const result2 = give5();
console.log(result2);

console.log(result);

const result3 = doMath(7, 5)
console.log(result3);