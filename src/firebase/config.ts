import { initializeApp } from "firebase/app";
import { getDatabase, ref } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyADoULCOlHxacRXfv-7z-Cbcr2uNokang8",
  authDomain: "social-dog-812a7.firebaseapp.com",
  databaseURL: "https://social-dog-812a7-default-rtdb.firebaseio.com",
  projectId: "social-dog-812a7",
  storageBucket: "social-dog-812a7.appspot.com",
  messagingSenderId: "510211036422",
  appId: "1:510211036422:web:03fb84e1f1e9c0b517fa87",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export const messagesRef = ref(database, "messages");
