import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

var firebaseConfig = {
    apiKey: "AIzaSyCRNkImHe5D0gn_Lt_ZX3Kt4mgW1ydIQwE",
    authDomain: "harrow-logger.firebaseapp.com",
    projectId: "harrow-logger",
    storageBucket: "harrow-logger.appspot.com",
    messagingSenderId: "689148928183",
    appId: "1:689148928183:web:a8c46ed733cc2749a02d32",
    measurementId: "G-87JLPVNF04"
}

firebase.initializeApp(firebaseConfig)
const auth = firebase.auth()
const firestore = firebase.firestore()

export { firebase, firestore, auth }