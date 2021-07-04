<template>
  <div>
    <PKnob
      v-model="value"
      :readonly="uiDefinitions.props.readonly"
      :max="uiDefinitions.props.max"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { ref } from '@vue/composition-api';
import PKnob from 'primevue/knob';
import PSkeleton from 'primevue/skeleton';
import _ from 'lodash';

@Component({
  components: { PKnob, PSkeleton },
  setup(props, { attrs, root }) {
    const uiDefinitions: any = attrs.component as string;
    const objectType: string = attrs.objectType as string;
    const value = ref(35);

    return { uiDefinitions, objectType, value };
  },
})
export default class Knob extends Vue {}
</script>
