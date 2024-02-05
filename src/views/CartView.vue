<template>
  <UserLayout>
    <h1 class="text-3xl font-bold m-4">Shopping Cart</h1>
    <div class="flex">
      <div class="flex-auto w-64 bg-base-200 p-4">
        <div v-if="cart.items.length == 0">Cart is Empty</div>
        <div
          v-else
          class="flex"
          v-for="(item, index) in cart.items"
          :key="index"
        >
          <div class="flex-1">
            <img
              class="p-10 w-50"
              src="https://fastly.picsum.photos/id/1/200/300.jpg?hmac=jH5bDkLr6Tgy3oAg5khKCHeunZMHq0ehBZr6vGifPLY"
              alt=""
            />
          </div>
          <div class="flex-1">
            <div class="relative flex flex-col justify-between h-full">
              <div>
                <div class="grid grid-cols-2">
                  <div>
                    <div>
                      <b>{{ item.name }}</b>
                    </div>
                    <div>{{ item.about }}</div>
                    <div>{{ item.price }} B</div>
                  </div>
                  <div class="mr-3">
                    <select
                      v-model="item.quantity"
                      @change="changeQuantity($event, index)"
                      class="select w-full"
                    >
                      <option v-for="(quantity, index) in 20" :key="index">
                        {{ quantity }}
                      </option>
                    </select>
                  </div>
                  <div
                    @click="cart.removeItemInCart(index)"
                    class="absolute top-0 right-0"
                  >
                    <Close></Close>
                  </div>
                </div>
              </div>
              <div><b>In Stock</b></div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex-auto w-32 bg-slate-200 p-4">
        <div class="text-xl font-bold">Order Summary</div>
        <div class="my-4 divide-y divide-black">
          <div class="flex justify-between py-2">
            <div class="text-black">ราคาสินค้าทั้งหมด</div>
            <div class="text-black">{{ cart.summaryPrice }}</div>
          </div>
          <div class="flex justify-between py-2">
            <div class="text-black">ค่าส่ง</div>
            <div class="text-black">0</div>
          </div>
          <div class="flex justify-between py-2">
            <div class="text-black">ราคารวมทั้งหมด</div>
            <div class="text-black">{{ cart.summaryPrice }}</div>
          </div>
          <div>
            <RouterLink
              :to="{ name: 'checkout' }"
              class="btn btn-primary w-full mt-3"
              >ชำระเงิน</RouterLink
            >
          </div>
        </div>
      </div>
    </div>
  </UserLayout>
</template>

<script setup>
import UserLayout from "../layouts/UserLayout.vue";
import Close from "@/components/icons/Close.vue";
import { RouterLink } from "vue-router";

// store
import { useCartStore } from "@/stores/cart";

const cart = useCartStore();

// method
const changeQuantity = (event, index) => {
  const newQuantity = parseInt(event.target.value);
  cart.updateQuantity(index, newQuantity);
};
</script>

<style></style>
