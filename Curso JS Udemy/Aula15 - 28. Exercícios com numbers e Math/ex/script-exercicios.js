
const numeroUsuario = Number(prompt('Digite um número:'));

const numeroPrincipal = document.getElementById('numero-principal');
numeroPrincipal.innerHTML = `O seu número é: ${numeroUsuario}`;

const raizQuadrada = document.getElementById('raiz-quadrada');
let verificarRaizQuadrada = numeroUsuario ** 0.5;
raizQuadrada.innerHTML = verificarRaizQuadrada;

const inteiro = document.getElementById('verificar-numero-inteiro');
let verificarNumeroInteiro = Number.isInteger(numeroUsuario);
inteiro.innerHTML = verificarNumeroInteiro;

const selecionarNaN = document.getElementById('verificar-numero-NaN');
let conferirNan = Number.isNaN(numeroUsuario);
selecionarNaN.innerHTML = conferirNan;

const selecionarArredBaixo = document.getElementById('arredondar-numero-para-baixo');
let arredondarParaBaixo = Math.floor(numeroUsuario);
selecionarArredBaixo.innerHTML = arredondarParaBaixo;

const selecionarArredCima = document.getElementById('arredondar-numero-para-cima');
let arredondarParaCima = Math.ceil(numeroUsuario);
selecionarArredCima.innerHTML = arredondarParaCima;

const selecionarCasasDecimais = document.getElementById('casas-decimais');
selecionarCasasDecimais.innerHTML = numeroUsuario.toFixed(2);


/*const numeroUsuario = Number(prompt('Digite um número'));
const numeroPrincipal = document.getElementById('numero-principal');
const texto = document.getElementById('texto')

// numeroPrincipal.innerHTML = numeroUsuario;

texto.innerHTML += `<p>Seu número é <strong>${numeroUsuario}</strong>. </p>`;
texto.innerHTML += `<p>Seu número somando 2 é ${numeroUsuario + 2}. </p>`;
texto.innerHTML += `<p>Raiz quadrada de ${numeroUsuario} é ${numeroUsuario ** 0.5}. </p>`;
texto.innerHTML += `<p>Seu número é inteiro? ${Number.isInteger(numeroUsuario)}. </p>`;
texto.innerHTML += `<p>É um NaN? ${Number.isNaN(numeroUsuario)}. </p>`;
texto.innerHTML += `<p>O número ${numeroUsuario} arredondado para <strong>cima</strong> fica ${Math.ceil(numeroUsuario)}. </p>`;
texto.innerHTML += `<p>O número ${numeroUsuario} arredondado para <strong>baixo</strong> fica ${Math.floor(numeroUsuario)}. </p>`;
texto.innerHTML += `<p>Seu número somente com duas casas decimais: ${numeroUsuario.toFixed(2)}. </p>`;
*/