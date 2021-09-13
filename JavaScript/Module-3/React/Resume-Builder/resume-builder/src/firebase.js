import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDwXFQvY3Cate6-CtA7-jE7IhuW48dZTSU",
    authDomain: "resume-builder-74926.firebaseapp.com",
    projectId: "resume-builder-74926",
    storageBucket: "resume-builder-74926.appspot.com",
    messagingSenderId: "777508412367",
    appId: "1:777508412367:web:3ac8e7a68242a4a67690ba"
  };

  firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore(); 