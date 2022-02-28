import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3sTzWIjHMuHpGnYOSwrFVVO06R9G7ejU",
  authDomain: "clone-8bd7c.firebaseapp.com",
  projectId: "clone-8bd7c",
  storageBucket: "clone-8bd7c.appspot.com",
  messagingSenderId: "1217025731",
  appId: "1:1217025731:web:6e20b9dd6b5ac80867b476",
  measurementId: "G-6HFHQM7EXF"
};
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };
