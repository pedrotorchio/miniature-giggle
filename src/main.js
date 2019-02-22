import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

import SvgIcon from 'vue-svgicon';
Vue.use(SvgIcon);
Vue.mixin({
  data: () => ({
    boundingBox: null
  }),
  mounted() {
    if (this.$el && this.$el.getBoundingClientRect)
      this.boundingBox = this.$el.getBoundingClientRect();
  }
});
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
