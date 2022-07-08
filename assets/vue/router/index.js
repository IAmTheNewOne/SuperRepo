import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import Tagebuch from "../views/Tagebuch.vue";
import Imprint from "../views/Imprint.vue";
import Test from "../views/Test.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/tagebuch",
    name: "Tagebuch",
    component: Tagebuch,
  },
  {
    path: "/imprint",
    name: "Imprint",
    component: Imprint,
  },
  {
    path: "/test",
    name: "Test",
    component: Test,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;