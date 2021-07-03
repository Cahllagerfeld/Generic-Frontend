<template>
  <div>
    <Card :style="'border-left: 8px solid ' + color">
      <template #title> {{ container.name }}</template>
      <template #content>
        <component :is="Test" />
      </template>
    </Card>
  </div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator';
import Card from 'primevue/card';
import Button from 'primevue/button';

@Component({
  props: {
    container: {
      type: Object,
    },
    color: {
      type: String,
    },
  },
  components: { Card, Button },
})
export default class Container extends Vue {}
</script>
