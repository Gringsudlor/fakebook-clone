import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB45JjZPD8_ARnMGMPtxe9VaIv4MLix2gY",
  authDomain: "fakebook-47c38.firebaseapp.com",
  projectId: "fakebook-47c38",
  storageBucket: "fakebook-47c38.appspot.com",
  messagingSenderId: "837514779405",
  appId: "1:837514779405:web:865b021a71a44b78056e44",
  measurementId: "G-RF0TNY8J1E"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup }
export default db;