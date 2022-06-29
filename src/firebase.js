// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
//import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwWo3DPfBeM1CETE3CxNCIMG6jh4loH9w",
  authDomain: "react-ad6d6.firebaseapp.com",
  projectId: "react-ad6d6",
  storageBucket: "react-ad6d6.appspot.com",
  messagingSenderId: "472537564831",
  appId: "1:472537564831:web:fd0eb370030633b6cec4aa",
  measurementId: "G-NW873XJ7QQ",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

//const auth = getAuth();

export { app, db };
