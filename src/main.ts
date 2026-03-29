import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './app/App.vue'
import router from './app/router'

import './assets/main.css'

import { i18n } from '@/shared/lib/i18n'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)

app.mount('#app')
