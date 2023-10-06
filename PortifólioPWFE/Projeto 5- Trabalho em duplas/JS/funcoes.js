// 1° Primeiro exercício jogo do sorteio
function sortear() {
    var number_user = parseInt(document.getElementById("number_user").value)
// aqui é usada a biblioteca Math e random para sortear apenas um número até 100.
    var numero = Math.floor(Math.random() * 99)+1
    var result = document.getElementById("result")
// para caso o usuário digite um número maior que 100 ou menor que 0.
    if (number_user < 1 || number_user > 100) {
        alert("*** Número errado! Preste atenção às REGRAS ***")
    } else {
        result.innerHTML = "Número sorteado: " + numero;
// tratamento de vencer ou perder o jogo. 
        if (number_user === numero) {
            result.innerHTML += "<br>Você venceu."
        } else {
            result.innerHTML += "<br>Você perdeu."
        }
    }
}
function limpar(){
    // funcao para limpar as entradas do jogo dos números e permitir que o usuario repita as acoes caso deseje
    number_user.value=""
    result.innerHTML="O número correto aparecerá aqui..."
}
// 2° Exercício, cálculo IMC
function calculo_imc(){
const res = document.getElementById("res")
// Link com o texto de resposta do calculo, para que ela se mantenha constante 
    // criar variavel, a partir dos Id criados no html
    let altura = Number(document.getElementById('altura').value)
    let peso = Number(document.getElementById('peso').value)
    // criar variavel do calculo
    let imc = peso / (altura * altura)

    // o "if" é o mesmo que o "se", no caso "se" o imc(que é a variavél do cálculo) for menor ou igual a 10, o programa devrá fazer isto
    if (imc <= 10){
        // o que o programa deve fazer
        // O innerHTML vai mudar o Html da variavel "res", que é a variavél do resultado
        res.innerHTML = `<p style="color:white" text-align:left > O seu valor é ${imc.toFixed(2)}, 
        valor muito baixo, por favor verifique os seus dados!<\p>`
    }
    // o "else if", é o mesmo que "senão se", será igual ao de cima, mas só passará para está etapa, caso a outra seja falsa
    else if (imc <= 18){
        res.innerHTML = `<p style="color:white" text-align:left >  O seu valor é ${imc.toFixed(2)}, 
        você está com o peso ABAIXO do ADEQUADO<\p>`
    }
    else if (imc <= 25){
        res.innerHTML = `<p style="color:white" text-align:left >  O seu valor é ${imc.toFixed(2)}, o seu peso está NORMAL<\p>`
    }

    else if (imc <= 30){
        res.innerHTML = `<p style="color:white" text-align:left >  O seu valor é ${imc.toFixed(2)}, você está com SOBREPESO, 
        fique atento!<\p>`
    }
    else if (imc <= 60){
        res.innerHTML = `<p style="color:white" text-align:left >  O seu valor é ${imc.toFixed(2)}, você está com OBESIDADE,
        procure ajuda!<\p>`
    }
    // O "else" é o mesmo que "senão", esta é a última opção, é parecida com os primeiros, mas ela só será realizada caso todas as outras sejam falsas
    else{
        res.innerHTML = `<p style="color:black" text-align:left >  O seu valor é ${imc.toFixed(2)}, valor muito alto, por favor 
        verifique os seus dados`
    }
}
function limpar2(){
    // funcao para limpar as entradas do calculo de imc e permitir que o usuario repita as acoes caso deseje
    altura.value=""
    peso.value=""
    result.innerHTML="O resultado aparecerá aqui..."
}
// 3° Exercício, cálculo da idade eleitoral
function calculo_voto(){
    //o comando new Date instrui o JavaScript a criar um novo objeto date e preenche-lo com a data atual.
    const datahora = new Date()
    const anoAtual = datahora.getFullYear()
    // criar variavel, a partir dos Id criados no html
    let ano_nasc = Number(document.getElementById('data_nasc').value)
    //calculo para saber a idade
    const idade = anoAtual - ano_nasc

    //definição da idade e se pode o não votar
    if (idade < 16){
        res.innerHTML = `<p style="color:white" text-align:left >Você tem ${idade} anos, idade insuficiente, para votar é necessário ter no 
        mínimo 16 anos<\p>`
    }
    // o || é o "e", ou seja se algo for isso "E" outra for aquilo fassa isso
    // um exemplo é se hoje está frio "E" chovendo, levarei um guarda chuva 
    else if (idade < 18 || idade >= 70){
        res.innerHTML = `<p style="color:white" text-align:left >Você tem ${idade} anos, o seu voto é facultativo, ou seja não é obrigatório votar<\p>`
    }

    else {
        res.innerHTML = `<p style="color:white" text-align:left >Você tem ${idade} anos, seu voto obrigatório!`
    }
   

}
function limpar3(){
    // funcao para limpar as entradas dos votos e permitir que o usuario repita as acoes caso deseje
    data_nasc.value=""
    result.innerHTML="Sua resposta aparecerá aqui..."
}
// Função para mudar a imagem selecionada - arquivo index.html
function mudaFoto(item){
    // funcao para mudar foto quando passar o mouse em cima dos botões (código também aproveitado a aula passada)
    if(item==1){
        document.getElementById("icone").src='img/principal.png'

    }else if(item==2){
        document.getElementById("icone").src='img/jogo.png'

    }else if(item==3){
        document.getElementById("icone").src='img/imc.png'

    }else if (item==4){
        document.getElementById("icone").src='img/voto.png'

    }
}
// Função para aparecer a horário atual segundo o horário de brasília
function horas() {
    // funcao para horas atualizarem com minutos e segundos (código de aulas passadas )
    var horario = document.getElementById("horario");
  
    var dataAtual = new Date();
    var data = dataAtual.toLocaleDateString()
    var hora = dataAtual.toLocaleTimeString()
    
    horario.innerText = `Data: ${data} - Hora: ${hora}` 
  
  }
  horas()
  setInterval(horas,1000)
