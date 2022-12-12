import { createApp } from "vue";
import "./css/style.css";
import "./css/materialdesignicons.css";
import "./css/chosen.css";
import '@mdi/font/css/materialdesignicons.min.css'
import App from "./App.vue";
import { createPinia } from "pinia";

let app = createApp(App);
app.use(createPinia());
app.mount("#app");
