//Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, setPersistence, browserLocalPersistence } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8htXZTdaH5IWXNnSfws0VmkeekWEHwpE",
  authDomain: "netflix-gpt-98945.firebaseapp.com",
  projectId: "netflix-gpt-98945",
  storageBucket: "netflix-gpt-98945.firebasestorage.app",
  messagingSenderId: "690755093925",
  appId: "1:690755093925:web:638f70dbd491f2fd17544c",
  measurementId: "G-0V1Z8GJQEG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
setPersistence(auth, browserLocalPersistence);