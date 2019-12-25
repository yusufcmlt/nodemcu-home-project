import firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_-z0OZRP9yvI6di7hjMpIg31sggBdh_g",
  authDomain: "ev-otomasyon-f0c18.firebaseapp.com",
  databaseURL: "https://ev-otomasyon-f0c18.firebaseio.com",
  projectId: "ev-otomasyon-f0c18",
  storageBucket: "ev-otomasyon-f0c18.appspot.com",
  messagingSenderId: "583999887802",
  appId: "1:583999887802:web:5a8daba2635c5cf31f6583",
  measurementId: "G-V0W0TDG3GS"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
