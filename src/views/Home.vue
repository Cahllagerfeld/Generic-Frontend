<template>
  <div class="p-grid">
    <div class="p-col-12 p-lg-6">
      <Card>
        <template #content>
          <Button label="Text" />
        </template>
      </Card>
    </div>
    <div class="p-col-12 p-lg-6"><Card> </Card></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Button from 'primevue/button';
import Card from 'primevue/card';

export default Vue.extend({
  name: 'Home',
  components: { Card, Button },
});
</script>
