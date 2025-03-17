<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>Shopping Cart</ion-title>
    </ion-toolbar>
  </ion-header>

  <ion-content>
    <div v-if="cartItems.length === 0">
      <ion-text>No items in the cart.</ion-text>
    </div>
    <div v-else>
      <shopping-cart :items="cartItems" @remove="removeFromCart" />
      <ion-button expand="full" @click="checkout">Proceed to Checkout</ion-button>
    </div>
  </ion-content>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from 'vuex';
import ShoppingCart from '@/components/ShoppingCart.vue';

export default defineComponent({
  components: {
    ShoppingCart,
  },
  setup() {
    const store = useStore();
    const cartItems = store.state.cart.items;

    const removeFromCart = (itemId: string) => {
      store.commit('cart/removeItem', itemId);
    };

    const checkout = () => {
      // Logic for proceeding to checkout
      console.log('Proceeding to checkout...');
    };

    return {
      cartItems,
      removeFromCart,
      checkout,
    };
  },
});
</script>

<style scoped>
/* Add any specific styles for the CartPage here */
</style>