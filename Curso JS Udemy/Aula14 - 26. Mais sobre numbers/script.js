// 26. Mais sobre numbers

let numero1 = 1;
let numero2 = 0.1;

// para ver o binario daquele numero
console.log(numero1.toString(2));

// para arredondar um numero para cima
console.log(numero1.toFixed(2));

// para checar se um numero é inteiro
console.log(Number.isInteger(numero1));

// 
let temp = numero1 * 'Ola';
console.log(temp); // NaN

console.log(Number.isNaN(temp))


console.log(numero1 + numero2);