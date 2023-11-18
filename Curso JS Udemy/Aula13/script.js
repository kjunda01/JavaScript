// 24. Mais sobre strings

let umaString = 'O rato roeu a roupa do Rei de Roma.';

console.log(umaString.indexOf('rato'));

// Achar o indice, começando pelo parâmetro
console.log(umaString.indexOf('roupa', 5));


console.log(umaString.lastIndexOf('Rei', 3));


console.log(umaString.match(/[a-z]/g));

// replace no 1 item encontrado
console.log(umaString.replace('o', 'Novo'));

// replace em todos os itens da string, usando regex
console.log(umaString.replace(/r/g, "#"));

// comprimento da string
console.log(umaString.length);

console.log(umaString.slice(-10));

let palavras = umaString.split(' ');

console.log(umaString.split(' '));

console.log(palavras.length);

console.log(umaString.toUpperCase());

console.log(umaString.toLowerCase());