<template>
  <img v-if="image" :src="`${image.path}`" class="img-fluid" alt="">
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import {Image as ImageInterface} from '@/interfaces/images';

export default defineComponent({
  name: 'ImageComponent',
  props: {
    image: {
      type: Object as PropType<ImageInterface>,
      required: true
    }
  },
  setup() {
    return {
    }
  }
});
</script>