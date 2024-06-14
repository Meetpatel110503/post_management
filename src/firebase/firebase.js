// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "post-management-334fe.firebaseapp.com",
  projectId: "post-management-334fe",
  storageBucket: "post-management-334fe.appspot.com",
  messagingSenderId: "987689029219",
  appId: "1:987689029219:web:b73f9f8b5045abf4a6f256",
  measurementId: "G-C22RQGLSSW",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const analytics = getAnalytics(app)
const provider = new GoogleAuthProvider()

const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider)
    const user = result.user
    return user
  } catch (error) {
    throw error
  }
}

export { app, auth, signInWithGoogle }
