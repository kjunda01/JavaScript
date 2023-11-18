// pedir para o usuário digitar o seu nome
let nome = prompt('Digite seu nome:')
let letras = nome.length;
let segundaLetra = nome[1];
let primeiroIndiceLetraLetra = nome.indexOf('a');
let ultimoIndiceLetraLetra = nome.lastIndexOf('a');
let tresUltimasLetras = nome.slice(-3);
let palavrasDoNome = nome.split(' ');
let nomeMaiusculo = nome.toUpperCase();
let nomeMinusculo = nome.toLowerCase();


document.write(`
    Seu nome é: <strong>${nome}</strong>.<br>
    Seu nome tem <strong>${letras}</strong> letras.<br>
    A segunda letra do seu nome é <strong>${segundaLetra}</strong>.<br>
    Qual o primeiro índice da letra "A" no seu nome? <strong>${primeiroIndiceLetraLetra}</strong>.<br>
    Qual o último índice da letra "A" no seu nome? <strong>${ultimoIndiceLetraLetra}</strong>.<br>
    As últimas 3 letras do seu nome são: <strong>${tresUltimasLetras}</strong>. <br>
    As palavras do seu nome são: <strong>${palavrasDoNome}</strong>.<br>
    Seu nome com letras maiúsculas: <strong>${nomeMaiusculo}</strong>.<br>
    Seu nome com letras minúsculas: <strong>${nomeMinusculo}</strong>.
`);
