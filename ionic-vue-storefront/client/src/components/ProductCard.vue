<template>
  <div class="product-card">
    <img :src="product.image" alt="Product Image" class="product-image" />
    <h3 class="product-title">{{ product.title }}</h3>
    <p class="product-description">{{ product.description }}</p>
    <p class="product-price">${{ product.price.toFixed(2) }}</p>
    <button @click="addToCart" class="add-to-cart-button">Add to Cart</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'ProductCard',
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const store = useStore();

    const addToCart = () => {
      store.commit('ADD_TO_CART', props.product);
    };

    return {
      addToCart
    };
  }
});
</script>

<style scoped>
.product-card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  text-align: center;
}

.product-image {
  max-width: 100%;
  height: auto;
}

.product-title {
  font-size: 1.5em;
  margin: 0.5em 0;
}

.product-description {
  font-size: 1em;
  color: #666;
}

.product-price {
  font-size: 1.2em;
  color: #333;
}

.add-to-cart-button {
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 15px;
  cursor: pointer;
}

.add-to-cart-button:hover {
  background-color: #0056b3;
}
</style>