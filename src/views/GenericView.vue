<template>
  <v-container>
    <v-row>
      <v-col
        v-for="(container, index) in containerData"
        :key="index"
        :cols="container.width ? container.width : null"
      >
        <v-sheet elevation="2" class="mx-auto my-12">
          <v-card-title>{{ container.label }}</v-card-title>
          <v-container>
            <v-row>
              <v-col
                v-for="(component, index) in container.components"
                :key="index"
                :cols="component.width ? component.width : null"
              >
                <component
                  class="mx-auto"
                  :is="mapTypeToComponent(component.type)"
                  >{{ component.name }}</component
                >
              </v-col></v-row
            >
          </v-container>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from '@vue/composition-api';
import { Container } from '../interfaces/ui.interface';
import activityData from '../assets/activity.json';
import axios from 'axios';
import MA from 'axios-mock-adapter';
import { mapTypeToComponent } from '../util/componentMap';

const mock = new MA(axios);
mock.onGet('/data').reply(200, activityData);

export default defineComponent({
  props: {
    containerData: {
      type: Array as () => Container[],
      required: false,
    },
  },
  setup() {
    const activity = ref();

    onMounted(async () => {
      // const response = await axios.get('/data');
      // activity.value = response.data;
      // console.log(activity.value);
    });

    return { activity, mapTypeToComponent };
  },
});
</script>
