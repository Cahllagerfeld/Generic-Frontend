import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import PrimeVue from 'primevue/config';
import 'primeflex/primeflex.css';
import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

import CustomKnob from './components/customs/Knob.vue';

Vue.component('Knob', CustomKnob);

import VueCompositionAPI from '@vue/composition-api';

Vue.use(VueCompositionAPI);
Vue.use(PrimeVue);

Vue.config.productionTip = false;

store.dispatch('getUIData');

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
