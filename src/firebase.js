import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // これ忘れがち！

const firebaseConfig = {
  apiKey: "AIzaSyD-if7wJ-TF3z_NLRBFGM7nTLhhGfa2_-w",
  authDomain: "project-2358297796130982877.firebaseapp.com",
  projectId: "project-2358297796130982877",
  storageBucket: "project-2358297796130982877.appspot.com", // firebasestorage.app → appspot.com
  messagingSenderId: "185310078105",
  appId: "1:185310078105:web:e0c8ffbce638104976c408",
  measurementId: "G-E09S90NZDV"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
