/* Crear clase Cuenta 
propiedades:
    1 nombre
    2 numero_cuenta
    3 tipo_cuenta
    4 saldo

metodos:

    1 getName()
    2 getInfo()
    3 getSaldo()

    1 deposita(cantidad)
    1 retira(cantidad)
 */









class Cuenta {
    constructor(name, num_cta, tipo_cta, saldo){
        this.name = name;
        this.num_cta = num_cta;
        this.tipo_cta = tipo_cta;
        this.saldo = saldo;
    }

    getName() {
        return this.name;
    }
    getInfo() {
        return `
        Name:${this.name} 
        Acc Number: ${this.num_cta}
        Acc Type: ${this.tipo_cta}`;
    }
    getSaldo() {
        return this.saldo;
    }

    deposita(cantidad) {
        this.saldo += cantidad;
    }
    retira(cantidad) {
        if(cantidad <= this.saldo){
            this.saldo -= cantidad;
        } else {
            console.log('Saldo insuficiente')
        }
    }

}

const ricardo = new Cuenta('Ricardo', 123, 'ahorro', 1000)

console.log(ricardo.getInfo());
console.log(ricardo.getSaldo());
ricardo.deposita(1000)
ricardo.retira(30000)
console.log(ricardo.getSaldo());


