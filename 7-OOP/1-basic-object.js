const cuentaBanco = {
    saldo: 100,
    nombre: 'Ana',
    num_cuenta: 12345,
    actualizarSaldo: function(nuevoSaldo){
        if(typeof(nuevoSaldo) === 'number'){
            this.saldo = nuevoSaldo;
            return this.saldo;
        }else{
            return 'Formato erroneo'
        }
    }
}

console.log(cuentaBanco.actualizarSaldo(200));












const book1 = {
    title: 'Book 1',
    author: 'Mario',
    year: '2020',
    getSummary: function(){
        return `${this.title} fue escrito por ${this.author} en ${this.year}`
    }
}