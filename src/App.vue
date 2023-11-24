<template>
  <Navbar />
  <ModalInfo />
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Navbar from './components/Navbar.vue';
import ModalInfo from 'src/components/ModalInfo.vue';

export default defineComponent({
  name: 'App',
  components: { Navbar , ModalInfo  },
});
</script>


