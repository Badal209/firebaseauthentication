import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const app = initializeApp({
  apiKey: "AIzaSyD_87Y8-MOXRvZvQZE4VthAhlgOQdSQbg0",
  authDomain: "redux-6f6d8.firebaseapp.com",
  databaseURL: "https://redux-6f6d8-default-rtdb.firebaseio.com",
  projectId: "redux-6f6d8",
  storageBucket: "redux-6f6d8.appspot.com",
  messagingSenderId: "956724311294",
  appId: "1:956724311294:web:357dfdda97a2b490fb61af",
});

export const auth = getAuth();

export const db = getFirestore();

export default app;
