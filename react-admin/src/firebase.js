// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:"AIzaSyDcvgCO3Nt6OeWDyETTbUJF93Kn6UkqnnE",
  authDomain: "attendance-app-cdef4.firebaseapp.com",
  projectId: "attendance-app-cdef4",
  storageBucket: "attendance-app-cdef4.appspot.com",
  messagingSenderId: "402114423296",
  appId: "1:402114423296:web:302ff16264c63ff87ec6e5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth=getAuth();
export const storage = getStorage(app);