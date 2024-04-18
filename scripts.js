const formulario = document.querySelector('.formulario-fale-conosco')
const botaoPrincipal = document.querySelector('.botao-entre-contato')
const mascara = document.querySelector('.mascara-formulario')

function show() {
    formulario.style.left = "50%"
    formulario.style.transform = "translateX(-50%)"
    mascara.style.visibility = "visible" 
}

function hide() {
    formulario.style.left = "-300px"
    formulario.style.transform = "translateX(0%)"
    mascara.style.visibility = "hidden"
}

mascara.addEventListener('click', hide)
botaoPrincipal.addEventListener('click', show)