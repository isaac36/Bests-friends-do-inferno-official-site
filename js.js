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




/*
switch(hora){

case(21): bola.src="fotos_redondas/bfi4.png"
break

case(22): bola.src="fotos_redondas/bfi4.png"
break

case(23): bola.src="fotos_redondas/bfi3.png"
break

case(0): bola.src="fotos_redondas/bfi2.png"
break

case(1): bola.src="fotos_redondas/bfi1.png"
break

case(2): bola.src="fotos_redondas/bfi5.png"
break

case(3): bola.src="fotos_redondas/bfi5.png"
break

case(4): bola.src="fotos_redondas/bfi5.png"
break

case(5): bola.src="fotos_redondas/bfi5.png"
break

case(6): bola.src="fotos_redondas/bfi5.png"
break

case(7): bola.src="fotos_redondas/bfi5.png"
break

case(8): bola.src="fotos_redondas/bfi5.png"
break

case(9): bola.src="fotos_redondas/bfi5.png"
break

case(10): bola.src="fotos_redondas/bfi5.png"
break

case(11): bola.src="fotos_redondas/bfi5.png"
break

case(12): bola.src="fotos_redondas/bfi5.png"
break

case(13): bola.src="fotos_redondas/bfi5.png"
break

case(14): bola.src="fotos_redondas/bfi5.png"
break

case(15): bola.src="fotos_redondas/bfi5.png"
break

case(16): bola.src="fotos_redondas/bfi5.png"
break

case(17): bola.src="fotos_redondas/bfi5.png"
break

case(18): bola.src="fotos_redondas/bfi5.png"
break

case(19): bola.src="fotos_redondas/bfi5.png"
break

case(20): bola.src="fotos_redondas/bfi5.png"
break

default: bola.src="fotos_redondas/bfi5.png"

break



}
*/