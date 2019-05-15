import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/mapstate",
      name: "mapstate",
      component:()=>import("./views/MapState.vue")
    },
    {
      path: "/mapactions",
      name: "mapactions",
      component:()=>import("./views/MapActions.vue")
    },
    {
      path: "/mapmutations",
      name: "mapmutations",
      component:()=>import("./views/MapMutations.vue")
    },
    {
      path: "/list",
      name: "list",
      component:()=>import("./views/List.vue")
    },
    {
      path: "/car",
      name: "car",
      component:()=>import("./views/Car.vue")
    },
    {
      path: "/vuexsplit",
      name: "vuexsplit",
      component:()=>import("./views/VuexSplit.vue")
    },
    {
      path: "/getuser",
      name: "getuser",
      component:()=>import("./views/GetUser.vue")
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
