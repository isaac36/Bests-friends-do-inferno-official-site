var data = new Date
var hora = data.getHours()

var bola = window.document.querySelector('img#imagem')
//bola.addEventListener('click',add)



function add(){
    if(hora==23){hora=0}else{hora++}
    bola.src=`bfi${hora}.jpg`
}

bola.src=`bfi${hora}.jpg`

console.log(bola.src)


msghora = window.document.getElementsByClassName('msg')[0]
msghora.innerText=`Já são ${hora} horas man NAM!`





msg = window.document.getElementsByClassName('msg')[1]



switch (hora){


    case(21): msg.innerText="Hora de hackear os outros"
    break
    
    case(22): msg.innerText="Hora do exercício noturno"
    break
    
    case(23): msg.innerText="Hora de assaltar a geladeira"
    break
    
    case(0): msg.innerText="Hora de ir mimir"
    break
    
    case(1): msg.innerText="Hora de sonhar com a perfeita"
    break
    
    case(2): msg.innerText="Hora de fazer pose enquanto dorme"
    break
    
    case(3): msg.innerText="Hora dos fantasmas, cuidado"
    break
    
    case(4): msg.innerText="Hora de pular uns muros"
    break
    
    case(5): msg.innerText="Hora da soneca do gato"
    break
    
    case(6): msg.innerText="Hora de pensar em ressuscitar"
    break
    
    case(7): msg.innerText="Bundinha Grupo!"
    break
    
    case(8): msg.innerText="Hora de se arrumar"
    break
    
    case(9): msg.innerText="Hora de jogar quete com o gulão"
    break
    
    case(10): msg.innerText="Hora de falar com os broder"
    break
    
    case(11): msg.innerText="Hora da gameplay"
    break
    
    case(12): msg.innerText="Hora mandar tomar banho"
    break
    
    case(13): msg.innerText="Hora da putaria"
    break
    
    case(14): msg.innerText="Hora de fazer pose"
    break
    
    case(15): msg.innerText="Hora da fotinha bala"
    break
    
    case(16): msg.innerText="Hora de correr 10 metros e morrer"
    break
    
    case(17): msg.innerText="Hora do São Braz"
    break
    
    case(18): msg.innerText="Hora do dedo que não é legal"
    break
    
    case(19): msg.innerText="Hora de estudar pro MEC"
    break
    
    case(20): msg.innerText="Hora de fazer carinho no gatim"
    break
    
    default: msg.innerText="Mensagem padrao"
    
    break
    
    


}

