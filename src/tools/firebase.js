import * as firebase from "firebase/app";
import 'firebase/firebase-analytics';
import 'firebase/firebase-firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDc5VvBOuF82UVIcald-7TiDPeaY-YR5vU",
  authDomain: "zhelpa-f2d95.firebaseapp.com",
  databaseURL: "https://zhelpa-f2d95.firebaseio.com/",
  projectId: "zhelpa-f2d95",
  storageBucket: "zhelpa-f2d95.appspot.com",
  messagingSenderId: "104761785113",
  appId: "1:104761785113:web:f7733c6e45b97d2c3a2388",
  measurementId: "G-LEWW4ZPTYL",
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;