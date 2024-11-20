"use strict";
const multiplica = (a, b) => a * b;
class Saudacao {
    constructor(nome) {
        this.nome = nome;
    }
    dizOi() {
        return `${this.nome} diz oi!`;
    }
}
const Maria = new Saudacao('Maria');
console.log(Maria.dizOi());
const Elias = new Saudacao('Elias');
console.log(Elias.dizOi());
console.log(multiplica(10, 2));
