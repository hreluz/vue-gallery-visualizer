<template>
  <NavBar/>
  <div class="container text-center">
    <MenuButtons/>
    <ImageComponent/>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import NavBar from '@/components/NavBar.vue';
import MenuButtons from '@/components/MenuButtons.vue';
import ImageComponent from '@/components/ImageComponent.vue';
export default defineComponent({
  name: 'HomePage',
  components: {
    NavBar,
    MenuButtons,
    ImageComponent
  }
});
</script>