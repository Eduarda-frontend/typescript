const multiplica = (a: number, b: number): number => a * b;

class Saudacao {
    nome:string;

    constructor(nome:string) {
        this.nome = nome;
    }
    dizOi() {
        return `${this.nome} diz oi!`
    }
}

const Maria = new Saudacao('Maria');
console.log(Maria.dizOi());

console.log(multiplica(10,2));