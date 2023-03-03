import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBNLwEKvsaBoiyqwETbp1zXBUCck0c0wGo",
  authDomain: process.env.REACT_APP_FIREBASE_KEY,
  // authDomain: "admin-panel-74289.firebaseapp.com",
  projectId: "admin-panel-74289",
  storageBucket: "admin-panel-74289.appspot.com",
  messagingSenderId: "564085902110",
  appId: "1:564085902110:web:0dc8d75183ddb1c9b2570f"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);