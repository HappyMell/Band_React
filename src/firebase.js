import firebase from "firebase";

const config = {
  apiKey: "AIzaSyDJRN4Rql-zv1e_EH-1lcL9i6P-77XYq1Y",
  authDomain: "band-bc106.firebaseapp.com",
  databaseURL: "https://band-bc106.firebaseio.com",
  projectId: "band-bc106",
  storageBucket: "band-bc106.appspot.com",
  messagingSenderId: "618022200565",
  appId: "1:618022200565:web:fee861fc96646ee6dfd1bc"
};

firebase.initializeApp(config);
export default firebase;
