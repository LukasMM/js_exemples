// exercicio 1
alert("Hello World!")

// exercicio 2
let numberSumOne = Number(prompt("Digite o primeiro valor para soma:"))
let numberSumTwo = Number(prompt("Digite o segundo valor para soma:"))

alert(`A soma entre os dois números é: ${numberSumOne + numberSumTwo}`)

// exercicio 3
let ifNumber = prompt("Digite um valor para ver se é número:")
alert(`${isNaN(ifNumber) ? 'Não é um número' : 'É um número'}`)

// exercicio 4
let ifString = prompt("Digite um valor para ver se é string:")
alert(`${isNaN(ifNumber) ? 'É uma string' : 'Não é uma string'}`)

// exercicio 5
let ifBoolean = prompt("Digite um valor para ver se é boolean:")
ifBoolean = (ifBoolean == "true" || ifBoolean == "false")
alert(`${ifBoolean ? 'É um booleano' : 'Não é um booleano'}`)

// exercicio 6
let numberSubOne = Number(prompt("Digite o primeiro valor para subtração:"))
let numberSubTwo = Number(prompt("Digite o segundo valor para subtração:"))

alert(`A subtração entre os dois números é: ${numberSubOne - numberSubTwo}`)

// exercicio 7
let numberMultOne = Number(prompt("Digite o primeiro valor para multiplicação:"))
let numberMultTwo = Number(prompt("Digite o segundo valor para multiplicação:"))

alert(`A multiplicação entre os dois números é: ${numberMultOne * numberMultTwo}`)

// exercicio 8
let numberDivOne = Number(prompt("Digite o primeiro valor para divisão:"))
let numberDivTwo = Number(prompt("Digite o segundo valor para divisão:"))

alert(`A divisão entre os dois números é: ${numberDivOne / numberDivTwo}`)

// exercicio 9
let isPair = Number(prompt("Digite um número para ver se é par:"))

alert(`${isPair % 2 === 0 ? 'É um número par' : 'Não é um número par'}`)

// exercicio 10
let isOdd = Number(prompt("Digite um número para ver se é impar:"))

alert(`${isOdd % 2 !== 0 ? 'É um número impar' : 'Não é um número impar'}`)
