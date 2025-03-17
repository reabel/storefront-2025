import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import ProductPage from '../views/ProductPage.vue';
import CartPage from '../views/CartPage.vue';
import CheckoutPage from '../views/CheckoutPage.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/product/:id',
    name: 'Product',
    component: ProductPage
  },
  {
    path: '/cart',
    name: 'Cart',
    component: CartPage
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: CheckoutPage
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;