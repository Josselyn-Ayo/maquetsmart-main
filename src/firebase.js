// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeMlAj84rRwNnRzvQeAtHPECY0NvbtPbI",
  authDomain: "maqueta3d-5a0f3.firebaseapp.com",
  projectId: "maqueta3d-5a0f3",
  storageBucket: "maqueta3d-5a0f3.firebasestorage.app",
  messagingSenderId: "586830933350",
  appId: "1:586830933350:web:c76ee739662edcd7176ca7"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const authFirebase = getAuth(app);
export const dbFirebase = getFirestore(app);

export default app;