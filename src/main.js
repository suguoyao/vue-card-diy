// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';

Vue.use(MuseUI);

import {getRemSize} from "@/utils/remHandle"

// import FastClick from 'fastclick'
//
// FastClick.attach(document.body)

Vue.prototype.getRemSize = getRemSize
Vue.prototype.DPR = window.devicePixelRatio
// Vue.prototype.DPR_Rate = fontSize * DPR

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
