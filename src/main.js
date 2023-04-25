import {createApp} from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'

// bootstrap js
import "bootstrap"

// styles
import './assets/scss/main.scss'

const app = createApp(App)

app.use(router, store)

store.commit('login')

app.mount('#app')
