import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from 'firebase/firestore';

// PDF Storage configuration
const pdfStorageConfig = {
  apiKey: "AIzaSyCZKB2NU_o1AAswaHDMVEu7gO8nTFBY8gw",
  authDomain: "pdfstorage-aa3f7.firebaseapp.com",
  projectId: "pdfstorage-aa3f7",
  storageBucket: "pdfstorage-aa3f7.appspot.com",
  messagingSenderId: "791018763059",
  appId: "1:791018763059:web:eefc586044715e1ab5c446",
  measurementId: "G-43VYBTMC1Q"
};

// Firestore configuration (for Chat App)
const firestoreConfig = {
  apiKey: "AIzaSyD4W_cVZIAIReTzHBq-91J63Egz4fv2rpA",
  authDomain: "chatapp-e8295.firebaseapp.com",
  projectId: "chatapp-e8295",
  storageBucket: "chatapp-e8295.firebasestorage.app",
  messagingSenderId: "795961728206",
  appId: "1:795961728206:web:229da180975d7957e4c49f",
  measurementId: "G-2XTWXSBC4Y"
};

// Initialize Firebase for PDF Storage
const pdfStorageApp = initializeApp(pdfStorageConfig, "pdfStorageApp");
export const storage = getStorage(pdfStorageApp);

// Initialize Firebase for Firestore (Chat App)
const firestoreApp = initializeApp(firestoreConfig, "firestoreApp");
const database = getFirestore(firestoreApp);

export { database };
