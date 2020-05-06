import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( /* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/form",
    name: "form",
    component: () =>
      import("../views/form/form.vue")
  },
  {
    path: "/checkbox",
    name: "checkbox",
    component: () =>
      import("../views/checkbox/checkbox.vue")
  },
  {
    path: "/display",
    name: "display",
    component: () =>
      import("../views/display/display.vue")
  },
  {
    path: "/render",
    name: "render",
    component: () =>
      import("../views/render/render.vue")
  },
  {
    path: "/table",
    name: "table",
    component: () =>
      import("../views/table-render/table.vue")
  },
  {
    path: "/parent",
    name: "parent",
    component: () =>
      import("../views/parent.vue")
  },
  {
    path: "/tree",
    name: "tree",
    component: () =>
      import("../views/tree/tree.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;