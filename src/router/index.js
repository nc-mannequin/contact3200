import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactListView from '../views/ContactListView.vue'
import NewContactView from '../views/NewContactView.vue'
import EditContactView from '../views/EditContactView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginPageView.vue')
    },
    {
      path: '/contact_list',
      name: 'contact_list',
      component: ContactListView
    },
    {
      path: '/new_contact',
      name: 'new_contact',
      component: NewContactView
    },
    {
      path: '/edit_contact',
      name: 'edit_contact',
      component: EditContactView
    }
  ]
})

export default router
