<script setup lang="ts">
import sponsors from '../data/sponsors.js'
</script>

<template>
  <div class="homepage-container bg-brand-100">
    <div class="homepage-wrapper">
      <main class>
        <div class="relative py-20 z-0 h-[auto] w-full">
          <div
            class="relative z-20 mx-auto grid grid-cols-1 gap-8 sm:grid-cols-2 md:flex-row h-full justify-center max-w-6xl px-12 "
          >
            <div
              class="flex flex-col justify-center text-center md:text-left gap-10"
            >
              <h1
                class="uppercase flex flex-col text-4xl font-extrabold xl:leading-tight text-verse-500 sm:text-5xl lg:text-5xl xl:text-6xl"
              >
                <span class="block font-sans text-black xl:inline capitalize font-mono">Our Sponsors</span>
              </h1>
              <!-- <flip-book class="mt-[-16%] md:mt-[-12%]" /> -->
              <p class="text-md md:text-lg text-black font-mono font-bold">
                We're lucky to have sponsors support our community. If you're interested in sponsoring us, please reach out to us <a href="mailto:hello@frontend.mu">here</a>
              </p>
              <div class="grid place-items-center md:place-items-start">
                <router-link
                  :to="{ path: '/sponsors' }"
                  class="text-md block w-48 rounded-md bg-brand-600 px-4 py-4 text-center font-medium text-white md:w-64 md:px-8 md:text-xl"
                >
                  View all sponsors
                </router-link>
              </div>
            </div>

            <div class="grid grid-cols-2 gap-4">
              <div v-for="(sponsorType, index) in sponsors" :key="index">
                <a
                  v-for="sponsor in sponsorType.sponsors" :key="sponsor.name"
                  :title="sponsor.description"
                  target="_blank"
                  :href="sponsor.sponsorUrl"
                  class="mt-4 h-full md:mt-0 relative rounded-xl  flex justify-center items-center flex-col gap-4 group bg-white p-6 shadow-md transition-all hover:shadow-lg"
                >
                  <img v-if="sponsor.logo" :src="`/img/sponsors/${sponsor.logo}`">
                  <div v-else>
                    <span class="text-2xl font-bold">{{ sponsor.name }}</span>
                  </div>
                  <div v-if="sponsor.description" class="bg-brand-200 py-1 px-4 text-xs w-full text-center text-verse-600 font-medium rounded-2xl">
                    {{ sponsor.description }}</div>
                </a>

              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
  <!-- <section
    class="flex flex-col justify-center items-center px-4 bg-brand-100"
  >
    <div
      class="flex flex-col md:flex-row py-8 justify-center items-center gap-6 md:gap-8 "
    >
      <p class="text-verse-200 font-bold text-center md:text-left md:text-7xl tracking-wide uppercase ">Sponsors</p>

    </div>
  </section> -->
</template>
