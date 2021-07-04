<template>
  <div>
    <Card :style="'border-left: 8px solid ' + color">
      <template #title> {{ container.name }}</template>
      <template #content>
        <GenericComponent
          v-for="(component, index) in container.components"
          :key="index"
          :component="component"
        />
      </template>
    </Card>
  </div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator';
import GenericComponent from './GenericComponent.vue';
import Card from 'primevue/card';

@Component({
  props: {
    container: {
      type: Object,
    },
    color: {
      type: String,
    },
  },
  components: { Card, GenericComponent },
})
export default class Container extends Vue {}
</script>
