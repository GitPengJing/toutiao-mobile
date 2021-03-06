import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import plugin from '@/utils/plugin' // 引入插件
import '@/permission' // 导航守卫
import 'amfe-flexible' // 根据屏幕大小的改变 改变屏幕font-size的大小
import Vant, { Lazyload } from 'vant' // 引入vant组件
import 'vant/lib/index.less' // 引入vant 样式
import '@/styles/index.less' // 引入全局自定义样式
Vue.use(Vant) // 全局注册
Vue.use(plugin) // 全局注册plugin工具组件
Vue.use(Lazyload) // 全局注册图片懒加载

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
