//import * as firebase from '@react-native-firebase/app';
import * as firebase from 'firebase/app';
//import { initializeApp } from "firebase/app";
import 'firebase/firestore';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAusTrmCqQKI04RQAJbbiE8r88c9KrHZSs",
    authDomain: "portal-noticias-20d3c.firebaseapp.com",
    projectId: "portal-noticias-20d3c",
    storageBucket: "portal-noticias-20d3c.appspot.com",
    messagingSenderId: "968186060540",
    appId: "1:968186060540:web:4b271440da927d6f174179"
  });

  const db = firebase.firestore();

  export {db};