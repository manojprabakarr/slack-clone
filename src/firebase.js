import firebase from 'firebase'




const firebaseConfig = {
    apiKey: "AIzaSyBMb66UZhXdoWgQEtvLMMkDAN6uCHXRZPc",
    authDomain: "slackclone-33dd4.firebaseapp.com",
    projectId: "slackclone-33dd4",
    storageBucket: "slackclone-33dd4.appspot.com",
    messagingSenderId: "447170455138",
    appId: "1:447170455138:web:92f174e93a79518a2bd33b",
    measurementId: "G-ZL1GWJ4NCN"
  };

  const firebaseapp=firebase.initializeApp(firebaseConfig);
  const db = firebaseapp.firestore();
  const auth= firebaseapp.auth();
  const provider=new firebase.auth.GoogleAuthProvider();

export default db;
export {auth,provider};