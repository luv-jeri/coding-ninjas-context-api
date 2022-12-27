import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBI4lUBLOdVvByfF1AN6DMPtSq0vqJ8wrs',
  authDomain: 'cn-context.firebaseapp.com',
  projectId: 'cn-context',
  storageBucket: 'cn-context.appspot.com',
  messagingSenderId: '343934303243',
  appId: '1:343934303243:web:e64b26d45100535c391b0e',
  measurementId: 'G-DTKYK2Y6GY',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
