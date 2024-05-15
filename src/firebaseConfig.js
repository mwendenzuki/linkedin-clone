// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9wNaVay7iJ4MI_nzOWGKdD1tIimOmLgg",
  authDomain: "linkedin-clone-bee77.firebaseapp.com",
  projectId: "linkedin-clone-bee77",
  storageBucket: "linkedin-clone-bee77.appspot.com",
  messagingSenderId: "525518128412",
  appId: "1:525518128412:web:23676cc82f8183db75e6d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { auth, app, firestore, storage };