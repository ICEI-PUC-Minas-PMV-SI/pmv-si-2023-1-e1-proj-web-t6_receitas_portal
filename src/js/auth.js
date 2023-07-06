let url = window.location.href
console.log('beleza', url)

const token = localStorage.getItem('token') ? true : false;
document.addEventListener('DOMContentLoaded', function(){
  if(!token){
    alert('usuário não logado')
    window.location.href = url.includes('src') ? "../src/html/login.html" : "..//html/login.html" 
  }
})

logout.addEventListener('click', function(){
    localStorage.removeItem('token')
})
