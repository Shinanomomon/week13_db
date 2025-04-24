// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import{getFirestore} from "firebase/firestore";
import{getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB0wNmDyqxoNQNWyKlmf1zMxyJErQapwoI",
  authDomain: "civic-champion-410305.firebaseapp.com",
  projectId: "civic-champion-410305",
  storageBucket: "civic-champion-410305.appspot.com",
  messagingSenderId: "367802632079",
  appId: "1:367802632079:web:c77c87adb19ec7e9d4adfa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
 