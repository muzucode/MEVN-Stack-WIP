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
      component: () => import("./views/Home")
    },
    {
      path: "/boards/create",
      name: "create-board",
      component: () => import("./views/boards/Create")
    },
    {
      path: "/boards/modify",
      name: "modify-board",
      component: () => import("./components/boards/Modify")
    }
    ,
    {
      path: "/boards/explore",
      name: "explore-boards",
      component: () => import("./components/boards/Explore")
    },
    {
      path: "/boards/test",
      name: "test-board",
      component: () => import("./components/boards/test")
    },
    {
      path: "/boards/my-boards",
      name: "my-boards",
      component: () => import("./views/boards/My-boards")
    },
  ]
});