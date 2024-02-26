import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCoSwRuoE4n3qAddkN3aHcn4lYd6KnEf2Y",
  authDomain: "to-do-list-60da5.firebaseapp.com",
  projectId: "to-do-list-60da5",
  storageBucket: "to-do-list-60da5.appspot.com",
  messagingSenderId: "534106638010",
  appId: "1:534106638010:web:4de41ad61bb5c299c0e483",
  measurementId: "G-6WLB3JMKCP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export  {auth,db};