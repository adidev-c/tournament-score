
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-analytics.js";
import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-database.js";
import { onValue } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
    const messageRef = ref(db, "demo/message");
  
    onValue(messageRef, (snapshot) => {
      const data = snapshot.val();
      const teama = document.getElementById("teamA-score");
  
      if (teama) {
        console.log("🔥 Real-time update:", data);
        teama.innerText = data.text;
      } else {
        console.log("Element not found: teamA-score");
      }
    });
  });
  
