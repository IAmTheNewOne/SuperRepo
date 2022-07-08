import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Imprint from "../views/Imprint.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/imprint",
    name: "Imprint",
    component: Imprint,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;