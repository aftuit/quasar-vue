<template>
  <div class="full-width banner text-center">
    <h2 class="text-bs-primary text-weight-bold font-nurito text-h2">
      {{ title }}
    </h2>
    <div class="text-bs-secondary text-light q-mt-md">
      {{ title }} page description over here
    </div>
  </div>
</template>
<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'banner-component',
  props: {
    title: {
      type: String,
      required: true,
    },
  },
});
</script>
<style lang="scss" scoped>
.banner {
  background: {
    image: url('../assets/img/blog.jpg');
    mask-repeat: no-repeat;
    repeat: no-repeat;
    position: center center;
    size: cover;
  }
  padding: 80px 25px;
}
</style>
