<template>
  <div>
    <component
      :is="componentType"
      :component="component"
      :objectType="objectType"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { inject } from '@vue/composition-api';
@Component({
  props: {
    component: { type: Object },
  },
  setup(props: any) {
    const objectType = inject('objectType');
    const componentType = props.component.type;
    return { componentType, objectType };
  },
})
export default class GenericComponent extends Vue {}
</script>
