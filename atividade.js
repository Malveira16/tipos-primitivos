//Questão 1
var nome = "João Vitor"
var idade = 28

console.log("Olá! meu nome é " + nome + " e eu tenho " + idade + " anos") 

//Questão 2
var nome = "João"
var cidade = "Recife"

console.log(nome + " é de " + cidade)

//Questão 3

var num1 = 10
var num2 = 5

var soma = num1 + num2
var subtracao = num1 - num2
var multiplicacao = num1 * num2
var divisao = num1 / num2

console.log("Soma: " + soma)
console.log("Subtração: " + subtracao)
console.log("Multiplicação: " + multiplicacao)
console.log("Divisão: " + divisao)

//Questão 4
var base = 4
var altura = 8

areaTriangulo = (base * altura)/ 2
console.log("A área do triângulo é: " + areaTriangulo)

//Questão 5
var nota1 = 8
var nota2 = 4
var nota3 = 6
var media = (nota1 + nota2 + nota3)/ 3
console.log("Média: " + media)

//Questão 6

var precoProduto = 60
var percentualDesconto = 15

var descontoAplicado = (60 * 15)/100
var precoFinal = precoProduto - descontoAplicado

console.log("Preço com desconto de 15%: " + precoFinal)

//Questão 7

var salarioBruto = 2826.65
var aliquota = 7.5
var impostoCalculado = ((2826.65 * 7.5) / 100).toFixed(2)
console.log("Salário Bruto: " + salarioBruto + "\nTaxa de 7,5%: " + impostoCalculado)

//Questão 8
var real = 50
var realDolar = (50 / 5.51).toFixed(2)

console.log(real + " Reais equivalem a " + realDolar + " Dólares")

//Questão 9

var temperaturaCelcius = 28
var temperaturaFahrenheit = ((temperaturaCelcius * (9/5)) + 32).toFixed(2)

console.log("Temperatura em Célcius: " + temperaturaCelcius + "\nTemperatura em Fahrenheit: " + temperaturaFahrenheit)
  
//Questão 10

var altura = 1.71
var peso = 65
var IMC = peso / (altura * altura)

console.log("O IMC de uma pessoa de 1,71m, com 65kg é de: " + IMC.toFixed(2))