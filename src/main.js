// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueLocalStorage from 'vue-localstorage';
import App from './App';
import router from './router';

Vue.use(VueLocalStorage);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  localStorage: {
    notes: {
      type: Array,
      default: [],
    },
  },
  components: { App },
});
