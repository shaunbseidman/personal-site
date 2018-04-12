import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import footerStuff from '@/components/footerStuff'
import contact from '@/components/contact'
import who from '@/components/who'
import projects from '@/components/projects'
import splash from '@/components/splash'
import headShit from '@/components/headShit'
// import Vue from 'vue';
import VueCarousel from 'vue-carousel';
Vue.use(VueCarousel);

Vue.component('footerStuff', footerStuff)
Vue.component('contact', contact)
Vue.component('who', who)
Vue.component('projects', projects)
Vue.component('splash', splash)
Vue.component('headShit', headShit)
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
