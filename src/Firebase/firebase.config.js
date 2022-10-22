// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuaqQ1hjf04qJEImSZV4xD0QcM-SUBTJM",
  authDomain: "newsvolt-react-app.firebaseapp.com",
  projectId: "newsvolt-react-app",
  storageBucket: "newsvolt-react-app.appspot.com",
  messagingSenderId: "826604107692",
  appId: "1:826604107692:web:1980fd08b549200642ec09"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;