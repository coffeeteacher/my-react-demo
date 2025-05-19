// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDeQLN_ZnnmLCKcItfjpywnKkeiOFawCjc",
    authDomain: "react-auth8.firebaseapp.com",
    projectId: "react-auth8",
    storageBucket: "react-auth8.firebasestorage.app",
    messagingSenderId: "346831995244",
    appId: "1:346831995244:web:5dee6363b7ee2b9c2bb349"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();