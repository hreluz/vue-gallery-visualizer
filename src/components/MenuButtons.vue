<template>
  <div class="row my-3">
    <div class="col">
      <button v-if="showPreviousButton" type="button" class="btn btn-outline-primary previous-button" @click="previous">Previous</button>
    </div>
    <div class="col">
      <button type="button" class="btn btn-outline-warning random-button" @click="random">Random</button>
    </div>
    <div class="col">
      <button v-if="showNextButton" type="button" class="btn btn-outline-primary next-button" @click="next">Next</button>
    </div>
  </div>
</template>
<script lang="ts">
import { useGalleryStore } from '@/composables/gallery/useGalleryStore';
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'MenuButtons',
  methods: {
    previous() {
      this.previousImage();
    },
    random() {
      console.log('random')
    },
    next() {
      this.nextImage();
    }
  },
  setup() {
    const {showPreviousButton, showNextButton, nextImage, previousImage} = useGalleryStore();

    return {
      showPreviousButton,
      showNextButton,
      nextImage,
      previousImage
    }
  }
});
</script>