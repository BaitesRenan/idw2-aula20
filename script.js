

function ola(){
    alert('Olá.')
}

function olaPessoa(nome){
    alert(nome + 'seja bem vindo')
}

function saudacao(){
    const nome = document.getElementById('nome').value
    alert('Olá' + nome)

}

function mouseSobre(){
    alert('O mouse está em cima')
}

function mouseFora(){
    alert('O mouse saiu!')
}

function textoModificado(){
    alert('O texto foi alterado.')

}
const user = document.getElementById('user')
function emFoco(){
    
    user.style.border = '3px solid green'
    user.style.backgroundColor = 'grey'

}

function semFoco(){
    user.style.border = '1 px solid black'
    user.style.background = 'white'
}