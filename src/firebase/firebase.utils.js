import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyBa35bARcs3DqrcK1H4HpraVQseNiJ_42g",
    authDomain: "crwn-db-a0707.firebaseapp.com",
    projectId: "crwn-db-a0707",
    storageBucket: "crwn-db-a0707.appspot.com",
    messagingSenderId: "647616774575",
    appId: "1:647616774575:web:490104e11d4cc15481ef5a",
    measurementId: "G-RKNCFQSKEV"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;