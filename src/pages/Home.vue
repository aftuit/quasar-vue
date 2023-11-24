<template>
  <div class="content">
    <div class="q-pa-xl row justify-between">
      <div class="col-6">
        <h2 class="text-h2 text-bold q-mt-md">
          Highest Quality Marijuana Seeds
        </h2>
        <p class="q-mt-md text-body1">
          Habitasse platea dictumst quisque sagittis purus sit. Dignissim enim
          sit amet venenatis. In est ante in nibh mauris cursus mattis. Euismod
          elementum nisi quis eleifend quam adipiscing
        </p>

        <q-btn
          class="btn q-mt-lg q-px-lg q-py-sm"
          rounded
          @click="moveToProducts"
          >Our products</q-btn
        >
      </div>
      <div class="col-6 right-img q-pa-0">
        <img
          src="https://rayoflightthemes.com/wordpress-themes/herbalist-wordpress-theme/wp-content/uploads/2022/08/111hemp-oil-from-hemp-seeds-leaves-medical-marijua.png"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Home-page',
  methods: {
    moveToProducts() {
      this.$router.push('/products');
    },
  },
});
</script>

<style lang="scss" scoped>
.content {
  margin-top: 140px;
  position: relative;
  h2 {
    font-weight: 900;
    line-height: 1.1;
    color: $bs-primary;
    margin-top: 45px;
  }
  p {
    padding-top: 6px;
    margin-bottom: 6px;
    color: #556260;
    --widgets-spacing: 20px;
    /* font-size: 20px; */
  }
  .btn {
    background: $bs-third;
    color: $bs-primary;
  }
  img {
    position: fixed;
    right: 0;
    bottom: 0;
    width: 65%;
  }
}
</style>
