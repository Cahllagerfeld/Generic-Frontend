<template>
  <div>
    <div v-if="!data"><PSkeleton /></div>
    <PKnob
      v-if="data"
      v-model="amount"
      :readonly="uiDefinitions.props.readonly"
      :max="uiDefinitions.props.max"
    />
    <pre v-if="data">{{ data }}</pre>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { computed } from '@vue/composition-api';
import PKnob from 'primevue/knob';
import PSkeleton from 'primevue/skeleton';
import _ from 'lodash';
import { useObject, useObjectWithKey } from '../../composables/fetchObject';

@Component({
  components: { PKnob, PSkeleton },
  setup(props, { attrs, root }) {
    const uiDefinitions: any = attrs.component as string;
    const objectType: string = attrs.objectType as string;
    const { data, error } = useObject(objectType);
    const amount = computed(() => data.value.length);

    return { uiDefinitions, objectType, data, amount };
  },
})
export default class Knob extends Vue {}
</script>
