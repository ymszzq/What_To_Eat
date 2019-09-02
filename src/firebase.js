import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDx3QXSOFSeCjv09kb7lzWnYq1TQaYKmI4",
    authDomain: "whattoeat-8d858.firebaseapp.com",
    databaseURL: "https://whattoeat-8d858.firebaseio.com",
    projectId: "whattoeat-8d858",
    storageBucket: "",
    messagingSenderId: "663095256462",
    appId: "1:663095256462:web:de23db51a0234f0c"
  };

firebase.initializeApp(firebaseConfig);
const databaseRef = firebase.database().ref();
export const todosRef = databaseRef.child("restaurant")