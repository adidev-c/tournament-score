import { read } from './firebase.js';

async function fetchData() {
  const data = await read('Live/live');
  console.log("🎉 Got data:", data);
}

fetchData();
