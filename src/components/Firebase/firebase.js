import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const config = {
  apiKey: "AIzaSyAoQImIzEKWrgqx6DKZCeT3mdkNdunSrv0",
  authDomain: "andproducciones-b1b01.firebaseapp.com",
  databaseURL: "https://andproducciones-b1b01.firebaseio.com",
  projectId: "andproducciones-b1b01",
  storageBucket: "andproducciones-b1b01.appspot.com",
  messagingSenderId: "859529040277",
  appId: "1:859529040277:web:86426c3b59acf700d4269c",
  measurementId: "G-YQGFVEMLTT"
};

const fire = firebase.initializeApp(config);
const db = firebase.firestore();
const auth = firebase.auth();
var storage = firebase.storage();
export { fire, db, auth, storage };
