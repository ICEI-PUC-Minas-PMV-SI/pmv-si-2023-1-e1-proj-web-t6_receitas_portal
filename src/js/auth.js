let url = window.location.href

const token = localStorage.getItem('token') ? true : false;
document.addEventListener('DOMContentLoaded', function(){
  if(!token){
    //alert('usuário não logado')
    window.location.href = window.location.href.includes('src/html') ? "../html/login.html" : "../src/html/login.html"; 
  }
})

logout.addEventListener('click', function(){
    localStorage.removeItem('token')
    localStorage.removeItem('email')
    localStorage.removeItem('usuario')
})
