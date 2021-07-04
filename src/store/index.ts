import Vue from 'vue';
import Vuex from 'vuex';
import axios, { AxiosResponse } from 'axios';
import Adatper from 'axios-mock-adapter';
import UIJson from '../assets/ui.json';
import router from '../router/index';
import DynamicView from '../views/DynamicView.vue';
import ActivityData from '../assets/activity.json';

const mock = new Adatper(axios);

mock.onGet('/ui').reply(200, UIJson);
mock.onGet('/activity/4').reply(200, ActivityData);

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
      const response: AxiosResponse = await axios.get('/ui');
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
