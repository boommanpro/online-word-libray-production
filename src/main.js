import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import './style.css'
import 'element-plus/dist/index.css'
import locale from 'element-plus/dist/locale/en.mjs'

const app = createApp(App)
app.use(ElementPlus, { locale })
app.mount('#app')
