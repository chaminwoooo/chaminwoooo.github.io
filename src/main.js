// src/main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'  // 라우터 불러오기

const app = createApp(App)

app.use(router)  // 라우터 사용 등록
app.mount('#app')  // public/index.html의 #app에 mount
