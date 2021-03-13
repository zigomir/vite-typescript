import { createApp } from 'vue'
import App from './App.vue'

let i = 3
try {
  i()
} catch {
  // no-op
}

createApp(App).mount('#app')
