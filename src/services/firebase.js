import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzdtV5naOQzxgqji54DvDLhIpLqCTQyfo",
  authDomain: "task-management-faf4c.firebaseapp.com",
  projectId: "task-management-faf4c",
  storageBucket: "task-management-faf4c.appspot.com",
  messagingSenderId: "544327632024",
  appId: "1:544327632024:web:dd1cc50376bd4af10c7ced",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
