import Vue from 'vue'
import Router from 'vue-router'
import routes from './routers'
import iView from 'iview'

Vue.use(Router)
const router = new Router({
  routes,
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  try{
    document.title = to.meta.title + ' - '+Vue.prototype.$name;
  }catch(e){console.warn('load title warning!')}
  iView.LoadingBar.start()
  next()
})

router.afterEach(to => {
  iView.LoadingBar.finish()
  window.scrollTo(0, 0)
})

export default router
