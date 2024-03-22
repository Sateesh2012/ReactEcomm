// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA18EhMk_2OC2_o3sxc9wER2z8Gg8B_qDs",
  authDomain: "myecom-63a11.firebaseapp.com",
  projectId: "myecom-63a11",
  storageBucket: "myecom-63a11.appspot.com",
  messagingSenderId: "142563808373",
  appId: "1:142563808373:web:03c4c735a0d0c8c596d43c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }