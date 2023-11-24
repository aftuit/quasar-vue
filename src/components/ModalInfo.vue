<template >
  <q-dialog v-model="modals.info">
    <q-card class="info-content" style="width: 80%; max-width: 80vw">
      <div class="row body-light">
        <div class="col-6 flex justify-center items-center">

          <q-carousel
            v-model="slide"
            transition-prev="scale"
            transition-next="scale"
            swipeable
            animated
            control-color="black"
            navigation
            padding
            arrows
            class="text-white"
          >
            <q-carousel-slide v-for="n in 4" :key="n" :name="n" class="column no-wrap flex-center">
              <img :src="slideImage" alt="" />
            </q-carousel-slide>
          </q-carousel>
        </div>
        <div
          class="col-6 q-pa-lg flex justify-center items-center relative-position"
        >
          <q-btn
            round
            size="md"
            class="btn q-mx-sm absolute-top-right"
            icon="close"
            v-close-popup
          />
          <div>
            <h2 class="text-h2 text-bold q-mt-lg text-bs-primary">
              {{infoProduct.name_uz}}
            </h2>
            <div class="flex items-center q-mt-md" style="align-items: center">
              <q-rating v-model="stars" :max="5" size="32px" />
              <div class="text-positive q-ml-md text-body1">(1 customer review)</div>
            </div>
            <h4 class="text-h5 text-bold q-mt-md text-bs-primary">{{formatCurrency(infoProduct.cost)}}</h4>
            <div class="col-auto text-grey q-pt-sm row no-wrap items-center">
            Created at:
            {{formatDate(infoProduct.created_date)}}
          </div>
            <div class="q-mt-lg text-body1">
              Elementum eu facilisis sed odio morbi quis commodo odio. Mauris
              rhoncus aenean vel elit scelerisque mauris pellentesque. Arcu
              felis bibendum ut tristique et egestas. Id semper risus in
              hendrerit gravida rutrum. Eu mi bibendum neque egestas congue.
            </div>
          </div>
        </div>
      </div>
    </q-card>
  </q-dialog>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useMainStore } from '../stores/stores';
import { storeToRefs } from 'pinia';
import slideImage from '../assets/img/grass.png';
import { formatCurrency, formatDate } from 'src/util/helper';

export default defineComponent({
  name: 'Modal-Info',
  data() {
    return {
      slide: ref(1),
      slideImage,
    };
  },
  setup() {
    const stars = ref(4);
    const mainStore = useMainStore();
    const { modals, infoProduct } = storeToRefs(mainStore);
    return { modals, stars, infoProduct };
  },
  methods: {
    formatCurrency,
    formatDate
  },
});
</script>
<style lang="scss" scoped>
.info-content {
  width: 80%;
  background: #fff;
}
img {
  height: 100%;
  width: 100%;
}
</style>
