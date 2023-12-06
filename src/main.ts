import './assets/main.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import {createApp} from 'vue'
import {createPinia} from 'pinia'
import App from './App.vue'
import router from './router'
import axios from "axios";
import Pusher, * as PusherTypes from 'pusher-js';
import Echo from 'laravel-echo';

axios.defaults.baseURL = 'http://inaboba/api'
axios.defaults.headers.accept ='application/json'

declare const presenceChannel: PusherTypes.PresenceChannel    // Enable pusher logging - don't include this in production
// Pusher.logToConsole = true;


window.Pusher = Pusher;

window.Echo = new Echo({
    broadcaster: 'pusher',
    key: "3224fc036aad38f7f6d7",
    cluster: "ap2",
    forceTLS: true,
});


const app = createApp(App)
const pinia = createPinia()

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.use(pinia)
    .use(ElementPlus)
    .use(router)
    .mount('#app')
