<template>
  <UserLayout>
    <div class="text-3xl m-4">search : {{ searchText }}</div>
    <Proudct :products="filterProduct"></Proudct>
  </UserLayout>
</template>

<script setup>
// ============== start import =================
//config
import { onMounted, ref, computed, watch } from "vue";
import { useRoute } from "vue-router";
// layout
import UserLayout from "../layouts/UserLayout.vue";

// store import
import { useUserProductStore } from "@/stores/product";
import Proudct from "@/components/Product.vue";
import router from "@/router";

// ================= end import =================
// data
const route = useRoute();
const searchText = ref("");

const useProduct = useUserProductStore();

// method

//computed
const filterProduct = computed(() => {
  return useProduct.filterProducts(searchText.value);
});

// watch
watch(
  () => route.query.q,
  (newSearchText) => {
    searchText.value = newSearchText;
  },{immediate: true}
);

// mounted

// onMounted(() => {
//   console.log("onMounted", route.query.q);
//   if (route.query.q) {
//     searchText.value = route.query.q;
//   }
// });
</script>

<style></style>
