// 32. Objetos (Básico)
/*
const lista = [1, 2, 3];

lista.push(4);
lista[0] = 'Sinval';
lista = 'Outra';
console.log(lista);


const nome01 = 'Sinval';
const sobrenome01 = 'Silva Junior';
const idade01 = 26;

const nome02 = 'Maria';
const sobrenome02 = 'Silva';
const idade02 = 55;


function criarPessoa(nome, sobrenome, idade) {
    return {nome, sobrenome, idade};
};

const pessoa1 = criarPessoa('Sinval', 'Silva Junior', 26)
const pessoa2 = criarPessoa('Sinvall', 'Silva Juniorr', 27)
const pessoa3 = criarPessoa('Sinvalll', 'Silva Juniorrr', 28)
const pessoa4 = criarPessoa('Sinvallll', 'Silva Juniorrrr', 29)
const pessoa5 = criarPessoa('Sinvalllll', 'Silva Juniorrrr', 30)
*/

const pessoaUm = {
    nome: 'Sinval',
    sobrenome: 'Silva Júnior',
    idade: 26,

    fala() {
        console.log(`[${this.nome}] tem como sobrenome [${this.sobrenome}] e possui [${this.idade}] anos.`)
    },

    incrementaIdade(){
        this.idade++;
    }

};

pessoaUm.fala();
pessoaUm.incrementaIdade();
pessoaUm.fala();
pessoaUm.incrementaIdade();
pessoaUm.fala();
pessoaUm.incrementaIdade();
pessoaUm.fala();