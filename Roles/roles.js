var a = parseInt(Math.random()*10)
var img = window.document.querySelector('img#img')
var botao = window.document.querySelector('input#botao')


botao.addEventListener('click',carregar)

function carregar(){

b = parseInt(Math.random()*10)

if(b!=a){a=b}else{carregar()}

img.src = `${a}.jpg`
}