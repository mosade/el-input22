import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router'
import ElInput2 from './components/ElInput2.vue'

Vue.use(ElementUI)
Vue.component('ElInput', ElInput2)
Vue.component('ElInput2', ElInput2)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
