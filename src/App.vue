<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <router-view :key="routerViewUpdate" />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import uijson from './assets/ui.json';
import Vue from 'vue';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { onMounted, provide, ref } from '@vue/composition-api';
import { deUmlaut } from './util/umlaute';
import router from './router/index';
import { UI, View } from './interfaces/ui.interface';
import Generic from './views/GenericView.vue';
import activityData from './assets/activity.json';

const mock = new MockAdapter(axios);

mock.onGet('/ui').reply(200, uijson);
mock.onGet('/data').reply(200, activityData);

export default Vue.extend({
  name: 'App',
  setup() {
    const ui = ref<UI>();
    const routerViewUpdate = ref(0);

    onMounted(async () => {
      const response = await axios.get('/ui');
      ui.value = response.data;
      response.data.views.forEach((view: View) => {
        JSON.stringify(view.container);
        router.addRoute({
          path: `/${deUmlaut(view.name).toLowerCase()}`,
          component: Generic,
          props: { containerData: view.container },
        });
      });
      routerViewUpdate.value++;
    });

    provide('ui', ui);

    return {
      routerViewUpdate,
    };
  },
});
</script>
