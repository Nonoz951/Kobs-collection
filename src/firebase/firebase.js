import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDxPJpqWr13nDQ0NncmgzPX6gkiBBxafHk",
  authDomain: "nonoz-297bb.firebaseapp.com",
  projectId: "nonoz-297bb",
  storageBucket: "nonoz-297bb.firebasestorage.app",
  messagingSenderId: "954151685858",
  appId: "1:954151685858:web:9fb4f7469ab578375e18bb",
  measurementId: "G-C79Z6W234Y"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

