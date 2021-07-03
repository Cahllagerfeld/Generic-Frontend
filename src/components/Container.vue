<template>
  <div>
    <Card>
      <template #header> </template>
      <template #title> {{ container.name }}</template>
      <template #content>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed
        consequuntur error repudiandae numquam deserunt quisquam repellat libero
        asperiores earum nam nobis, culpa ratione quam perferendis esse,
        cupiditate neque quas!
      </template>
      <!-- <template #footer>
        <Button icon="pi pi-check" label="Save" />
        <Button
          icon="pi pi-times"
          label="Cancel"
          class="p-button-secondary"
          style="margin-left: 0.5em"
        />
      </template> -->
    </Card>
  </div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator';
import Card from 'primevue/card';
import Button from 'primevue/button';

@Component({
  props: {
    container: {
      type: Object,
    },
  },
  components: { Card, Button },
})
export default class Container extends Vue {}
</script>
