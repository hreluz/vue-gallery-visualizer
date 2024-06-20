<template>
  <NavBar/>
    <div class="container text-center">
      <template v-if="!isLoading">
          <MenuButtons/>
          <ImageComponent :key="currentImage.id" :image="currentImage"/>
      </template>
      <template v-else>
        <h1>Loading ...</h1>
      </template>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import NavBar from '@/components/NavBar.vue';
import MenuButtons from '@/components/MenuButtons.vue';
import { useGalleryStore } from '@/composables/gallery/useGalleryStore';
import ImageComponent from '@/components/ImageComponent.vue';
export default defineComponent({
  name: 'HomePage',
  components: {
    NavBar,
    MenuButtons,
    ImageComponent
  },
  setup() {
    const {isLoading, loadImages, currentImage, images} = useGalleryStore();
    
    loadImages();

    return {
      isLoading,
      currentImage,
      images
    }
  }
});
</script>