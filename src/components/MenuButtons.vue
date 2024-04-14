<template>
  <div class="row my-3">
    <div class="col">
      <button type="button" disabled class="btn btn-outline-primary previous-button" @click="previous">Previous</button>
    </div>
    <div class="col">
      <button type="button" class="btn btn-outline-warning random-button" @click="random">Random</button>
    </div>
    <div class="col">
      <button type="button" class="btn btn-outline-primary next-button" @click="next">Next</button>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'MenuButtons',
});
</script>