import { read } from './firebase.js';

async function fetchData() {
  const data = await read('demo/message');
  console.log("🎉 Got data:", data);
}

fetchData();
