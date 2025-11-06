// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAl0o9PyDFQ0XW-4BF0Sz5MfI_AJHAtPDc",
  authDomain: "auth-and-all-together.firebaseapp.com",
  projectId: "auth-and-all-together",
  storageBucket: "auth-and-all-together.firebasestorage.app",
  messagingSenderId: "1072551390577",
  appId: "1:1072551390577:web:ab60975f1cf4867ed89ad0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)