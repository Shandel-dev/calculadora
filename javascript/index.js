const tela = document.getElementById('display')
const clear = document.getElementById('clear')


function num(number) {
    tela.value += number
}

clear.addEventListener('click', (e) => {
    tela.value = ""
})

function deleteCalc() {
    tela.value = tela.value.slice(0, -1)
}

function operacao(ope) {
    if (!tela.value.includes("*") && !tela.value.includes("/") && !tela.value.includes("-") && !tela.value.includes("+")) {
        tela.value += ope
        return ope
    } else {
        tela.value = tela.value.slice(0, -1)
        tela.value += ope
        return ope
    }
}

function calcular() {
    let resultado = 0

    resultado = eval(tela.value)

    tela.value = resultado
}