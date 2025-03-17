<template>
  <div class="shopping-cart">
    <h2>Your Shopping Cart</h2>
    <div v-if="cartItems.length === 0">
      <p>Your cart is empty.</p>
    </div>
    <div v-else>
      <ul>
        <li v-for="item in cartItems" :key="item.id">
          <div>
            <h3>{{ item.name }}</h3>
            <p>Price: {{ item.price | currency }}</p>
            <button @click="removeFromCart(item.id)">Remove</button>
          </div>
        </li>
      </ul>
      <div class="total">
        <h3>Total: {{ total | currency }}</h3>
        <button @click="checkout">Checkout</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'ShoppingCart',
  computed: {
    cartItems() {
      return this.$store.state.cart.items;
    },
    total() {
      return this.cartItems.reduce((sum, item) => sum + item.price, 0);
    }
  },
  methods: {
    removeFromCart(itemId: number) {
      this.$store.commit('cart/removeItem', itemId);
    },
    checkout() {
      // Implement checkout logic here
      alert('Proceeding to checkout...');
    }
  }
});
</script>

<style scoped>
.shopping-cart {
  padding: 20px;
}

.total {
  margin-top: 20px;
  font-weight: bold;
}
</style>