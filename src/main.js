// src/main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import * as icons from 'lucide-vue-next';



import './assets/styles/reset.scss'

const app = createApp(App);
const iconNames = ['Home', 'User', 'Heart', 'Grid'];

iconNames.forEach((name) => {
    app.component(name + 'Icon', icons[name]);
});


app.use(router);
app.mount('#app');
