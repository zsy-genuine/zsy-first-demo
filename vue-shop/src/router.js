import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import My from "./views/My.vue";

Vue.use(Router);

export default new Router({
  mode:'history',
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path:"/my",
      name:"my",
      component: My
      // component: () =>
      //   import( "./views/My.vue")
    },
    {
      path:"/car",
      name:"car",
      // component: My
      component: () =>
        import( "./views/Car.vue")
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      // path:"/detail/:id",
      path:"/detail",

      name:"detail",
      component: () =>
        import( "./views/Detail.vue")
    }
  ]
});
