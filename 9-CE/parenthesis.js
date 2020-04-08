function parenthesis(str) {
    let counter = 0;
    str.split('').forEach((char)=>{
        if( char ==='(' ) {
            counter++;
        }else if( char===')' ){
            counter--;
        }
    });

    return counter === 0 ? true : false
}

let a = '(((((((( ))))))))';
let b = '((((()))))';
let c = '(((( ()))() )  ))))))))';
const d = '))))   ('

console.log(parenthesis (a))
console.log(parenthesis (b))
console.log(parenthesis (c))
console.log(parenthesis (d))