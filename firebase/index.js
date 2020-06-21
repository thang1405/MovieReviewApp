import * as firebase from "firebase/app";
import "firebase/auth";
var firebaseConfig = {
  apiKey: "AIzaSyAnmuw3muBDKigQcWpm8pS55JYXYZ_1oAU",
  authDomain: "rnmovies-c6507.firebaseapp.com",
  databaseURL: "https://rnmovies-c6507.firebaseio.com",
  projectId: "rnmovies-c6507",
  storageBucket: "rnmovies-c6507.appspot.com",
  messagingSenderId: "272094259733",
  appId: "1:272094259733:web:0f4e238ac106c8fb17bc1c",
  measurementId: "G-ZXCYM2MH43",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;
