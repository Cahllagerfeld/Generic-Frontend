import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import Adatper from 'axios-mock-adapter';
import UIJson from '../assets/ui.json';
import router from '../router/index';
import DynamicView from '../views/DynamicView.vue';
import { deUmlaut } from '../util/umlaute';

const mock = new Adatper(axios);

mock.onGet('/ui').reply(200, UIJson);

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
      const response = await axios.get('/ui');
      const data = response.data;
      data.views.forEach((view: any) => {
        router.addRoute({
          path: `/${deUmlaut(view.name.toLowerCase())}`,
          component: DynamicView,
          props: { view },
        });
      });
      commit('UPDATE_UIDATA', response.data);
    },
  },
  modules: {},
});
