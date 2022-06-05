<script setup lang="ts">
import Vue from "vue";

const props = defineProps({
  backgroundColor: String,
});
</script>

<template>
  <section
    :class="`${props?.backgroundColor} flex flex-col justify-center items-center px-4`"
  >
    <div
      class="flex flex-col justify-center items-center gap-6 md:gap-8 py-8 md:pt-16 md:pb-10"
    >
      <p class="text-gray-400 font-bold text-2xl">Sponsors</p>
      <!-- <logo-ringier class="w-48 md:w-64 h-8 opacity-80" /> -->
      <div class="text-3xl font-bold opacity-50 italic text-yellow-600">
        YOUR LOGO HERE
      </div>
    </div>
    <div
      class="w-96 md:w-[700px] lg:w-[1050px] border-t-2 border-gray-100 p-4 text-center text-gray-500 font-light text-xs md:text-normal"
    >
      Copyright © 2022-present Front-End Coders Mauritius
    </div>
  </section>
</template>
