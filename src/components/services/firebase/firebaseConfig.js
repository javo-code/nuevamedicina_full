import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth'; // Importa getAuth desde 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBu-kLdrBLbRKN7RUZdcadQqg48Qg3NVCs",
  authDomain: "nuevamedicina-ecommerce.firebaseapp.com",
  projectId: "nuevamedicina-ecommerce",
  storageBucket: "nuevamedicina-ecommerce.appspot.com",
  messagingSenderId: "556342454610",
  appId: "1:556342454610:web:bf2553590927783d9c328b",
  measurementId: "G-1H4DGNDMBZ"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app); // Agrega la exportación de auth
