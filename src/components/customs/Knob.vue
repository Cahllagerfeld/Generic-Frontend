<template>
  <div>
    <PKnob v-if="data" v-model="data.data.value" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import PKnob from 'primevue/knob';
import _ from 'lodash';
import { useObjectWithKey } from '../../composables/fetchObject';

@Component({
  components: { PKnob },
  setup(props, { attrs, root }) {
    const uiDefinitions: string = attrs.component as string;
    const objectType: string = attrs.objectType as string;
    const { data } = useObjectWithKey(objectType, root.$route.params.id);

    return { uiDefinitions, objectType, data };
  },
})
export default class Knob extends Vue {}
</script>
