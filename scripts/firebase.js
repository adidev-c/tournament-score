// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-analytics.js";
import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-database.js";
import { onValue } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-database.js";
//handlers
import { handle_score } from "./live_handlers/handle_score.js"
import { update_all } from './update_all.js'
const firebaseConfig = {
  apiKey: "AIzaSyB9ACEsLDEsech23PHoWJjMczUxGdhgIO0",
  authDomain: "football-tournament-450f7.firebaseapp.com",
  databaseURL: "https://football-tournament-450f7-default-rtdb.firebaseio.com",
  projectId: "football-tournament-450f7",
  storageBucket: "football-tournament-450f7.firebasestorage.app",
  messagingSenderId: "290746425903",
  appId: "1:290746425903:web:ffc466ee25891287b05cda",
  measurementId: "G-W0M336Y6S4"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);

export async function read(key) {
    try {
      const snapshot = await get(child(ref(db), key));
      if (snapshot.exists()) {
        const data = snapshot.val();
        console.log("Data:", data);
        return data;
      } else {
        console.log("No data available");
        return null;
      }
    } catch (error) {
      console.error("Read failed:", error);
      return null;
    }
  }   
document.addEventListener("DOMContentLoaded", () => {
  const live = ref(db, "Live/live");
  onValue(live,update_all)
});
  
