import Router from 'vue-router'
import screensSchema from './screensSchema'
import Home from '@/components/Home'
import Gallery from '@/components/Gallery'

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home,
      children: screensSchema.home.screens.map(screen => ({
        path: screen.path,
        component: screen.component,
        props: screen.routerProps,
        meta: {
          theme: screen.theme
        }
      }))
    },
    {
      path: '/gallery',
      component: Gallery
    }
  ]
})
