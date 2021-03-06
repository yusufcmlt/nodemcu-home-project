import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyB_-z0OZRP9yvI6di7hjMpIg31sggBdh_g",
  authDomain: "ev-otomasyon-f0c18.firebaseapp.com",
  databaseURL: "https://ev-otomasyon-f0c18.firebaseio.com",
  projectId: "ev-otomasyon-f0c18",
  storageBucket: "ev-otomasyon-f0c18.appspot.com",
  messagingSenderId: "583999887802",
  appId: "1:583999887802:web:5a8daba2635c5cf31f6583",
  measurementId: "G-V0W0TDG3GS",
};
export const setLastDate = () => {
  const lastDate = new Date().toString();

  database.ref("/lastUsed").set({ time: lastDate });
};
firebase.initializeApp(firebaseConfig);

export const database = firebase.database();

export default firebase;
