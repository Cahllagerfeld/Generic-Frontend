<template>
  <div class="p-grid">
    <div
      v-for="(containerData, index) in viewContainer"
      :key="index"
      :class="'p-col-12 p-lg-' + containerData.width"
    >
      <Container :container="containerData" :color="view.color" />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { provide } from '@vue/composition-api';
import Container from '../components/Container.vue';
@Component({
  components: { Container },
  props: {
    view: {
      type: Object,
    },
  },
  setup(props: any) {
    const viewContainer: any[] = props.view.container;
    provide('objectType', props.view.objectType);
    return { viewContainer };
  },
})
export default class DynamicVue extends Vue {}
</script>

<style></style>
