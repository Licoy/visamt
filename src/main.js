// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import config from '@/config'
import importDirective from '@/directive'
import 'iview/dist/styles/iview.css'
import './index.less'
import './libs/iview-cfg';

Vue.use(iView)
Vue.config.productionTip = false
/**
 * @description 全局注册应用配置
 */
Vue.prototype.$config = config
Vue.prototype.$name = "Visamt"
/**
 * 注册指令
 */
importDirective(Vue)
/* eslint-disable */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
