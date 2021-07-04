<template>
  <div></div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({
  props: {
    post: { type: Object },
  },
  setup({ post }) {
    console.log(post);
  },
})
export default class PostListElement extends Vue {}
</script>
