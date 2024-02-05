<script setup>
import UserLayout from "../layouts/UserLayout.vue";
import { useUserProductStore } from "@/stores/product";
import { useCartStore } from "@/stores/cart";
import Product from "@/components/Product.vue";

const productStore = useUserProductStore();
const cartStore = useCartStore();
console.log("productStore", productStore.statuses);

const addToCart = (product) => {
  console.log("addToCart", product);
  cartStore.addToCart(product);
};
</script>

<template>
  <UserLayout
    ><div class="hero h-96 bg-base-200">
      <div class="hero-content text-center">
        <div class="max-w-md">
          <h1 class="text-5xl font-bold">Hello to Again</h1>
          <p class="py-6">Trust your intuition</p>
        </div>
      </div>
    </div>

    <!-- Product shell -->

    <Product :products="productStore.list" :addToCart="addToCart"> </Product>
    <!-- {{ productStore }}
    <section
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-4 mx-4"
    >
      <div
        v-for="product in productStore.list"
        :key="product"
        class="card w-full bg-base-100 shadow-xl"
      >
        <figure>
          <img
            src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title">{{ product.name }}</h2>
          <p>{{ product.about }}</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </section> -->
  </UserLayout>
</template>
