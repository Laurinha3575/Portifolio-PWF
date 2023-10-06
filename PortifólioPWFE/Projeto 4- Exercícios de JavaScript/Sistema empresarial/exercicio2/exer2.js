function calcular(){
    document.getElementById("res").innerHTML=""
    
    let horatrabalho = Number(document.getElementById("salario").value)/200
    document.getElementById("res").innerHTML+=`<p>O valor da hora trabalhada é R$ ${horatrabalho.toFixed(2)}</p>`

    let qtdhora = Number(document.getElementById("quant_hr_normais").value)
    let valorhoraextra = horatrabalho*qtdhora
    document.getElementById("res").innerHTML+=`<p>O valor da hora extra normal é R$ ${valorhoraextra.toFixed(2)}</p>`

    let qtdhorafds = Number(document.getElementById("quant_hr_fds").value)
    let valorhoraextrafds = horatrabalho*qtdhorafds*1.5
    document.getElementById("res").innerHTML+=`<p>O valor da hora extra de final de semana é R$ ${valorhoraextrafds.toFixed(2)}</p>`

    let total = valorhoraextra + valorhoraextrafds
    document.getElementById("res").innerHTML+=`<p>O valor total a receber é R$ ${total.toFixed(2)}</p>`
}