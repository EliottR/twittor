// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth"
import firebase from "firebase/compat/app"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import "firebase/compat/auth"
import "firebase/compat/database"

// Your web app's Firebase configuration
const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
})

// Initialize Firebase
export const auth = getAuth()

export default app

// Get a reference to the database service
// export const db = app.database()
// save the user's profile into Firebase so we can list users,
// use them in Security and Firebase Rules, and show profiles
