// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQzcHRfT9g4kkJ-Pa_41cptdFaC0Hgpk8",
  authDomain: "menufecture-a33d3.firebaseapp.com",
  projectId: "menufecture-a33d3",
  storageBucket: "menufecture-a33d3.appspot.com",
  messagingSenderId: "24660482589",
  appId: "1:24660482589:web:c638cbe185bac1595604f4",
  measurementId: "G-NMGC3K5126"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const Auth = getAuth(app)
export default Auth;
