// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB28PuImGyyErQ6yt2J5mHqqQ1Ms9LaQiQ",
  authDomain: "qouraclone-2222a.firebaseapp.com",
  projectId: "qouraclone-2222a",
  storageBucket: "qouraclone-2222a.appspot.com",
  messagingSenderId: "442099293656",
  appId: "1:442099293656:web:d4f9e6b0f1a2c7ac9ba6ad",
  measurementId: "G-FGRD17N8TX"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth();

const provider = new GoogleAuthProvider();
const db = getFirestore(firebaseApp);


export { auth, provider };
export default db;
