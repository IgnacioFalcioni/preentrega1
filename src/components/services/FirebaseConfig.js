
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCxcvGTJ3lxNlhrGOGAI5RaYph1R2lqHqQ",
  authDomain: "petclub-5f9b7.firebaseapp.com",
  projectId: "petclub-5f9b7",
  storageBucket: "petclub-5f9b7.appspot.com",
  messagingSenderId: "677914283314",
  appId: "1:677914283314:web:bdf636a8306fe27b655b2b",
};



const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)