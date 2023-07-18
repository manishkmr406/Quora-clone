
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCefH2W6dTfhgH8qC515TDGStvh_Zox8Wc",
  authDomain: "quora-e9021.firebaseapp.com",
  projectId: "quora-e9021",
  storageBucket: "quora-e9021.appspot.com",
  messagingSenderId: "551052790545",
  appId: "1:551052790545:web:33013e67be99dfbef95ab0",
  measurementId: "G-SGFDDC58WD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const provider=new GoogleAuthProvider();
const db=getDatabase(app);

export { auth,provider };
export default db;