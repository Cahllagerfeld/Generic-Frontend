import Vue from 'vue';
import Vuex from 'vuex';
import UIJson from '../assets/ui.json';
import router from '../router/index';
import DynamicView from '../views/DynamicView.vue';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    uiDefinition: {},
  },
  mutations: {
    UPDATE_UIDATA(state, newData) {
      state.uiDefinition = newData;
    },
  },
  actions: {
    async getUIData({ commit }): Promise<void> {
      const response = { data: UIJson };
      const data = response.data;
      data.views.forEach((view: any) => {
        router.addRoute({
          path: `/${view.path}`,
          component: DynamicView,
          props: { view },
        });
      });
      commit('UPDATE_UIDATA', response.data);
    },
  },
  modules: {},
});
