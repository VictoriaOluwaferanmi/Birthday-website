// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHE3bK3DS3RHapyLUVHwaJEMwYIZkLx1w",
  authDomain: "avian-direction-338012.firebaseapp.com",
  projectId: "avian-direction-338012",
  storageBucket: "avian-direction-338012.appspot.com",
  messagingSenderId: "725228232852",
  appId: "1:725228232852:web:246320f2452ac2514cd481",
  measurementId: "G-GB37YBR15C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const db=getFirestore(app);

export const provider=new GoogleAuthProvider();