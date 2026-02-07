import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBbbjLMI92JkA8inpc90y4NKqcSQ48LroQ",
    authDomain: "kgx-web.firebaseapp.com",
    projectId: "kgx-web",
    storageBucket: "kgx-web.firebasestorage.app",
    messagingSenderId: "692760413361",
    appId: "1:692760413361:web:1d09a96a24f0a7c4be4e90",
    measurementId: "G-8JPEMN44CX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

// Initialize analytics only in browser environment
let analytics = null;
if (typeof window !== 'undefined') {
    analytics = getAnalytics(app);
}

export { analytics };
export default app;
