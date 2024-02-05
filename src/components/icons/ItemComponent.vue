<template>
  <div>
    {{ data }}
    <div v-for="item in data" :key="item" class="flex">
      <div class="flex-auto w-32 bg-slate-200" :class="item.class">
        <div class="flex">
          <div class="flex-1">
            <img
              class="w-full p-10"
              src="https://cms.dmpcdn.com/dara/2022/02/17/5754fd50-8fab-11ec-a586-953232392d4e_original.jpg"
            />
          </div>
          <div class="flex-1 p-4">
            <div v-if="item.name">{{ item.name }}</div>
            <div class="flex justify-between">
              <div>
                <div>Just Flower</div>
                <div>100 B</div>
              </div>
              <div>Flower 2</div>
              <!-- <div>Flower 3</div> -->
            </div>
          </div>
        </div>
      </div>
      <div class="flex-auto w-64 bg-base-200">flex2</div>
    </div>
  </div>
</template>

<script lang="ts">
import { list } from "postcss";
export default {
  props: {
    data: [] as any[],
  },
  //   mounted(){

  //   }
};
</script>

<style></style>
