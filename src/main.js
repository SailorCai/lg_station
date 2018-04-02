// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import { Cell, Checklist, Popup, Search, Button, Radio  } from 'mint-ui'
//import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import router from './router'
Vue.component(Cell.name, Cell)
Vue.component(Checklist.name, Checklist)
Vue.component(Popup.name, Popup)
Vue.component(Search.name, Search)
Vue.component(Button.name, Button)
Vue.component(Radio.name, Radio)
//Vue.use(Mint);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
