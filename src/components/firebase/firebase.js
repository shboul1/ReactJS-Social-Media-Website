import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'
import { getStorage } from "firebase/storage";

  const firebaseConfig = {
    apiKey: "AIzaSyBm6MTkwtz1j_Q7NVmsndfa7tcuHlNasHw",
    authDomain: "reactsocial-13339.firebaseapp.com",
    projectId: "reactsocial-13339",
    storageBucket: "reactsocial-13339.appspot.com",
    messagingSenderId: "475551624567",
    appId: "1:475551624567:web:c880ee57d12882d5a00572",
    databaseURL: "https://databaseName.firebaseio.com",
    // storageBucket: "bucket.appspot.com"
  
  };

const app = initializeApp(firebaseConfig);
export const provider = new GoogleAuthProvider();
export const auth = getAuth();
export const storage = getStorage(app);
export const db = getFirestore(app);


// const firebaseConfig = {
//   apiKey: "AIzaSyCJbNkB6T0KHOBmzgveiAU9wQ_yGjWCFJ0",
//   authDomain: "amershboul-93b5c.firebaseapp.com",
//   projectId: "amershboul-93b5c",
//   storageBucket: "amershboul-93b5c.appspot.com",
//   messagingSenderId: "531164554328",
//   appId: "1:531164554328:web:d12f10bcf1ee0a2355d62d",
//     databaseURL: "https://databaseName.firebaseio.com",
//     // storageBucket: "bucket.appspot.com"

//   };