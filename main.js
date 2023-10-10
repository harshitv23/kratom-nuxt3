import { createApp } from "vue";
import { App } from "./app.vue";
import { createPinia } from "pinia";

const pinia = createPinia()

const app = createApp()

app.use(pinia)

app.mount('#app')