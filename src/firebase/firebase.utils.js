import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAl9aqHSDIx6IqvFiVzYiFExitbNveGf9E",
    authDomain: "react-my-burger-49818.firebaseapp.com",
    databaseURL: "https://react-my-burger-49818.firebaseio.com",
    projectId: "react-my-burger-49818",
    storageBucket: "react-my-burger-49818.appspot.com",
    messagingSenderId: "12302256594", 
    appId: "1:12302256594:web:cbfcf553454ca1dd58e00b"
  }
  firebase.initializeApp(config);

  export const auth=firebase.auth();
  export const firestore=firebase.firestore();
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'})
  export const signInWithGoogle=()=>auth.signInWithPopup(provider);
  export default firebase; 
  