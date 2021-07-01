<template>
  <router-view :key="routerViewUpdate" />
</template>

<script lang="ts">
import uijson from './assets/ui.json';
import Vue from 'vue';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import activityData from './assets/activity.json';

const mock = new MockAdapter(axios);

mock.onGet('/ui').reply(200, uijson);
mock.onGet('/data').reply(200, activityData);

export default Vue.extend({
  name: 'App',
});
</script>
