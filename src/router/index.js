import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import info from '@/components/info'
import footerStuff from '@/components/footerStuff'
import contact from '@/components/contact'
import who from '@/components/who'
import projects from '@/components/projects'
import splash from '@/components/splash'

Vue.component('info', info)
Vue.component('footerStuff', footerStuff)
Vue.component('contact', contact)
Vue.component('who', who)
Vue.component('projects', projects)
Vue.component('splash', splash)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'splash',
      component: splash
    },
    {
      path: '/projects',
      name: 'projects',
      component:projects
    },
    {
      path: '/who',
      name: 'who',
      component:who
    },
    {
      path: '/contact',
      name: 'contact',
      component:contact
    }
  ]
})
