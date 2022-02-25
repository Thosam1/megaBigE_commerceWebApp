import firebase from 'firebase/compat/app'; // getting the utility library
import 'firebase/compat/firestore'; // for database
import 'firebase/compat/auth'; // for auth

const config = {
    apiKey: "AIzaSyDAW-niP-eCKGGC9RwYZ8ihofH7AwH51Hw",
    authDomain: "crwn-db-28252.firebaseapp.com",
    projectId: "crwn-db-28252",
    storageBucket: "crwn-db-28252.appspot.com",
    messagingSenderId: "722105654624",
    appId: "1:722105654624:web:08e20b5a9b63d839075205",
    measurementId: "G-F782WMP32V"
  };

  firebase.initializeApp(config); // now we initialize firebase with given config

  // ---
  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return; // means hasn't connected

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get(); // snapshot represents the data

    // if user doesn't exist, we create new user with data from userAuth object
    if(!snapShot.exists) { 
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      // creating the snapShot
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData // we might want more, passed as an object
        });
      } catch (error) {
        console.log('error creating user', error.message)
      }

    } 
    return userRef; // to do more things if needed
  }
  // ---


export const auth = firebase.auth(); // to use it anywhere needed for authentification
export const firestore = firebase.firestore();

// for sign in with Google
const providerGoogle = new firebase.auth.GoogleAuthProvider(); // for google sign in possibility -> same for facebook, github, ...
providerGoogle.setCustomParameters( { prompt: 'select_account' } ); // always trigger google pop up whenever we use GoogleAuthProvider() for sign in auth

export const signInWithGoogle = () => auth.signInWithPopup(providerGoogle);

// in case we want whole library
export default firebase; 



