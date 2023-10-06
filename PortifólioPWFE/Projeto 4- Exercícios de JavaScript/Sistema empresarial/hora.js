function atualizarDataHora() {
    const dataHora = new Date()
    const data = dataHora.toLocaleDateString()
    const hora = dataHora.toLocaleTimeString()
    document.getElementById('data').innerHTML = `Data: ${data} - Hora: ${hora}`
}
atualizarDataHora()
setInterval(atualizarDataHora, 1000)