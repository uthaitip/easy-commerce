<template>
  <section
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-4 mx-4"
  >
    <div
      v-for="(product, index) in products"
      :key="index"
      class="card w-full bg-base-100 shadow-xl"
    >
      <figure>
        <img
          src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
        />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{{ product?.name }}</h2>
        <p>{{ product?.about }}</p>
        <div class="card-actions justify-end">
          <button @click="addToCart(product)" class="btn btn-primary">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { defineProps } from "vue";

// prop
defineProps({
  products: Array,
  addToCart: Function,
});
</script>

<style></style>
