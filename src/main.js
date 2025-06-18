// src/main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import './assets/styles/reset.scss'

const app = createApp(App);

app.use(router);
app.use(vuetify);
app.mount('#app');
