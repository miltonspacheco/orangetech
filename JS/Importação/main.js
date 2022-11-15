/*
const pessoa = {
    nome: 'milton'
}

const {nome} = pessoa;
mesma coisa que: 
const nome = pessoa.nome;

------------------------------------
Portanto

const {gets, print} = require('./auxiliar_functions')
print(gets()); 

Mesma coisa que: 

const funcoes = require('./auxiliar_functions')
console.log(funcoes.gets());
*/

const {gets, print} = require('./auxiliar_functions');

const getsSize = gets();
let maior = 0;

for (let i=0; i<5; i++){
    const entrada = gets();
    if (entrada > maior){
        maior = entrada;
    }
}

print(maior);