import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAh0c0cqteTZ0kXLx81adbmLu4Cu5zmvMc",
  authDomain: "pidetupola--ecommerce.firebaseapp.com",
  projectId: "pidetupola--ecommerce",
  storageBucket: "pidetupola--ecommerce.appspot.com",
  messagingSenderId: "246574478421",
  appId: "1:246574478421:web:c8c806afc2873cdda590dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
