// Firebase App
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";

// Firebase Authentication
import { getAuth } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";

// Firebase Firestore Database
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";

// Firebase Storage
import { getStorage } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-storage.js";

// Your Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyBzax7JNP_UoyLN3pnzOLDMX6llZbim2ec",
    authDomain: "bizconnect2-20013.firebaseapp.com",
    databaseURL: "https://bizconnect2-20013-default-rtdb.firebaseio.com",
    projectId: "bizconnect2-20013",
    storageBucket: "bizconnect2-20013.firebasestorage.app",
    messagingSenderId: "357698703209",
    appId: "1:357698703209:web:41c15d54bb3f0fc68977f8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);