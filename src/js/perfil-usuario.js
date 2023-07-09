document.addEventListener('DOMContentLoaded', function onLoad() {
    recuperaDadosUsuario();
})

function recuperaDadosUsuario(){
    const usuario = document.getElementById('usuario');
    const email = document.getElementById('email');
    usuario.innerHTML = localStorage.getItem('usuario');
    email.innerHTML = localStorage.getItem('email');

}
