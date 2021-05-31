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
            <v-row align="center">
              <v-col
                v-for="(component, index) in container.components"
                :key="index"
                :cols="component.width ? component.width : null"
                ><generic-component
                  v-model="activity[component.fieldBinding]"
                  v-if="component.name"
                  :componentData="component"
                ></generic-component> </v-col
            ></v-row>
          </v-container>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts">
import {
  computed,
  defineComponent,
  onMounted,
  ref,
} from '@vue/composition-api';
import { Container } from '../interfaces/ui.interface';
import axios from 'axios';
import GenericComponent from '../components/GenericComponent.vue';

export default defineComponent({
  props: {
    containerData: {
      type: Array as () => Container[],
      required: false,
    },
  },
  components: {
    GenericComponent,
  },
  computed: {},
  setup() {
    const activity = ref();

    onMounted(async () => {
      const response = await axios.get('/data');
      activity.value = response.data.data;
    });

    return { activity };
  },
});
</script>
