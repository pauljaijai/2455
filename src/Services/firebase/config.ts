import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
initializeApp({
  apiKey: "AIzaSyB_ZKltxJ1yjUeVKv7F4mOso_5tgxzt6sk",
  authDomain: "project-4959712782562281731.firebaseapp.com",
  projectId: "project-4959712782562281731",
  storageBucket: "project-4959712782562281731.appspot.com",
  messagingSenderId: "386226026654",
  appId: "1:386226026654:web:71d84d1463c74fa4f6238f",
  measurementId: "G-3YLQJ8CK7Q",
});

const auth = getAuth();
const db = getFirestore();

const GoogleProvider = new GoogleAuthProvider();

export { auth, GoogleProvider, db };
