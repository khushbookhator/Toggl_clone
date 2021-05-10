import "firebase/auth"
import firebase from 'firebase/app'
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyA7Q5JYU5AbKpYeSnFq_X8zAnAVTsJ9nig",
    authDomain: "ayush-18953.firebaseapp.com",
    projectId: "ayush-18953",
    storageBucket: "ayush-18953.appspot.com",
    messagingSenderId: "155618452656",
    appId: "1:155618452656:web:317d87476c1565950d0775",
    measurementId: "G-M91LGBTG7R"
  };
  
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  // const db = firebaseApp.firestore()
  const auth = firebaseApp.auth()
 
  export {auth,firebaseApp}


