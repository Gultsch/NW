import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router/Router.ts'

import './style/default.scss'
import './style/variables.scss'
import '98.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('body')
