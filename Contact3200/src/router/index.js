import { createRouter, createWebHistory } from 'vue-router'
import ContactListView from '../views/ContactListView.vue'
import LogInView from '../views/LogInView.vue'
import NewContactView from '../views/NewContactView.vue'
import EditContactView from '../views/EditContactView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'contactlist',
      component: ContactListView,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/:catchAll(.*)',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: LogInView
    },
    {
      path: '/newcontact',
      name: 'newcontact',
      component: NewContactView,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/editcontact/:id',
      name: 'editcontact',
      component: EditContactView,
      props: true,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth)
  if (requiresAuth) {
    if($cookies.isKey("authToken")){
      console.log("You are authorized to access this area.");
      next()
    }
    else{
      console.log("You are not authorized to access this area.")
      next('login')
    }
  } else {
    next()
  }
})

export default router
