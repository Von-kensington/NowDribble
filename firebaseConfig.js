import { initializeApp } from 'firebase/app';

// Optionally import the services that you want to use
// import {...} from 'firebase/auth';
// import {...} from 'firebase/database';
// import {...} from 'firebase/firestore';
// import {...} from 'firebase/functions';
// import {...} from 'firebase/storage';

// Initialize Firebase
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
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
