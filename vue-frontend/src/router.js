import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/signup",
      name: "signup",
      component: () => import("./components/SignUp")
    },
    {
      path: "/",
      name: "home",
      component: () => import("./components/Home")
    },
    {
      path: "/boards/create",
      name: "create-board",
      component: () => import("./components/boards/Create")
    },
    {
      path: "/boards/modify",
      name: "modify-board",
      component: () => import("./components/boards/Modify")
    }
  ]
});