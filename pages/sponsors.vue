<script setup lang="ts">
definePageMeta({
  layout: 'custom',
  layoutTransition: {
    name: 'fade',
  },
})

const sponsors = [
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
            <h2 class="text-3xl font-bold tracking-tight sm:text-5xl sm:tracking-tight">Our Sponsors</h2>
            <p class="text-xl text-gray-500">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
          <div class="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
            <h2 class="text-3xl font-bold tracking-tight sm:text-4xl sm:tracking-tight">Domain Sponsor</h2>
            <p class="text-xl text-gray-500">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
          <ul role="list" class="mx-auto grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-12 xl:grid-cols-6">
            <li>
                <div class="flex flex-col justify-center items-center">
                    <a target="_blank" href="https://www.ringier.com/about-us/south-africa/">
                        <logo-ringier class="w-48 h-auto opacity-80" />
                    </a>
                </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
