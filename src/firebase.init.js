// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
//Do not share config in public
const firebaseConfig = {
  apiKey: "AIzaSyD8PPL2CJXUbQFRb_IjHDU5b4wLX2JJ5Bk",
  authDomain: "email-password-auth-cc912.firebaseapp.com",
  projectId: "email-password-auth-cc912",
  storageBucket: "email-password-auth-cc912.firebasestorage.app",
  messagingSenderId: "921372996071",
  appId: "1:921372996071:web:48246c231f5dbc732e4d42"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);