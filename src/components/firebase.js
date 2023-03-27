import { firebase } from "./firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBOvcRqiVXDqyPrOE93ANdpsMOcxZ64rXg",
  authDomain: "react-linkedin-project-77c4b.firebaseapp.com",
  projectId: "react-linkedin-project-77c4b",
  storageBucket: "react-linkedin-project-77c4b.appspot.com",
  messagingSenderId: "91015824949",
  appId: "1:91015824949:web:e5de914f3529552a10537c",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
