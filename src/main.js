// src/main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify' // 경로도 확인 필요 (plugin → plugins?)

const app = createApp(App);

app.use(router);
app.use(vuetify);
app.mount('#app');
