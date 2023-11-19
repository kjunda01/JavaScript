// 23. Exercício com variáveis

let varA = 'A'; // b
let varB = 'B'; // c
let varC = 'C'; // a
const guardarValorDaVarA = varA;

/*
varA = varB;
varB = varC;
varC = guardarValorDoVarA;
*/

// Uma forma mais simplificada, usando listas (arrays)

[varA, varB, varC] = [varB, varC, varA]

console.log(varA, varB, varC)
