// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyBiKJ0_2X9kJ79v2630SaZqzupX-24BBjI",
    authDomain: "store-91f22.firebaseapp.com",
    projectId: "store-91f22",
    storageBucket: "store-91f22.appspot.com",
    messagingSenderId: "149935324168",
    appId: "1:149935324168:web:4b273399fb5eaa74a6a5bd"
  };

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);

  
export { storage, db };
