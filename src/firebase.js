
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyC_zjp-6PEdCGeeLROlTupG_IiHhLNnY3k",
  authDomain: "portfolio-bfe75.firebaseapp.com",
  projectId: "portfolio-bfe75",
  storageBucket: "portfolio-bfe75.appspot.com",
  messagingSenderId: "539365485565",
  appId: "1:539365485565:web:0d489e5ab595e014560794"
};



const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);
