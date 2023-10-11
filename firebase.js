// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from 'firebase/auth';

//import firebase from 'firebase'
//import{fireStore, collection, query} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
//import AsyncStorage from '@react-native-community/async-storage';
//import AysyncStorage from '@react-native-async-storage/async-storage'
/*import { AsyncStorage } from 'react-native';
import {getAuth} from 'firebase/auth';
import {
    initializeAuth,
    getReactNativePersistence
  } from 'firebase/auth/react-native';*/
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDi9HAd8_hpjBx_7GydL5t11Brfc7KfaeI",
  authDomain: "tunein-auth.firebaseapp.com",
  projectId: "tunein-auth",
  storageBucket: "tunein-auth.appspot.com",
  messagingSenderId: "571281486969",
  appId: "1:571281486969:web:b7deb768d46bd640aa50a8"
};

// Initialize Firebase
//const firebase = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
//const colRef = collection(db)

//const db = firebase.firestore()


//const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app);


//export {initializeApp, getAuth};