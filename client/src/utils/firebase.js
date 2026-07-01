
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-6a3c6.firebaseapp.com",
  projectId: "interviewiq-6a3c6",
  storageBucket: "interviewiq-6a3c6.firebasestorage.app",
  messagingSenderId: "1092465337336",
  appId: "1:1092465337336:web:1d7cb2f710a8040d73ec0d",
  measurementId: "G-HCTGF20R8T"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}