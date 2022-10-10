import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC88zSLb05OBfPWHebI9NC5yBV3NyZVgrw",
  authDomain: "realtimechat-1b34b.firebaseapp.com",
  projectId: "realtimechat-1b34b",
  storageBucket: "realtimechat-1b34b.appspot.com",
  messagingSenderId: "902519614187",
  appId: "1:902519614187:web:7784c3d1d1a0a42695ecae",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
