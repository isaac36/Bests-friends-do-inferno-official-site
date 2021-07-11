var a = parseInt(Math.random()*10)
var img = window.document.querySelector('img#img')
var botao = window.document.querySelector('input#botao')
var txt = window.document.querySelector('p#partiu')

botao.addEventListener('click',carregar)

function carregar(){

b = parseInt(Math.random()*10)

if(b!=a){a=b}else{carregar()}

img.src = `${a}.jpg`

let qual

switch(a){  

case(0): qual = 'Basquete'
break

case(1): qual = 'Beira mar'
break

case(2): qual = 'Casa do Vitão'
break

case(3): qual = 'Cinema'
break

case(4): qual = 'Cocó'
break

case(5): qual = 'Fute'
break

case(6): qual = 'KAI'
break

case(7): qual = 'Volei'
break

case(8): qual = 'Pastel'
break

case(9): qual = 'Pizza'
break

default: qual = ''
break

}





txt.innerText = `Partiu ${qual}`


}