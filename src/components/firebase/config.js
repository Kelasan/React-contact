import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHm9M1WW4EkN-5ApfYaLflIdJ4jP1WAF8",
  authDomain: "contact-7d56b.firebaseapp.com",
  projectId: "contact-7d56b",
  storageBucket: "contact-7d56b.appspot.com",
  messagingSenderId: "473937597753",
  appId: "1:473937597753:web:cd8b15d60fb657778904e8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// init service firestore
export const db = getFirestore(app);
export const auth = getAuth(app);
