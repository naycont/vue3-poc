import '@/assets/scss/main.scss'
import vuetify from './plugins/vuetify'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import i18n from '@/plugins/i18n'

const app = createApp(App).use(vuetify)
const pinia = createPinia()

app.use(i18n)
app.use(pinia)
app.use(router)

app.mount('#app')
