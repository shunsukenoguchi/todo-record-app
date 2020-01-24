import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

if (!firebase.apps.length) {
 const config = {
    apiKey: "AIzaSyBkf_Dh2V3u5ztAPo1iGZgQORjD8GsACKQ",
    authDomain: "todo-record-app.firebaseapp.com",
    databaseURL: "https://todo-record-app.firebaseio.com",
    projectId: "todo-record-app",
    storageBucket: "todo-record-app.appspot.com",
    messagingSenderId: "940494586384",
    appId: "1:940494586384:web:e28fc91fa0c960fe918095",
    measurementId: "G-P9VQJNFERZ"
 }
 firebase.initializeApp(config)
}

const db = firebase.firestore()
export {
 firebase,
 db
}