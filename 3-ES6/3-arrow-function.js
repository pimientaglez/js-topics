const myArrowFn = () => { console.log('arrow function')}

//myArrowFn();

const myArrowFn2 = x => { console.log(x) }

function myFn2(x){
    console.log(x)
}

//myArrowFn2(2);
//myFn2(2);

const myArrowFn3 = x => x*2

function myFn3(x){
    return x * 2;
}

//console.log(myArrowFn3(2));
//console.log(myFn3(2));

const myArrowFn4 = (x, y)=> (x + y)

function myFn4(x, y){
    return x + y;
}

console.log(myArrowFn4(3,4));
console.log(myFn4(3,4));


const myObj = {
    name: 'Ricardo',
    hobbies: ['read', 'write'],
    myFunc: function(val){
        this.hobbies.forEach((hobbie)=>{
            console.log(this.name, hobbie);
        })
    }
}
/* function myGlobalFunc(){
    console.log(this);
}
myGlobalFunc(); */
myObj.myFunc();
/* myObj.myFunc.call({name: 'Juan'}, 2);
myObj.myFunc.apply({name: 'Mario'},[3]); */
