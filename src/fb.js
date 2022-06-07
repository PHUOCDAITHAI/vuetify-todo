import firebase from 'firebase/app'
import 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyBPJRK9prlsWgIn10gs5curKpyEpK6xems",
    authDomain: "vuetify-todo-3cc4a.firebaseapp.com",
    projectId: "vuetify-todo-3cc4a",
    storageBucket: "vuetify-todo-3cc4a.appspot.com",
    messagingSenderId: "137466695741",
    appId: "1:137466695741:web:b6438da9fc27b5570c9a54",
    measurementId: "G-TVVBNMFT83"
};
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
db.settings({timestampsInSnapshots: true});
export default db;