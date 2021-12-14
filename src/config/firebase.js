import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDLUye-ilbFAgN7tFV2z5UF6o8rM4g309s",
  authDomain: "fakebook-c9690.firebaseapp.com",
  projectId: "fakebook-c9690",
  storageBucket: "fakebook-c9690.appspot.com",
  messagingSenderId: "140102234576",
  appId: "1:140102234576:web:5270d0b3f02febc13809d5",
};

// Initialize Firebase
initializeApp(firebaseConfig);

// Initialize services
const db = getFirestore();
export const auth = getAuth();

export default db;
