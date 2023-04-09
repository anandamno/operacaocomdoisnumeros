alert ("Digite dois números")

let firstNumber = prompt("Digite o primeiro número")
let secondNumber = prompt("Digite o segundo número")

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

const sum = firstNumber + secondNumber
const sub = firstNumber - secondNumber
const multi = firstNumber * secondNumber
const div = (firstNumber / secondNumber).toFixed(2)
const restDiv = firstNumber % secondNumber

alert ("A soma dos dois números é: " + sum)
alert ("A subtração dos dois números é: " + sub)
alert ("A multiplicação dos dois números é: " + multi)
alert ("A divisão dos dois números é: " + div)
alert ("O resto da divisão dos dois números é: " + restDiv)

if (sum % 2 == 0) { 
    alert (`A soma dos dois número é par: ${sum}`)
} else {
    alert (`A soma dos dois números é ímpar: ${sum}`)
}

if (firstNumber == secondNumber) {
    alert (`Os números inseridos ${firstNumber} e ${secondNumber} são iguais`)
} else {
    alert (`Os números inseridos ${firstNumber} e ${secondNumber} são diferentes`)
}



