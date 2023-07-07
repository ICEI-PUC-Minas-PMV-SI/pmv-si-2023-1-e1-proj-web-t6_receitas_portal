import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";

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
