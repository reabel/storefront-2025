<template>
  <ion-app>
    <NavBar />
    <ion-router-outlet></ion-router-outlet>
  </ion-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavBar from './components/NavBar.vue';

export default defineComponent({
  name: 'App',
  components: {
    NavBar
  }
});
</script>

<style>
/* Add any global styles here */
</style>