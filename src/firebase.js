import { initializeApp } from "firebase/app";
import {getAuth , GoogleAuthProvider} from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyCjCJBGK9cxlpKNp8dKaEBeEK7DpoYUP9A",
  authDomain: "fir-auth-8dd99.firebaseapp.com",
  projectId: "fir-auth-8dd99",
  storageBucket: "fir-auth-8dd99.appspot.com",
  messagingSenderId: "110176631423",
  appId: "1:110176631423:web:6c53c9a87ee655e3bd9d4a",
  measurementId: "G-XQXG79H18Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
export {app , auth , provider};