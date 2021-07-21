import { createApp } from 'vue'
import App from './App.vue'
import { useIcon } from '@/package/CoIcon/index'
import 'tailwindcss/tailwind.css'
useIcon()

createApp(App).mount('#app')
