import { createApp } from "vue";
import { createPinia } from "pinia";
import App from './app.vue';
import Notifications from '@kyvg/vue3-notification';

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(Notifications)
app.mount('#app')