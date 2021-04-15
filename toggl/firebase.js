import "firebase/auth"

import firebase from 'firebase/app'
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCIZv3E2PWUauGrEct7QDQTbbkb97mS4zY",
    authDomain: "toogl-79e82.firebaseapp.com",
    projectId: "toogl-79e82",
    storageBucket: "toogl-79e82.appspot.com",
    messagingSenderId: "824691423536",
    appId: "1:824691423536:web:369b1b8610d2fff5ce70f5"
  };
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  const auth = app.auth()
 

  export  default auth