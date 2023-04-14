import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import VueCookies from 'vue-cookies'

import 'fomantic-ui/dist/semantic.min.css';
import 'fomantic-ui/dist/semantic.min.js';
import 'bootstrap/dist/css/bootstrap.min.css'

import './assets/main.css'

const app = createApp(App)

app.use(router)
app.use(VueCookies)

app.mount('#app')
