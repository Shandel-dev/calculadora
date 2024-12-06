const tela = document.getElementById('display')
const clear = document.getElementById('clear')


function num(number) {
    tela.value += number
}

clear.addEventListener('click', (e) => {
    tela.value = ""
})

function deleteCalc(){
    tela.value = tela.value.slice(0, -1)
}

function operacao(ope){
    if(!tela.value.includes("*") && !tela.value.includes("/") && !tela.value.includes("-") && !tela.value.includes("+")){
        tela.value += ope
    }else{
        tela.value = tela.value.slice(0, -1)
        tela.value += ope
    }
}

function calcular() {
    operador = null

    if (tela.value.includes("*")) {
        operador = "*"
    }
    if (tela.value.includes("/")) {
        operador = "/"
    }
    if (tela.value.includes("-")) {
        operador = "-"
    }
    if (tela.value.includes("+")) {
        operador = "+"
    }

    let numeros = tela.value.split(operador)

    let resultado = 0
    switch (operador) {
        case "*":
            resultado = numeros[0] * numeros[1]
            break
        case "/":
            resultado = numeros[0] / numeros[1]
            break
        case "-":
            resultado = numeros[0] - numeros[1]
            break
        case "+":
            resultado = Number(numeros[0]) + Number(numeros[1])
            break
    }

    tela.value = resultado
}
