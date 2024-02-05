<script setup>
import UserLayout from "../layouts/UserLayout.vue";
import { reactive } from "vue";
import { RouterLink, useRouter } from "vue-router";

import { useCartStore } from "@/stores/cart";

const cartStore = useCartStore();
const route = useRouter();

const FormData = [
  {
    name: "Email address",
    field: "email",
  },
  {
    name: "Name",
    field: "name",
  },
  {
    name: "Address",
    field: "address",
  },
  {
    name: "Note",
    field: "note",
  },
];

const userFormData = reactive({
  email: "",
  name: "",
  address: "",
  note: "",
});

const payment = () => {
  console.log("userFormData", userFormData);
  console.log("item", cartStore.items);
  cartStore.placeorder(userFormData);
  route.push({ name: "success" });
};
</script>

<template>
  <UserLayout>
    <h1 class="text-3xl font-bold m-4">Checkout</h1>
    <div class="flex">
      <section class="flex-1 bg-base-200 p-8">
        <label
          v-for="(form, index) in FormData"
          :key="index"
          class="form-control w-full"
        >
          <div class="label">
            <span class="label-text">{{ form.name }}</span>
          </div>
          <input
            v-model="userFormData[form.field]"
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full"
          />
        </label>
        <button @click="payment" class="btn btn-neutral w-full mt-4">
          ชำระเงิน
        </button>
      </section>
      <section class="flex-auto w-32 bg-slate-200">
        <div
          class="flex bg-orange-100 m-8 py-4"
          v-for="(item, index) in cartStore.items"
          :key="index"
        >
          <div class="flex-1">
            <img :src="item.imageUrl" alt="" class="w-full p-4" />
          </div>
          <div class="flex-1">
            <div class="flex flex-col justify-between h-full">
              <div class="">
                <div>
                  <b>{{ item.name }}</b>
                </div>
                <div>จำนวน : {{ item.quantity }}</div>
              </div>
              <div><RouterLink :to="{ name: 'cart' }">Edit</RouterLink></div>
            </div>
          </div>
        </div>
        <div class="divider"></div>
        <div class="p-8">
          <div><b>Order Summary</b></div>
          <div class="flex justify-between">
            <div>ราคาสินค้าทั้งหมด</div>
            <div>{{ cartStore.summaryPrice }}</div>
          </div>
        </div>
        <div class="divider"></div>
        <div class="flex justify-between p-8 mb-4">
          <div>ค่าส่ง</div>
          <div>0</div>
        </div>
      </section>
    </div>
  </UserLayout>
</template>

<style></style>
