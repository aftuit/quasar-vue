<template lang="">
  <div class="shop-content ">
    <Banner title="Shop"/>
    <div class="row q-px-xl q-mt-md">
      <div class="col-3 relative-position">
        <Filters />
      </div>
      <div class="col-9">
        <div class="row" v-if="isLoading">
          <div class="col-4 q-px-md" v-for="n in 3" :key="n">
            <Skeleton/>
          </div>
        </div>
        <div class="row" v-else>
          <div class="col-4 q-px-md" v-for="product in sortProducts(filter, products)" :key="product.id">
            <ProductItem
              :product="product"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from 'vue';
import Filters from 'src/components/Filters.vue';
import ProductItem from 'src/components/ProductItem.vue';
import Banner from 'src/components/Banner.vue';
import Skeleton from 'src/components/Skeleton.vue';
import { storeToRefs } from 'pinia';
import { useMainStore } from 'src/stores/stores';

export default defineComponent({
  name: 'shop-page',
  components: { Filters, ProductItem, Banner, Skeleton },
  setup() {
    const mainStore = useMainStore();
    const { products, isLoading, filter } = storeToRefs(mainStore);
    const { getAllProducts, sortProducts } = mainStore;
    return {
      products,
      filter,
      mainStore,
      isLoading,
      getAllProducts,
      sortProducts,
    };
  },

  mounted() {
    this.getAllProducts();
  },
});
</script>
<style lang="scss">
.shop-content {
  margin-top: 100px;
}
</style>
