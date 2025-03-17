import { createStore } from 'vuex';

const store = createStore({
  state: {
    products: [],
    cart: [],
    user: null,
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
    addToCart(state, product) {
      const existingProduct = state.cart.find(item => item.id === product.id);
      if (existingProduct) {
        existingProduct.quantity++;
      } else {
        state.cart.push({ ...product, quantity: 1 });
      }
    },
    removeFromCart(state, productId) {
      state.cart = state.cart.filter(item => item.id !== productId);
    },
    clearCart(state) {
      state.cart = [];
    },
    setUser(state, user) {
      state.user = user;
    },
  },
  actions: {
    fetchProducts({ commit }) {
      // Fetch products from an API and commit the setProducts mutation
    },
    login({ commit }, user) {
      // Handle user login and commit the setUser mutation
    },
    logout({ commit }) {
      commit('setUser', null);
    },
  },
  getters: {
    products: state => state.products,
    cart: state => state.cart,
    user: state => state.user,
    cartItemCount: state => state.cart.reduce((count, item) => count + item.quantity, 0),
  },
});

export default store;