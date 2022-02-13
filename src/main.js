import { createApp } from "vue";
import BootstrapVue3 from "bootstrap-vue-3";
import VueNextSelect from "vue-next-select";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "vue-next-select/dist/index.min.css";

createApp({}).component("vue-select", VueNextSelect);
createApp(App).use(store).use(router).use(BootstrapVue3).mount("#app");
