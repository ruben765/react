//import {initializeApp} from 'firebase/app';
//import 'firebase/firestore'
import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCTz4U11mCKCHYIaPFbUo3_uryczJm-D6k",
    authDomain: "storeprueba-5752f.firebaseapp.com",
    projectId: "storeprueba-5752f",
    storageBucket: "storeprueba-5752f.appspot.com",
    messagingSenderId: "147438892305",
    appId: "1:147438892305:web:c8cc646875ffe058c548b0"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export {firebase};
  // Initialize Firebase
//  export const firebase = initializeApp(firebaseConfig);