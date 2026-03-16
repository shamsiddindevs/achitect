// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHAGkOnSzyIzK6qV_kEBphNUiMZOL-BMM",
  authDomain: "fist-project-f4e2c.firebaseapp.com",
  projectId: "fist-project-f4e2c",
  storageBucket: "fist-project-f4e2c.firebasestorage.app",
  messagingSenderId: "980504581634",
  appId: "1:980504581634:web:3b909a23935713d9a6791b",
  measurementId: "G-TE7J6Z8GKR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);