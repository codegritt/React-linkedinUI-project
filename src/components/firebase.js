// Import the functions you need from the SDKs you need
import { firebase } from "./firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOvcRqiVXDqyPrOE93ANdpsMOcxZ64rXg",
  authDomain: "react-linkedin-project-77c4b.firebaseapp.com",
  projectId: "react-linkedin-project-77c4b",
  storageBucket: "react-linkedin-project-77c4b.appspot.com",
  messagingSenderId: "91015824949",
  appId: "1:91015824949:web:e5de914f3529552a10537c",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
