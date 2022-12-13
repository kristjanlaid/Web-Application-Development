import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home.vue'
import Signup from "../views/signup.vue";
import auth from "../auth";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      beforeEnter: async(to, from, next) => {
        let authResult = auth.authenticated();
        if (!authResult) {
          next('/login')
        } else {
          next();
        }
      }
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/login.vue')
    },
    {
      path: '/signup',
      name: 'signup',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: ()=> import('../views/signup.vue')//Signup
    },
    {
      path: '/addPOST',
      name: 'addPOST',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/addPOST.vue'),
      beforeEnter: async(to, from, next) => {
        let authResult = auth.authenticated();
        if (!authResult) {
          next('/login')
        } else {
          next();
        }
      }
    }
  ],
  linkActiveClass: 'active',
})

export default router
