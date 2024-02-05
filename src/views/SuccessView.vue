<template><UserLayout>Success View</UserLayout></template>
<script setup>
import { onMounted } from "vue";
import UserLayout from "../layouts/UserLayout.vue";
import { useCartStore } from "@/stores/cart";
const cartStore = useCartStore();

onMounted(() => {
  cartStore.loadCart();
  console.log(cartStore.checkout);
});
</script>

<style></style>
