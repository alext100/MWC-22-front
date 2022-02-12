import { createRouter, createWebHistory } from "vue-router";
import Register from "../views/Register.vue";
import Home from "../views/Home.vue";
import ProfesionalInfo from "../views/ProfesionalInfo.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/profesional-info",
    name: "ProfesionalInfo",
    component: ProfesionalInfo,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
