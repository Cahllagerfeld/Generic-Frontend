<template>
  <v-container>
    <v-row class="text-center">
      <v-col> <component :is="button" v-bind="props">Text</component></v-col>
      <v-col class="mb-4"
        ><component :is="button" v-bind="props">Text</component>
      </v-col>
      <v-col class="mb-5"
        ><component :is="button" v-bind="props">Text</component>
      </v-col>
      <v-col><component :is="button" v-bind="props">Text</component> </v-col>
      <v-col> <component :is="button" v-bind="props">Text</component></v-col
      ><v-col><component :is="button" v-bind="props">Text</component> </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { inject, Ref } from '@vue/composition-api';
import Vue from 'vue';
import { UI } from '../interfaces/ui.interface';

export default Vue.extend({
  name: 'HelloWorld',
  setup() {
    const value = inject<Ref<UI>>('ui');
    const props = { label: 'Test' };
    const button = 'vTextField';
    return { value, button, props };
  },

  data: () => ({
    ecosystem: [
      {
        text: 'vuetify-loader',
        href: 'https://github.com/vuetifyjs/vuetify-loader',
      },
      {
        text: 'github',
        href: 'https://github.com/vuetifyjs/vuetify',
      },
      {
        text: 'awesome-vuetify',
        href: 'https://github.com/vuetifyjs/awesome-vuetify',
      },
    ],
    importantLinks: [
      {
        text: 'Documentation',
        href: 'https://vuetifyjs.com',
      },
      {
        text: 'Chat',
        href: 'https://community.vuetifyjs.com',
      },
      {
        text: 'Made with Vuetify',
        href: 'https://madewithvuejs.com/vuetify',
      },
      {
        text: 'Twitter',
        href: 'https://twitter.com/vuetifyjs',
      },
      {
        text: 'Articles',
        href: 'https://medium.com/vuetify',
      },
    ],
    whatsNext: [
      {
        text: 'Explore components',
        href: 'https://vuetifyjs.com/components/api-explorer',
      },
      {
        text: 'Select a layout',
        href: 'https://vuetifyjs.com/getting-started/pre-made-layouts',
      },
      {
        text: 'Frequently Asked Questions',
        href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions',
      },
    ],
  }),
});
</script>
