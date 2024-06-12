import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        description:
          'Jasa pembuatan website murah dan mudah untuk pemula. Kami membantu Anda membuat website profesional tanpa perlu pengetahuan coding.'
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

router.beforeEach((to) => {
  const { description } = to.meta
  const defaultDescription = 'Default Description'

  const descriptionElement = document.querySelector('head meta[name="description"]')

  if (descriptionElement !== null)
    descriptionElement.setAttribute('content', (description as string) ?? defaultDescription)
})

export default router
