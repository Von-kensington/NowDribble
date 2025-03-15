import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDW5tFADQd0Ocuhf_WzMGkmK48JUwQJjP8",
    authDomain: "nowdribble-ac527.firebaseapp.com",
    projectId: "nowdribble-ac527",
    databaseURL: 'https://nowdribble-ac527.firebaseio.com',
    storageBucket: "nowdribble-ac527.firebasestorage.app",
    messagingSenderId: "994815954612",
    appId: "1:994815954612:web:1e641146059bb37c4291e1",
    measurementId: "G-X106F18C62"  
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
