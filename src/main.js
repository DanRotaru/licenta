import {createApp} from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'

// bootstrap js
import * as bootstrap from 'bootstrap';
import Swal from 'sweetalert2'
import Choices from "choices.js";
import {QuillEditor} from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';


window.bootstrap = bootstrap;
window.Swal = Swal;
window.Choices = Choices;

// styles
import './assets/scss/main.scss'
import * as data from "@/store/data";

const app = createApp(App)
app.config.globalProperties.myGlobalVariable = 'Hello World!';


app.component('QuillEditor', QuillEditor)

app.use(router, store, data)

store.commit('login')

app.mount('#app')
