import firebase from 'firebase/app'

import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyB9iRQVSLeovgR6a11JH31-Uq8iFRnYnb4",
    authDomain: "alabi-site-2c4c5.firebaseapp.com",
    databaseURL: "https://alabi-site-2c4c5.firebaseio.com",
    projectId: "alabi-site-2c4c5",
    storageBucket: "alabi-site-2c4c5.appspot.com",
    messagingSenderId: "991006288476",
    appId: "1:991006288476:web:42b546d1fae01d44af1499",
    measurementId: "G-THLX995S7S"
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select account'});
  export const signInWithGoogle = ()=> auth.signInWithPopup(provider);

  export default firebase;