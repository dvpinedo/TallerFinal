import firebase from "firebase"
import "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyD8l4Qk-uMwJkUeSpj4YtagvD63V9tdyws",
  authDomain: "randm-fa79a.firebaseapp.com",
  projectId: "randm-fa79a",
  storageBucket: "randm-fa79a.appspot.com",
  messagingSenderId: "776996960897",
  appId: "1:776996960897:web:c6c09d1da6f01c101d2b80"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
export {firebase};