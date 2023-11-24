<template>
  <div class="products-content">
    <Banner title="Products" />
    <div class="row q-px-xl q-mt-lg" v-if="isLoading">
      <div class="col-4 q-px-md">
        <Skeleton />
      </div>
      <div class="col-4 q-px-md">
        <Skeleton />
      </div>
      <div class="col-4 q-px-md">
        <Skeleton />
      </div>
    </div>
    <div class="row q-px-xl q-mt-lg" v-else>
      <div class="col-4 q-px-md" v-for="product in products" :key="product.id">
        <ProductItem :product="product" />
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from 'vue';
import ProductItem from 'src/components/ProductItem.vue';
import Skeleton from 'src/components/Skeleton.vue';
import Banner from 'src/components/Banner.vue';

import { storeToRefs } from 'pinia';
import { useMainStore } from 'src/stores/stores';
export default defineComponent({
  name: 'products-page',
  components: { ProductItem, Skeleton, Banner },

  setup() {
    const mainStore = useMainStore();
    const { products, isLoading } = storeToRefs(mainStore);
    const { getAllProducts } = mainStore;

    return {
      products,
      mainStore,
      getAllProducts,
      isLoading,
    };
  },
  mounted() {
    this.getAllProducts();
  },
});
</script>
<style lang="scss" scoped>
.products-content {
  margin-top: 100px;
  .title {
    color: $bs-primary;
  }
}
</style>
