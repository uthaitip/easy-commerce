<script setup>
import { RouterLink, RouterView } from "vue-router";
import { onMounted } from "vue";
import { useCartStore } from "./stores/cart";

const cartStore = useCartStore();

onMounted(() => {
  cartStore.loadCart();
});
</script>

<template>
  <RouterView />
</template>
