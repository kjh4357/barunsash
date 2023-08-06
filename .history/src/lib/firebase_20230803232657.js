import Vue from "vue";
import App from "./App";
import router from "./router";
import firebase from "firebase";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

Vue.config.productionTip = false;
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiZHytRbDFWEVU9oao5nek-zngLXKM69A",
  authDomain: "basunsash.firebaseapp.com",
  projectId: "basunsash",
  storageBucket: "basunsash.appspot.com",
  messagingSenderId: "238985496191",
  appId: "1:238985496191:web:f79304303da71ec032a14a",
  measurementId: "G-1ZDWY2C0MW",
};
firebase.initializeApp(firebaseConfig);
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  render: (h) => h(App),
});
