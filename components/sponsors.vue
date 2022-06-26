<template>
  <section
    :class="`${props?.backgroundColor} flex flex-col justify-center items-center px-4`"
  >
    <div
      class="flex flex-col justify-center items-center gap-6 md:gap-8 py-8 md:pt-16 md:pb-10"
    >
      <p class="text-gray-400 font-bold text-2xl">Sponsors</p>
      <button @click="goToRingier">
          <logo-ringier class="w-48 md:w-64 h-8 opacity-80" />
      </button>
    </div>
    <div
      class="w-96 md:w-[700px] lg:w-[1050px] border-t-2 border-gray-100 p-4 text-center text-gray-500 font-light text-xs md:text-normal"
    >
      2022-present Front-End Coders Mauritius
    </div>
  </section>
</template>

<script setup lang="ts">
import Vue from "vue";

const props = defineProps({
  backgroundColor: String,
});

function goToRingier() {
  const navUrl = "https://www.ringier.com/about-us/south-africa/"
  window.open(navUrl, "_blank");
}
</script>