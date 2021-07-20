import { createApp } from 'vue'
import App from './App.vue'
import { useIcon } from '@/package/CoIcon/index'
useIcon()

createApp(App).mount('#app')
