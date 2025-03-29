import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/styles/reset.scss'
import 'vue3-toastify/dist/index.css'

createApp(App).use(router).mount('#root')
