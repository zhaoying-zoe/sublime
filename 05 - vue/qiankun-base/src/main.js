import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueRouter from 'vue-router';

console.error('router', router);

import start from './micro';
start()
// console.error('start', start);

Vue.config.productionTip = false;

Vue.use(VueRouter);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
