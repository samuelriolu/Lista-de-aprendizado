const nome = prompt("Qual o seu nome?");

alert(`Olá, ${nome}! Seja bem-vindo(a)!`);

const num1 = Number(prompt("Digite o primeiro número:"));
const num2 = Number(prompt("Digite o segundo número:"));

const soma = num1 + num2;
const subtracao = num1 - num2;
const multiplicacao = num1 * num2;
const divisao = num1 / num2;

alert(`Soma: ${soma}
Subtração: ${subtracao}
Multiplicação: ${multiplicacao}
Divisão: ${divisao}`);

const idade = Number(prompt("Qual a sua idade?"));

if (idade >= 18) {
    alert("Você é triste!");
} else {
    alert("Você é feliz ainda!");
}

const numero = Number(prompt("Digite um número:"));

if (numero % 2 === 0) {
    alert("O número é par!");
} else {
    alert("O número é ímpar!");
}

const n1 = Number(prompt("Digite o primeiro número:"));
const n2 = Number(prompt("Digite o segundo número:"));
const n3 = Number(prompt("Digite o terceiro número:"));

const maior = Math.max(n1, n2, n3);

alert(`O maior número é: ${maior}`);

const nota = Number(prompt("Digite a nota do aluno:"));

if (nota >= 7) {
    alert("Aprovado!");
} else if (nota >= 5) {
    alert("Recuperação!");
} else {
    alert("Reprovado!");
}

const preco = Number(prompt("Digite o preço do produto:"));
const quantidade = Number(prompt("Digite a quantidade:"));

let total = preco * quantidade;

if (quantidade > 10) {
    total = total * 0.90;
    alert(`Você ganhou 10% de desconto!
Valor total: R$ ${total}`);
} else {
    alert(`Valor total: R$ ${total}`);
}

const valor1 = Number(prompt("Digite o primeiro número:"));
const valor2 = Number(prompt("Digite o segundo número:"));
const operador = prompt("Digite o operador (+, -, * ou /):");

let resultado;

if (operador === "+") {
    resultado = valor1 + valor2;
} else if (operador === "-") {
    resultado = valor1 - valor2;
} else if (operador === "*") {
    resultado = valor1 * valor2;
} else if (operador === "/") {
    resultado = valor1 / valor2;
} else {
    resultado = "Operador inválido!";
}

alert(`Resultado: ${resultado}`);

const anoNascimento = Number(prompt("Digite seu ano de nascimento:"));
const anoAtual = new Date().getFullYear();

const idadeAtual = anoAtual - anoNascimento;

if (idadeAtual >= 18) {
    alert(`Você tem aproximadamente ${idadeAtual} anos e já pode tirar carteira de motorista.`);
} else {
    alert(`Você tem aproximadamente ${idadeAtual} anos e ainda não pode tirar carteira de motorista.`);
}

const temperatura = Number(prompt("Digite a temperatura em Celsius:"));

if (temperatura < 18) {
    alert("Está frio!");
} else if (temperatura <= 28) {
    alert("Está ameno!");
} else {
    alert("Está quente!");
}

const numero1 = Number(prompt("Digite o primeiro número:"));
const numero2 = Number(prompt("Digite o segundo número:"));

if (numero1 > numero2) {
    alert("O primeiro número é maior que o segundo.");
} else if (numero1 < numero2) {
    alert("O primeiro número é menor que o segundo.");
} else {
    alert("Os dois números são iguais.");
}