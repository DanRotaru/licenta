import {createApp} from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'

// bootstrap js
import * as bootstrap from 'bootstrap';
import Swal from 'sweetalert2'
import Choices from "choices.js";
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';


window.bootstrap = bootstrap;
window.Swal = Swal;
window.Choices = Choices;

// styles
import './assets/scss/main.scss'

const app = createApp(App)

app.component('QuillEditor', QuillEditor)

app.use( router, store)

store.commit('login')

app.mount('#app')
