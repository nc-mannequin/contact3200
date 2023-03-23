import { createApp } from 'vue'
import { createPinia } from 'pinia'

import FomanticUI from 'vue-fomantic-ui'
import 'fomantic-ui-css/semantic.min.css'

import App from './App.vue'
import router from './router'

import './assets/main.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwsZJteg_1rEIipMla4M-1OJ1xukIMOSU",
  authDomain: "contactlists-3133d.firebaseapp.com",
  projectId: "contactlists-3133d",
  storageBucket: "contactlists-3133d.appspot.com",
  messagingSenderId: "1005535165804",
  appId: "1:1005535165804:web:2862427824ef46c48f8749"
};

// Initialize Firebase


var app = createApp(App)
app.use(FomanticUI)

app.use(createPinia())
app.use(router)

app.mount('#app')

app = initializeApp(firebaseConfig);

