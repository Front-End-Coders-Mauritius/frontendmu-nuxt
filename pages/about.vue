<script setup lang="ts">
definePageMeta({
  layout: 'custom',
  layoutTransition: {
    name: 'fade',
  },
})

const people = [
  {
    name: 'Sandeep Ramgolam',
    role: 'Lead Organiser',
    imageUrl:
      'https://github.com/MrSunshyne.png',
  },
  {
    name: 'Kushul Soomaree',
    role: 'Organiser',
    imageUrl:
      'https://github.com/kushul.png',
  },
  {
    name: 'Michaël Jules',
    role: 'Active Community Member',
    imageUrl:
      'https://github.com/mgjules.png',
  },
  {
    name: 'Mahima Ramgolam',
    role: 'Active Community Member',
    imageUrl:
      'https://github.com/mahima98.png',
  },
  {
    name: 'Saamiyah Peerun',
    role: 'Active Community Member',
    imageUrl:
      'https://github.com/saamiyah.png',
  },
]
</script>

<template>
  <div class="container max-w-7xl mx-auto">

    <div class="bg-white">
      <div class="max-w-7xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
        <div class="space-y-8 sm:space-y-12">
          <div class="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
            <h2 class="text-3xl font-bold tracking-tight sm:text-5xl sm:tracking-tight">About</h2>
            <p class="text-xl text-gray-500">Front-End Coders Mauritius is a community around front-end development based in Mauritius. We also organise monthly meetups free for anyone interested to attend.</p>
          </div>
          <div class="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
            <h2 class="text-3xl font-bold tracking-tight sm:text-4xl sm:tracking-tight">The People</h2>
            <p class="text-xl text-gray-500">There are many people who contribute to making front-end coders an active community. This is a growing list of people who help either with meetup organisation, our website, or simply being active in the community</p>
          </div>
          <ul role="list" class="mx-auto grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-12 xl:grid-cols-6">
            <li v-for="person in people" :key="person.name">
              <div class="space-y-4">
                <img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" :src="person.imageUrl" alt="">
                <div class="space-y-2">
                  <div class="text-xs font-medium lg:text-sm">
                    <h3>{{ person.name }}</h3>
                    <p class="text-brand-500">{{ person.role }}</p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
