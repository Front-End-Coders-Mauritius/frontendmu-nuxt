<script setup lang="ts">
import sponsorTypes from '../data/sponsors.js'

definePageMeta({
  layout: 'custom',
  layoutTransition: {
    name: 'fade',
  },
})
</script>

<template>
  <div class="container max-w-7xl mx-auto">
    <div class="bg-white">
      <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 lg:py-24">
        <div class="space-y-8 sm:space-y-12">
          <div class="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl text-center">
            <h2 class="text-3xl font-bold tracking-tight sm:text-5xl sm:tracking-tight">Sponsors</h2>
            <p class="text-xl text-gray-500"> We're lucky to have sponsors support our community. If you're interested
              in sponsoring us, please reach out to the organizers <a href="mailto:hello@frontend.mu">here</a> </p>
          </div>
          <div v-for="(sponsorType, index) in sponsorTypes" :key="index">
            <div class="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
              <h2 class="text-3xl font-bold tracking-tight sm:text-4xl sm:tracking-tight font-mono">{{ sponsorType.title
              }}</h2>
              <p class="text-xl text-gray-500">{{ sponsorType.description }}</p>
            </div>
            <ul
              role="list"
              class="mx-auto mt-6 grid grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-3 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-12 xl:grid-cols-3"
            >
              <li v-for="sponsor in sponsorType.sponsors" :key="sponsor.name">
                <a
                  target="_blank" :href="sponsor.sponsorUrl"
                  class="mt-4 md:mt-0 relative rounded-xl flex justify-center items-center  flex-col gap-2 group bg-white p-6 shadow-md transition-all hover:shadow-lg border-t-8 border-solid border-blue-500"
                >
                  <!-- <logo-ringier class="w-48 h-auto opacity-80" /> -->
                  <img v-if="sponsor.logo" class="w-48 h-auto" :src="`/img/sponsors/${sponsor.logo}`">
                  <div v-else>
                    <span class="text-2xl font-bold">{{ sponsor.name }}</span>
                  </div>
                  <p v-if="sponsor.description" class="text-gray-500 text-center">{{ sponsor.description }}</p>

                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
