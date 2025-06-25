import { createApp } from "vue";
import "@fortawesome/fontawesome-free/css/all.min.css";
import App from "./App.vue";
import router from "./router";
import "./style.css";

createApp(App).use(router).mount("#app");
