import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import vueScroll from 'vue3-smooth-scroll'
const app = createApp(App)
app.use(vueScroll, {
    duratioin: 700,
    updateHistory: false
})
app.mount('#app')
