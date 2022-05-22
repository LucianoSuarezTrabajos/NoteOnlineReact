// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDLx9bo3pLD0XrNkNgWa7AOOGRQr_Bl27g",
  authDomain: "reactnote-cd545.firebaseapp.com",
  projectId: "reactnote-cd545",
  storageBucket: "reactnote-cd545.appspot.com",
  messagingSenderId: "209250797028",
  appId: "1:209250797028:web:509e2bb72082f6054af3f1",
  measurementId: "G-BCLTDHNZ75",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const bd = getFirestore(app);
