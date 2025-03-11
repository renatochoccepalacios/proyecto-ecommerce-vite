import { getFirestore } from "firebase/firestore";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA_3oD5a5j3cu7w4cd--nucENEdDUtjkzM",
    authDomain: "bd-ecommerce-nike.firebaseapp.com",
    databaseURL: "https://bd-ecommerce-nike-default-rtdb.firebaseio.com",
    projectId: "bd-ecommerce-nike",
    storageBucket: "bd-ecommerce-nike.firebasestorage.app",
    messagingSenderId: "638944160112",
    appId: "1:638944160112:web:cc3bb9fff9b38956fdc7b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);