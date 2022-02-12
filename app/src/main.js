import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import w3 from './assets/w3.css'
import PrimeVue from 'primevue/config'

createApp(App).use(store).use(router).use(w3).use(PrimeVue).mount('#app')
