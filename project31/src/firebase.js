import firebase from 'firebase/app'
import 'firebase/firestore'

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAW93O0kr0CcTimNzKaMhKk7LStnyWnFVM",
    authDomain: "practiceclub-2e9c7.firebaseapp.com",
    databaseURL: "https://practiceclub-2e9c7.firebaseio.com",
    projectId: "practiceclub-2e9c7",
    storageBucket: "practiceclub-2e9c7.appspot.com",
    messagingSenderId: "1045077542850",
    appId: "1:1045077542850:web:e4e977f4dc2caf7a82f85b",
    measurementId: "G-RGEFK9JLQB"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase