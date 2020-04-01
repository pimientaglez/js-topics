const date = [04, 02, 2020];
const [day, month, year] = date;

/* console.log(day);
console.log(month);
console.log(year);

console.log(`Month is ${month}, day is ${day} and year is ${year}`); */

const persona = {
    name: 'Ricardo',
    age: 31,
    country: 'Mexico',
    state: 'Jalisco',
    work: 'epam',
    work2: 'bedu'
}

function sayHi({name, country, work}){
    console.log(`${name} is from ${country} and works at ${work}`);
}

sayHi(persona);