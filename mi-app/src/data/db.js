import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCPPNALfq-dCZvBmbPniOEFpa8CGiPgRdo",
  authDomain: "practica-a5ec2.firebaseapp.com",
  projectId: "practica-a5ec2",
  storageBucket: "practica-a5ec2.firebasestorage.app",
  messagingSenderId: "760888238559",
  appId: "1:760888238559:web:4dfcdaac085a6c6ca6646a",
  measurementId: "G-DWD3BF7D49"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export default db;