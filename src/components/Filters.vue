<template lang="">
    <q-list class="rounded-borders">
      <q-expansion-item
        expand-separator
        icon="grass"
        label="Price"
        class="q-mt-lg text-h6 text-bs-primary"
        default-opened
        expand-icon="add"
        expanded-icon="remove"
      >
        <q-card>
          <q-card-section>
            <q-badge color="positive" class="q-py-sm text-subtitle1">
              Price: from ${{ filter.price }}
            </q-badge>
            <q-slider
              v-model="filter.price"
              color="green"
              :min="0"
              :step="1"
              :max="100000"
            />
          </q-card-section>
        </q-card>
      </q-expansion-item>

      <q-expansion-item
        expand-separator
        icon="grass"
        label="Sort by"
        class="q-mt-lg text-h6 text-bs-primary"
        expand-icon="add"
        expanded-icon="remove"
      >
        <q-card>
          <q-card-section>
            <div class="q-gutter-sm">
              <ul>
                <li>
                  <q-checkbox v-model="filter.category" :val="1" label="O'simliklar" color="positive" />
                </li>
                <li>
                  <q-checkbox v-model="filter.category" :val="2" label="Yovvoyi hayvonlar" color="positive" />
                </li>
                <li>
                  <q-checkbox v-model="filter.category" :val="3" label="Daraxtlar" color="positive" />
                </li>
              </ul>
    </div>
          </q-card-section>
        </q-card>
      </q-expansion-item>

    </q-list>
</template>
<script>
import { defineComponent } from 'vue';
import { useMainStore } from 'src/stores/stores';
import { storeToRefs } from 'pinia';

export default defineComponent({
  name: 'filters-component',
  setup() {
    const mainStore = useMainStore();
    const { filter } = storeToRefs(mainStore);
    return { filter };
  },
});
</script>
<style lang="scss" scoped>
ul {
  list-style: none;
}
</style>
