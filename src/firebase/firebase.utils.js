import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import FirebaseKey from '../firebase-key';

const firebaseConfig = {
    apiKey: `${FirebaseKey}`,
    authDomain: "news-social-db.firebaseapp.com",
    projectId: "news-social-db",
    storageBucket: "news-social-db.appspot.com",
    messagingSenderId: "536419269547",
    appId: "1:536419269547:web:e609555194d74d24ecf0ee",
    measurementId: "G-4FDM0W19S2"
};


firebase.initializeApp(firebaseConfig);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;



