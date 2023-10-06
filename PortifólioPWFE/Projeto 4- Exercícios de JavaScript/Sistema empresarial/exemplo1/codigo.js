
var n1 = document.getElementById("n1")
var n2 = document.getElementById("n2")
var res = document.getElementById("res")

function somar() {
    res.innerHTML = `<p style="color:wite">O resultado é ${Number(n1.value)+Number(n2.value)}</p>`
}

function subtrair() {
    res.innerHTML = `<p style="color:wite">O resultado é ${Number(n1.value)-Number(n2.value)}</p>`
}

function multiplicar() {
    res.innerHTML = `<p style="color:wite">O resultado é ${Number(n1.value)*Number(n2.value)}</p>`
}

function dividir() {
    if (n2.value == 0){
        res.innerText = "Não existe divisão por 0!"
    }else
    res.innerHTML = `<p style="color:wite">O resultado é ${Number(n1.value)/Number(n2.value)}</p>`
}

function potencia() {
    res.innerHTML += `<p>O resultado se ${n1.value} elevado á ${n2.value} potência é ${Math.pow(Number(n1.value)), (Number(n2.value))}</p>`
}

function raiz() {
    res.innerHTML += `<p>O resultado de ${n1.value} com raiz de ${n2.value} é ${Math.pow(Number(n1.value), 1 / Number(n2.value))}</p>`
}
function limpa(){
    n1.value=""
    n2.value=""
    res.innerHTML=" Aqui vai o resultado ..."
}
