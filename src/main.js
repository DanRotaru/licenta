import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'

import auth from '@/store/auth'

// bootstrap
import "bootstrap"

import './assets/scss/main.scss'

const app = createApp(App)

app.use(auth.auth)
app.use(router, store)


app.mount('#app')
