import firebase from 'firebase/compat/app'; // For Firebase version 9+
import 'firebase/compat/auth'; // For Firebase version 9+


const firebaseConfig = {
  apiKey: "AIzaSyBkj5jjMcbi-7GXBGGZ7xog70YL6CpiMhY",
  authDomain: "workshop-255d3.firebaseapp.com",
  projectId: "workshop-255d3",
  storageBucket: "workshop-255d3.appspot.com",
  messagingSenderId: "915024949560",
  appId: "1:915024949560:web:ec24a1a6d691fc23c591cd"
};


export const firebaseApp = firebase.initializeApp(firebaseConfig);