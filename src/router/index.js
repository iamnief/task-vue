import { createRouter, createWebHashHistory } from "vue-router";
import Books from "../views/Books.vue";

const routes = [
  {
    path: "/",
    name: "Books",
    component: Books,
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
