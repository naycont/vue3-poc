import '@/assets/scss/main.scss'
import vuetify from './plugins/vuetify'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App).use(vuetify)
const pinia = createPinia()

app.use(pinia)
app.use(router)

app.mount('#app')
