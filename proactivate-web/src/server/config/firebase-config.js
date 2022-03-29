// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC8R0xZi3kkjkrjP5yvTetlnQwV2hJJV1Q",
  authDomain: "proactivate-app.firebaseapp.com",
  projectId: "proactivate-app",
  storageBucket: "proactivate-app.appspot.com",
  messagingSenderId: "757482243866",
  appId: "1:757482243866:web:aa1a3fafce9fc451494ea3",
  measurementId: "G-D37BP9RVXH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
