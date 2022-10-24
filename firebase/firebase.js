// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAP7l_eckXz6TxBWvrjk0DgH45s9q78v6Y",
  authDomain: "hacktoberblog.firebaseapp.com",
  projectId: "hacktoberblog",
  storageBucket: "hacktoberblog.appspot.com",
  messagingSenderId: "143156963864",
  appId: "1:143156963864:web:1e1333995071a4a89cb16d",
  measurementId: "G-1RCMKF7Y0D",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
