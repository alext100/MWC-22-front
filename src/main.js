import { createApp } from "vue";
import BootstrapVue3 from "bootstrap-vue-3";
import VueNextSelect from "vue-next-select";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "vue-next-select/dist/index.min.css";

const app = createApp(App);
app.use(store);
app.use(router);
app.use(BootstrapVue3);
app.component("vue-select", VueNextSelect);
app.mount("#app");
