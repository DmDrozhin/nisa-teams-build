import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ui from './components/ui/ui-index.js'

const app = createApp(App)
ui.forEach(it => app.component(it.name, it.ui))

app.use(store).use(router).mount('#app')
