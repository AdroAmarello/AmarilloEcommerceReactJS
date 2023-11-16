// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2l7wzkW1i6eDcwqv-H8-vMW2ixZK0KLg",
  authDomain: "amarilloecommerce.firebaseapp.com",
  projectId: "amarilloecommerce",
  storageBucket: "amarilloecommerce.appspot.com",
  messagingSenderId: "714180068512",
  appId: "1:714180068512:web:daa34275f84c5e304935c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);