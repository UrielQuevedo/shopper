import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: "shopper-1a6ae",
  storageBucket: "shopper-1a6ae.appspot.com",
  messagingSenderId: "814411612057",
  appId: "1:814411612057:web:58cc8e2219211ec9291d08",
  measurementId: "G-GT9DSM1N59",
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };
export default app;
