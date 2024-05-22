import {initializeApp} from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: `${process.env.REACT_APP_FIREBASE_PROJECT_ID}.firebaseapp.com`,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: `${process.env.REACT_APP_FIREBASE_PROJECT_ID}.appspot.com`,
    messagingSenderId: process.env.REACT_APP_FIREBASE_PROJECT_NUMBER,
    appId: `1:${process.env.REACT_APP_FIREBASE_PROJECT_NUMBER}:web:${process.env.REACT_APP_FIREBASE_API_KEY}`,
};

console.log('API Key:', process.env.REACT_APP_FIREBASE_API_KEY);
console.log('Project ID:', process.env.REACT_APP_FIREBASE_PROJECT_ID);
console.log('Project Number:', process.env.REACT_APP_FIREBASE_PROJECT_NUMBER);

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export {auth};