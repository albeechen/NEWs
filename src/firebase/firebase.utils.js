import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import FirebaseKey from '../firebase-key';

const config = {
    apiKey: `${FirebaseKey}`,
    authDomain: "news-social-db.firebaseapp.com",
    projectId: "news-social-db",
    storageBucket: "news-social-db.appspot.com",
    messagingSenderId: "536419269547",
    appId: "1:536419269547:web:e609555194d74d24ecf0ee",
    measurementId: "G-4FDM0W19S2"
};

firebase.initializeApp(config);



export const createUserProfileDocument = async (userAuth, additionalData) => {

  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();
 
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  
  return userRef;
};


    
      
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;



