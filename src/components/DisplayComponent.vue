<template>
  <div>
    <div class="label">
      {{ label }}
    </div>
    <b> {{ text }}</b>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  props: {
    label: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
});
</script>
<style lang="scss" scoped>
.label {
  font-size: 10pt;
}
</style>
