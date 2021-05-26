<template>
  <v-container>
    <v-row>
      <v-col
        v-for="(container, index) in containerData"
        :key="index"
        :cols="container.width ? container.width : null"
      >
        <v-card :loading="loading" class="mx-auto my-12">
          <v-card-title>{{ container.label }}</v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { Container } from '../interfaces/ui.interface';

export default defineComponent({
  props: {
    containerData: {
      type: Array as () => Container[],
      required: false,
    },
  },
  setup(props) {
    console.log(JSON.stringify(props.containerData));
  },
});
</script>
