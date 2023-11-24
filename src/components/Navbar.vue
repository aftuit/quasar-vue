<template>
  <div class="q-px-xl flex justify-between items-center wrapper" >
    <div class="">
      <router-link to="/">
        <img :src="logo" alt="" />
      </router-link>
    </div>

    <div class="links">
      <ul class="flex items-center justify-between">
        <li class="q-px-lg">
          <router-link to="/">Home</router-link>
        </li>
        <li class="q-px-lg">
          <router-link to="/products">Products</router-link>
        </li>
        <li class="q-px-lg">
          <router-link to="/shop">Shop</router-link>
        </li>
        <li class="q-px-lg">
          <router-link to="/contact">Contact</router-link>
        </li>
      </ul>
    </div>

    <div class="button">
      <q-btn round class="btn q-mx-sm" icon="shopping_cart" />
      <q-btn @click="moveToAdmin" round class="btn q-mx-sm" icon="manage_accounts" />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import logo from '../assets/logo.svg';
export default defineComponent({
  name: 'Navbar-vue',

  setup () {
    return {
      logo,
    }
  },
  methods: {
    moveToAdmin() {
      this.$router.push('/admin')
    }
  },
});
</script>

<style lang="scss" scoped>
.wrapper {
  position: fixed;
  height: 100px;
  top: 0;
  right: 0;
  left: 0;
  background-color: #fff;
  z-index: 12;
  transition: all .2s ease;
  ul {
    list-style: none;
    li {
      a {
        position: relative;
        font-size: 17px;
        font-weight: 700;
        line-height: 1;
        text-decoration: none;
        color: $bs-primary;
        outline: none;
        -webkit-transition: color 0.5s ease;
        -moz-transition: color 0.5s ease;
        -o-transition: color 0.5s ease;
        transition: color 0.5s ease;
        &:hover {
          color: $bs-fourth;
        }
      }
    }
  }
  .btn {
    transition: color 0.5s ease;
    background-color: $bs-third;
  }
}
</style>

