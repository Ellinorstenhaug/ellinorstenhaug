import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import store from './store/index'
import VueAnime from 'vue-animejs';
import router from './router.js';
import VuePageTransition from 'vue-page-transition'
Vue.use(VueAnime)
Vue.use(VuePageTransition)

require('./assets/css/style.css');

Vue.directive('scroll', {
  inserted: function(el, binding) {
    let f = function(evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener('scroll', f);
      }
    };
    window.addEventListener('scroll', f);
  },
});



Vue.config.productionTip = false
new Vue({
  vuetify,
  render: h => h(App),
  store,
  router,
}).$mount('#app')