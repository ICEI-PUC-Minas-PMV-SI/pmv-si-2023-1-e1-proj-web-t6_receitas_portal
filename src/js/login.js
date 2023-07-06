function onChangeEmail() {
    toggleEmailErrors();
}
function onChangePassword() {
    togglePasswordErrors();
}

function toggleEmailErrors() {
    let email = document.getElementById('email').value;
    if (!email) {
        document.getElementById('email-required-error').style.display = "block";
    } else {
        document.getElementById('email-required-error').style.display = "none";
    }
    
    if (validateEmail(email)) {
        document.getElementById('email-invalid-error').style.display = "none";
    } else {
        document.getElementById('email-invalid-error').style.display = "block";
    }
}
function togglePasswordErrors() {
    const password = document.getElementById('password').value;
    if (!password) {
        document.getElementById('password-required-error').style.display = "block";
    } else {
        document.getElementById('password-required-error').style.display = "none"; 
    }
}
function login() {
   const form = document.querySelector('#loginForm'); 
  firebase.auth().signInWithEmailAndPassword(form.email.value, form.password.value
  ).then(response => {
    localStorage.setItem('token', 7)
    window.location.href = "../index.html";
  }).catch(error => {
    alert('usuário inexistente')
    console.log('error', error)
  });
    
}
function register() {
    window.location.href = "cadastro.html"
}

function validateEmail(email) {
     return /\S+@\S+\.\S+/.test(email);
} 