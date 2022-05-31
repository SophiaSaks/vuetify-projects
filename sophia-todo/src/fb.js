// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGNP0rA3f2z6EBxDNas2Fctnt5cPwG9AY",
  authDomain: "sophia-todo.firebaseapp.com",
  projectId: "sophia-todo",
  storageBucket: "sophia-todo.appspot.com",
  messagingSenderId: "849820721976",
  appId: "1:849820721976:web:12b9f1bec5856d63d197cd",
  measurementId: "G-4EN6LZLSXS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);