<template lang="">
      <q-card class="my-card q-mt-md" flat bordered>
      <q-img src="https://cdn.quasar.dev/img/chicken-salad.jpg" />

      <q-card-section>
        <q-btn
          @click="toggleInfoModal(product)"
          fab
          icon="visibility"
          class="absolute btn-view"
          style="top: 0; right: 12px; transform: translateY(-50%);"
        />

        <div class="row no-wrap items-center">
          <div class="col text-h6 ellipsis">
            {{product.name_uz}}
          </div>
          <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
            <q-icon name="event" />
            {{formatDate(product.created_date)}}
          </div>
        </div>

        <q-rating v-model="stars" :max="5" size="32px" />
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-subtitle1">
          {{
            formatCurrency(product.cost)
          }}
        </div>
        <div class="text-caption">
          Group type: {{getProductType(product.product_type_id)}}
        </div>
      </q-card-section>

      <!-- <q-separator />

      <q-card-actions class="justify-end">
        <q-btn flat bordered class="q-mx-sm" color="positive">
          Edit
        </q-btn>
        <q-btn flat bordered class="q-mx-sm" color="negative">
          Delete
        </q-btn>
      </q-card-actions> -->
    </q-card>
</template>
<script>
import { defineComponent, ref } from 'vue';
import { useMainStore } from '../stores/stores';
import { formatCurrency, formatDate, getProductType } from '../util/helper'


export default defineComponent({
  name: 'product-item',
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const stars = ref(4);
    const mainStore = useMainStore();
    const { toggleInfoModal } = mainStore;

    return {
      toggleInfoModal,
      mainStore,
      stars,
    };
  },

  methods: {
    formatCurrency,
    formatDate,
    getProductType
  },
});
</script>
<style lang="scss" scoped>
.my-card {
  box-shadow: 0px 0px 20px rgba(37, 143, 103, 0.15) !important;
  .btn-view {
    background: $bs-fourth;
    color: #fff;
  }
}
</style>
