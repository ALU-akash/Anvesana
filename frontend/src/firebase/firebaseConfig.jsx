import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Firebase configuration using environment variables
const firebaseConfig = {
  apiKey: "AIzaSyCi3R3PuvDqV6Nn3YagT9GDxcW0V8aKy3I",
  authDomain: "anvesana-cc8e6.firebaseapp.com",
  projectId: "anvesana-cc8e6",
  storageBucket: "anvesana-cc8e6.firebasestorage.app",
  messagingSenderId: "643356980553",
  appId: "1:643356980553:web:36eaadfddfdfc5e91e5698",
  measurementId: "G-PZ2HB6R9X0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Initialize Firebase Analytics
const analytics = getAnalytics(app); 

export { auth, db, analytics };