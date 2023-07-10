import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getFirestore, query, collection, getDocs } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyBTNonozZmbfBQoCJsy8pEbTu01kOtsx6U",
    authDomain: "projeto-chefsocial.firebaseapp.com",
    projectId: "projeto-chefsocial",
    storageBucket: "projeto-chefsocial.appspot.com",
    messagingSenderId: "863026675035",
    appId: "1:863026675035:web:e41777c5227660f15f6e7e",
    measurementId: "G-ES7F8X9SP5"
};
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

async function getUsuarios() {

    const usuario = document.getElementById('usuario');
    const email = document.getElementById('email');  
    email.innerHTML = localStorage.getItem('email');

    if (localStorage.getItem('usuario').length <= 0) {   
       
        usuario.innerHTML = 'Não Encontrado';
        localStorage.setItem('usuario','')

        const emailBusca = localStorage.getItem('email');

        const q = query(collection(db, "Users"));

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {       
            if (!!doc.data().email && doc.data().email.toLowerCase().includes(emailBusca.toLowerCase())){
                localStorage.setItem('usuario',doc.data().usuario);
                usuario.innerHTML =  localStorage.getItem('usuario');
            }
        });

    }else{
        usuario.innerHTML =  localStorage.getItem('usuario');
    }
 }

getUsuarios();