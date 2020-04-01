function operacionSuma(a, b) {
    return a + b;
}

// pass a function to another function
function sumaCinco(x, callback) {
    return callback(5, x);
}

console.log(sumaCinco(10, operacionSuma))