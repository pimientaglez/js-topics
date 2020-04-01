const arr = [1,2,3,4,5];
const arr2 = [arr[0], arr[1], arr[2], arr[3], arr[4],6,7,8,9];

/* console.log(arr);
console.log(arr2); */
 //spread

const arr3 = [1,2,3,4,5];
const arr4 = [0, ...arr3, 6, 7, 8, 9];

//console.log(arr4);

//objects

const myObj = {
    a: 'a',
    b: 'b',
    c: 'c'
}

const clone = {  ...myObj, d: 'd'}

// {x:'x', y: 'y', a: 'a', b: 'b', c: 'c', d: 'd', f: 123}

console.log(myObj)
console.log(clone)