import Vue from 'vue';
import { VBtn, VCheckbox, VTextField, VSwitch } from 'vuetify/lib';

export function installGlobals(): void {
  Vue.component('vBtn', VBtn);
  Vue.component('vCheckbox', VCheckbox);
  Vue.component('vTextField', VTextField);
  Vue.component('vSwitch', VSwitch);
}
