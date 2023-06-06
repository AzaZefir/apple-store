// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRPdjpp7y0CtkQjGCcFHYjqnnNfhhzAbE",
  authDomain: "neural-period-385808.firebaseapp.com",
  projectId: "neural-period-385808",
  storageBucket: "neural-period-385808.appspot.com",
  messagingSenderId: "940952423478",
  appId: "1:940952423478:web:6c9451e8552d5e03275c97"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)