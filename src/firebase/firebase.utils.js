import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBVVG0iEvqAP5olsx02qRMwuYGslro-1hQ",
    authDomain: "crwm-db-2450b.firebaseapp.com",
    databaseURL: "https://crwm-db-2450b.firebaseio.com",
    projectId: "crwm-db-2450b",
    storageBucket: "crwm-db-2450b.appspot.com",
    messagingSenderId: "228045842516",
    appId: "1:228045842516:web:55b9e8853110032d5a25c1",
    measurementId: "G-3FES9XTNZ6"
  };


  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
  