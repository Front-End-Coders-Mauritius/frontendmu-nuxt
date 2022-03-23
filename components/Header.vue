<template>
  <nav class="relative shadow">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div class="flex justify-between items-center py-7 md:justify-start md:space-x-10">
        <div class="logo-image flex justify-start lg:w-0 lg:flex-1">
          <router-link to="/" class="flex gap-2">
            <span class="sr-only">Workflow</span>
            <span class="text-xl md:text-4xl text-yellow-700 font-Pacifico tracking-tighter">
              Front-End Coders
              <span
                class="md:text-sm text-[10px] float-right ml-2 tracking-normal font-normal"
              >MRU</span>
            </span>
            <!-- <img src="/img/favicon.png" alt="" srcset="" /> -->
          </router-link>
        </div>

        <div class="md:flex items-center justify-end md:flex-1 lg:w-0">
          <router-link
            to="/events"
            class="whitespace-nowrap text-base font-medium text-gray-500 hover:text-red-600"
          >All events</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>
