// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANEurwaf3mJmVUnyGRyGPIy4IrLkaN69g",
  authDomain: "ejercicio-react-redux-firebase.firebaseapp.com",
  projectId: "ejercicio-react-redux-firebase",
  storageBucket: "ejercicio-react-redux-firebase.appspot.com",
  messagingSenderId: "127396799765",
  appId: "1:127396799765:web:1514afeb49752f3388351c"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)