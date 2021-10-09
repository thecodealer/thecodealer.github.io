import { createApp } from 'vue'
import App from './App.vue'
import config from '../portfolio.json'

const layout = window.location.pathname.indexOf('/l/') !== -1 ? window.location.pathname.substr(3) : 'default'
createApp(App).provide('$config', config).provide('$layout', layout).mount('#app')

