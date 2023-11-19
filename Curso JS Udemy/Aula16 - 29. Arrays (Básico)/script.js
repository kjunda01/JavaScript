// 29. Arrays (Básico)

//            012345678910
const nome = 'Sinval Junior';

//               0       1        2
const alunos = ['Luiz', 'Maria', 'João', ['1', '2', '3', '4'], true, 1, NaN, undefined, Infinity];

console.log(alunos[3]);

console.log(nome[0]);
console.log(nome.charAt(0));

console.log(alunos.length);

alunos[alunos.length] = 'Giovana';
console.log(alunos);
alunos.push('Tiulinha');
console.log(alunos);
alunos.pop();
console.log(alunos);
alunos.unshift('Dulce');
console.log(alunos);
alunos.shift();
console.log(alunos);