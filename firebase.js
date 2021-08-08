import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDLCHuo1iB1pwJ5oOH0QE1B3Za3z2WJ_oE",
  authDomain: "facebook-2-6e275.firebaseapp.com",
  projectId: "facebook-2-6e275",
  storageBucket: "facebook-2-6e275.appspot.com",
  messagingSenderId: "682993122296",
  appId: "1:682993122296:web:c99b1f74915ee6a7d1b40d",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
