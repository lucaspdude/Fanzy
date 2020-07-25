import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/firestore';


const config = firebase.initializeApp({
    apiKey: "AIzaSyAAlF-CUfjtWKKaf0HF-kscT0zbfCNyV0E",
    authDomain: "safecircledev.firebaseapp.com",
    databaseURL: "https://safecircledev.firebaseio.com",
    projectId: "safecircledev",
    storageBucket: "safecircledev.appspot.com",
    messagingSenderId: "237786019497",
    appId: "1:237786019497:web:78b9aa523d7faf089cdbb8",
    measurementId: "G-K37X7234TK"
})

export const auth = firebase.auth();
export const database = firebase.firestore();


