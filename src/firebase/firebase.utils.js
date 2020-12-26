import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBE4m2Cm0yRyonQhPcwokgKf7JOCCl5Ojw",
    authDomain: "crwn-db-7e2d8.firebaseapp.com",
    projectId: "crwn-db-7e2d8",
    storageBucket: "crwn-db-7e2d8.appspot.com",
    messagingSenderId: "205385324034",
    appId: "1:205385324034:web:3bde92c286038afac8b91b",
    measurementId: "G-5GDT3878ZN"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;