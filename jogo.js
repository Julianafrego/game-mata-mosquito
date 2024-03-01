var altura = 0
var largura = 0
var vidas = 1
var tempo = 15

var criaMosquitoTempo = 1500

var nivel = window.location.search // retorna apenas tudo o que está a direito do ponto ? incluindo ele proprio
nivel = nivel.replace('?', '')  // irá substiutir o ? por um caracter vazio 
if (nivel == 'facil') {
    criaMosquitoTempo = 1500
} else if(nivel ==  'medio'){
    
    criaMosquitoTempo = 1300
}else if (nivel =='dificil'){
      
    criaMosquitoTempo = 1000
}

function ajustarPalco(){
     altura = window.innerHeight;
    largura = window.innerWidth;
    console.log(largura, altura ) // 636 x 207
}
     var cronometro = setInterval(function() {
        tempo -= 1

        if(tempo < 0) {
            clearInterval(cronometro)
            clearInterval(criarMosca)
            window.location.href= 'vitoria.html'
        } else {
            document.getElementById('cronometro').innerHTML = tempo  
        }  //  inner - valor contido entre as tags
     }, 1000)


ajustarPalco()

function posicaoAleatoria() {

    // remover a mosca anterior,  caso ela exista, para só ter uma mosca na tela por vez
    if(document.getElementById('mosca')) { // se mosca existir
    document.getElementById('mosca').remove()
        
        //remoção de vidas
        if  (vidas > 3) {
           
            window.location.href= 'fimDeJogo.html'
        } else {
        document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"
            vidas++
        }
    }


    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY =  Math.floor(Math.random() * altura)  - 90 // para evitar que a imagen passe do limite da tela

    posicaoX = posicaoX  < 0 ? 0 : posicaoX // se posição for menor que zero recebe zero, se nao recebe ela mesma
    posicaoY = posicaoY < 0 ? 0 : posicaoY
// math.random gera um numero aleatorio, 
// ao multiplica esse número  por largura ele vai dar uma posição em relação à tela
// e math.floor irá arredondar esse valor 


    console.log(posicaoX, posicaoY)

// criar o elemento html, usando o dom
// dom - arvore de elementos, pode-se remov3e ou add 
// elementos a ele atraves do api, usando o objeto document
//var paragrafo = document.createElement('p') //cria um padrão
// paragrafo.style.position = 'absolute' //coloca na posição absol



    var mosca = document.createElement('img') // cria o elemento e armazena
    mosca.src = 'imagens/mosca.png'  // coloca a imagem da mosca no src
    mosca.className = tamAleatorio() + ' ' + ladoAleatoria()
    mosca.style.left = posicaoX  + 'px' //para colocar a posição em pixels
    mosca.style.top = posicaoY + 'px'
    mosca.style.position =  'absolute' // para ser aplicada o elemento precisa ser absoluto
    mosca.id =  'mosca' //adicionado id para poder remover essa imagem
    document.body.appendChild(mosca)
    mosca.onclick = function()  {
        this.remove()    // this - ajusta o contexto do metodo, referencia o elemento
    }  // captura o evento de click sobre o elemento

    console.log(ladoAleatoria())

  
}


function tamAleatorio() { // moscas em varios tamanhos 
    var classe = Math.floor(Math.random() * 3)   // numero entre 0 e 2.99 
    console.log(classe)

    switch(classe) {
        case 0:
            return 'mosca1'
        case 1:
            return 'mosca2'
        case 2:
            return 'mosca3'
    }
}

function ladoAleatoria() {
    var classe2 = Math.floor(Math.random() * 2)   // numero entre 0 e 1.99
 

    switch(classe2) {
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    
    }
}
