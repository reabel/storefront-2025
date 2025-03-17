<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>Product Details</ion-title>
      <ion-buttons slot="end">
        <ion-button @click="addToCart">Add to Cart</ion-button>
      </ion-buttons>
    </ion-toolbar>
  </ion-header>

  <ion-content>
    <div v-if="product">
      <ion-card>
        <img :src="product.image" alt="Product Image" />
        <ion-card-header>
          <ion-card-title>{{ product.name }}</ion-card-title>
          <ion-card-subtitle>\${{ product.price }}</ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>
          <p>{{ product.description }}</p>
        </ion-card-content>
      </ion-card>
    </div>
    <div v-else>
      <p>Loading product details...</p>
    </div>
  </ion-content>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'ProductPage',
  setup() {
    const route = useRoute();
    const store = useStore();
    const productId = route.params.id;

    const product = store.state.products.find((p: any) => p.id === productId);

    const addToCart = () => {
      store.commit('ADD_TO_CART', product);
    };

    return {
      product,
      addToCart,
    };
  },
});
</script>

<style scoped>
ion-card {
  margin: 16px;
}
</style>