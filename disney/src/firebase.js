// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9miko4MHcp4B38h9TTUShmsiQ2RKt8gc",
  authDomain: "disneyclone-b4caf.firebaseapp.com",
  projectId: "disneyclone-b4caf",
  storageBucket: "disneyclone-b4caf.appspot.com",
  messagingSenderId: "122214537511",
  appId: "1:122214537511:web:86c051b3ff440d2bc5b102",
  measurementId: "G-7SSXG9YFS0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Export the provider and auth objects
export const provider = new GoogleAuthProvider();
export const auth = getAuth(app);

// Export the signInWithGoogle function
export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.error(error);
    });
};
