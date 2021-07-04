<template>
  <div>
    <PostListElement v-for="(post, index) in data" :key="index" :post="post" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { useObject } from '../../../composables/fetchObject';
import PostListElement from './PostListElement.vue';
@Component({
  components: { PostListElement },
  setup(props, { attrs }) {
    // const uiDefinitions: any = attrs.component as string;
    const objectType: string = attrs.objectType as string;
    const { data } = useObject(objectType);

    return { data };
  },
})
export default class PostList extends Vue {}
</script>
