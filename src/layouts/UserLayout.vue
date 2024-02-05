<template>
  <div class="container mx-auto">
    <div class="navbar bg-base-100">
      <div class="flex-1">
        <RouterLink :to="{ name: 'home' }" class="btn btn-ghost text-xl"
          >Mint Shopping</RouterLink
        >
      </div>
      <div class="flex-none gap-2">
        <div class="form-control">
          <input
            type="text"
            placeholder="Search"
            class="input input-bordered w-24 md:w-auto"
            v-model="searchText"
            @keyup="handleSearch"
          />
        </div>

        <div class="dropdown dropdown-end">
          <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
            <div class="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span class="badge badge-sm indicator-item">
                {{ cart.summaryQuantity }}</span
              >
            </div>
          </div>
          <div
            tabindex="0"
            class="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
          >
            <div class="card-body">
              <span class="font-bold text-lg"
                >{{ cart.summaryQuantity }} Items</span
              >
              <span class="text-info">Subtotal: ${{ cart.summaryPrice }}</span>
              <div class="card-actions">
                <router-link
                  :to="{ name: 'cart' }"
                  class="btn btn-primary btn-block"
                  >View cart</router-link
                >
              </div>
            </div>
          </div>
        </div>
        <!-- Button Login -->
        <button @click="login" v-if="!isLogged" class="btn btn-ghost">
          Login
        </button>
        <!-- Profile -->
        <div v-else class="dropdown dropdown-end">
          <div
            tabindex="0"
            role="button"
            class="btn btn-ghost btn-circle avatar"
          >
            <div class="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <ul
            tabindex="0"
            class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <RouterLink :to="{ name: 'profile' }" class="justify-between">
                Profile
              </RouterLink>
            </li>
            <li><a @click="logOut">Logout</a></li>
          </ul>
        </div>
      </div>
    </div>
    <!-- main content -->
    <slot>
      <div v-for="item in data" :key="item">
        {{ item.name }} || {{ item.subtitle }} ||
      </div>
      <item :data="data"></item>
      <div class="flex">
        <div class="flex-auto w-32 bg-slate-200">
          <div class="flex">
            <div class="flex-1">
              <img
                class="w-full p-10"
                src="https://cms.dmpcdn.com/dara/2022/02/17/5754fd50-8fab-11ec-a586-953232392d4e_original.jpg"
              />
            </div>
            <div class="flex-1 p-4">
              <div class="flex justify-between">
                <div>
                  <div>Flower</div>
                  <div>Just Flower</div>
                  <div>100 B</div>
                </div>
                <div>Flower 2</div>
                <div>Flower 3</div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex-auto w-64 bg-base-200">flex2</div>
      </div>
    </slot>
    <!-- footer  -->
    <footer class="footer p-10 bg-neutral text-neutral-content">
      <nav>
        <h6 class="footer-title">Services</h6>
        <a class="link link-hover">Branding</a>
        <a class="link link-hover">Design</a>
        <a class="link link-hover">Marketing</a>
        <a class="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <h6 class="footer-title">Company</h6>
        <a class="link link-hover">About us</a>
        <a class="link link-hover">Contact</a>
        <a class="link link-hover">Jobs</a>
        <a class="link link-hover">Press kit</a>
      </nav>
      <nav>
        <h6 class="footer-title">Legal</h6>
        <a class="link link-hover">Terms of use</a>
        <a class="link link-hover">Privacy policy</a>
        <a class="link link-hover">Cookie policy</a>
      </nav>
    </footer>
  </div>
</template>

<script setup>
import { RouterLink, useRouter } from "vue-router";
import { ref, onMounted } from "vue";
import Item from "../components/icons/ItemComponent.vue";

import { useCartStore } from "@/stores/cart";

// data
const isLogged = ref(false);
const searchText = ref("");
const router = useRouter();
const cart = useCartStore();

// onMounted
onMounted(() => {
  if (localStorage.getItem("isLoggedIn")) {
    isLogged.value = true;
  }
});

//methods
const login = () => {
  isLogged.value = true;
  // set localStorage
  localStorage.setItem("isLoggedIn", true);
};

const logOut = () => {
  isLogged.value = false;
  localStorage.removeItem("isLoggedIn");
};

const handleSearch = (event) => {
  if (event.key == "Enter") {
    router.push({
      name: "search",
      query: {
        q: searchText.value,
      },
    });
  }
};

const data = ref([
  {
    name: "test1",
    subtitle: "subtitle1",
  },
  {
    // name: "title2",
    subtitle: "subtitle2",
    class: "bg-orange-500",
  },
]);
const aaa = {
  name: "test1",
  subtitle: "subtitle1",
};
</script>

<style></style>
