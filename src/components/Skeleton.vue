<template lang="">
  <q-card class="q-mt-md">
      <q-skeleton height="200px" square />
      <q-item>
        <q-item-section>
          <q-item-label>
            <q-skeleton type="text" />
          </q-item-label>
          <q-item-label caption>
            <q-skeleton type="text" />
          </q-item-label>
        </q-item-section>
        <q-item-section avatar>
          <q-skeleton type="QAvatar" />
        </q-item-section>
      </q-item>
      <q-card-actions align="right" class="q-gutter-md">
        <q-skeleton type="QBtn" />
        <q-skeleton type="QBtn" />
      </q-card-actions>
    </q-card>
</template>
<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'skeleton-component'
})
</script>
<style lang="scss">

</style>
