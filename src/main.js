import { createApp } from 'vue'
import App from './App.vue'
import config from '../portfolio.json'

let layout = 'default'
const uri = window.location.search.substring(1); 
const params = new URLSearchParams(uri);
if (params.has('l')) {
    layout = params.get('l');
}
createApp(App).provide('$config', config).provide('$layout', layout).mount('#app')

