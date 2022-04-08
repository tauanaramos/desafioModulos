const { calculaIdade, calculaIMC } = require('./desafioidade.js');

const anoNasc = process.argv[2];
const peso = process.argv[3];
const altura = process.argv[4];

const idade = calculaIdade(anoNasc);
const imc = calculaIMC(peso,altura);

console.log(calculaIdade(anoNasc));
console.log(calculaIMC(peso, altura));