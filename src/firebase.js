// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API,
  authDomain: "react-disney-plus-app-ab476.firebaseapp.com",
  projectId: "react-disney-plus-app-ab476",
  storageBucket: "react-disney-plus-app-ab476.appspot.com",
  messagingSenderId: "1027396798895",
  appId: "1:1027396798895:web:5a265c0557ba94991e875a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app