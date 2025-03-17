<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>Home</ion-title>
    </ion-toolbar>
  </ion-header>

  <ion-content>
    <h1>Welcome to the Storefront!</h1>
    <p>Explore our products below:</p>
    <div class="product-list">
      <ProductCard v-for="product in products" :key="product.id" :product="product" />
    </div>
  </ion-content>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ProductCard from '@/components/ProductCard.vue';

export default defineComponent({
  name: 'HomePage',
  components: {
    ProductCard,
  },
  data() {
    return {
      products: [
        // Sample product data
        { id: 1, name: 'Product 1', price: 29.99, image: 'path/to/image1.jpg' },
        { id: 2, name: 'Product 2', price: 39.99, image: 'path/to/image2.jpg' },
        { id: 3, name: 'Product 3', price: 49.99, image: 'path/to/image3.jpg' },
      ],
    };
  },
});
</script>

<style scoped>
.product-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>