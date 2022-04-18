// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDKvezpJ-pmXAK7cwfxdhlJLaaTvP6TGZg",
    authDomain: "service-center-c7599.firebaseapp.com",
    projectId: "service-center-c7599",
    storageBucket: "service-center-c7599.appspot.com",
    messagingSenderId: "827785327592",
    appId: "1:827785327592:web:902eb71341737490d5aa5d"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;