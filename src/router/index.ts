import { createRouter, createWebHistory } from "vue-router"
import HelloWorld from "../components/HelloWorld.vue"

/* For more info, visit https://router.vuejs.org/guide/ */

const routes = [
  {
    // replace - this is your home route...
    path: "",
    name: "home",
    component: HelloWorld,
    props: {
      msg: "Vite + Vue",
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
