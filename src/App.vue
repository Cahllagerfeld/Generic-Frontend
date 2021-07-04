<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',
});
</script>
<style>
@media (min-width: 992px) {
  #app {
    width: 1440px;
    margin: 0 auto;
  }
}
</style>
