<template>
  <div>
    <div v-if="componentData.type === 'display'">
      <display
        :label="componentData.props.label"
        :text="componentData.props.text"
      />
    </div>
    <div v-if="componentData.type === 'button'">
      <v-btn class="mx-auto">{{ componentData.props.text }}</v-btn>
    </div>
    <div v-if="componentData.type === 'textField'">
      <v-text-field
        v-model="value"
        :placeholder="componentData.props.placeholder"
        class="mx-auto"
      ></v-text-field>
    </div>
    <div v-if="componentData.type === 'checkbox'">
      <v-checkbox :label="componentData.props.label" />
    </div>
    <div v-if="componentData.type === 'switch'">
      <v-switch :label="componentData.props.label" />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, watch } from '@vue/composition-api';
import { Component } from '../interfaces/ui.interface';
import { mapTypeToComponent } from '../util/componentMap';
import Display from './DisplayComponent.vue';

export default defineComponent({
  emits: ['input'],
  props: {
    componentData: {
      type: Object as () => Component,
      required: true,
    },
    value: {
      type: [String, Number],
    },
  },
  components: {
    Display,
  },
  setup(props, { emit }) {
    watch(
      () => props.value,
      (value) => {
        emit('input', value);
      },
    );
  },
});
</script>
