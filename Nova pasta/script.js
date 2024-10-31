let formulario = window.document.querySelector('.formulario');

formulario.addEventListener('submit' , function(event){
    //impede de enviar respota ao servidor
    event.preventDefault()

    let email = document.querySelector('#email').value;
    let senha = document.querySelector('#senha').value;

    console.log(email,senha)
    
    let resultado = document.querySelector('#resultado')

    resultado.innerHTML += email,senha
})