//Add your firebase config here (AUTH and RealtimeDb)
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import {getDatabase} from 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    //add config here
    apiKey: "AIzaSyAjVqw5UIGoUw5r3gaDWXq9X56m0LyW2v0",
    authDomain: "aromatic-e8029.firebaseapp.com",
    databaseURL: "https://aromatic-e8029-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "aromatic-e8029",
    storageBucket: "aromatic-e8029.appspot.com",
    messagingSenderId: "515601554349",
    appId: "1:515601554349:web:574fbd9e39ee165e4bdf24",
    measurementId: "G-K7851C5R02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getDatabase(app);
