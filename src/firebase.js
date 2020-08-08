import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyCGgpYLeNPhVWgAIGOR0hI5Ur2fpHz3_I0",
  authDomain: "chat-app-86b5e.firebaseapp.com",
  databaseURL: "https://chat-app-86b5e.firebaseio.com",
  projectId: "chat-app-86b5e",
  storageBucket: "chat-app-86b5e.appspot.com",
  messagingSenderId: "194630996980",
  appId: "1:194630996980:web:ba2c65b4d89541e4335fa1",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
