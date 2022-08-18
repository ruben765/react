import app from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCTz4U11mCKCHYIaPFbUo3_uryczJm-D6k",
    authDomain: "storeprueba-5752f.firebaseapp.com",
    projectId: "storeprueba-5752f",
    storageBucket: "storeprueba-5752f.appspot.com",
    messagingSenderId: "147438892305",
    appId: "1:147438892305:web:e6e27e345a48e8c6c548b0"
  };
  
// Initialize Firebase
app.initializeApp(firebaseConfig);

const db = app.firestore()
const auth = app.auth()

export {db,auth}