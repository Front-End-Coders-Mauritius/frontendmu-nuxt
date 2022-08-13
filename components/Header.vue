<template>
  <nav class="relative shadow">
    <div class="max-w-[1475px] mx-auto px-4 sm:px-4">
      <div
        class="flex justify-between items-center py-4 md:py-7 md:justify-start md:space-x-10"
      >
        <div class="logo-image flex justify-start lg:w-0 lg:flex-1">
          <router-link
            to="/"
            class="flex justify-center items-center gap-1 md:gap-2"
          >
            <h1 class="sr-only">Front-end Coders Mauritius</h1>
            <logo-fec class="w-16" />
            <span
              class="text-lg font-mono leading-none font-bold md:text-3xl text-verse-500 tracking-tighter hidden md:block"
            >
              Front-End Coders
            </span>
          </router-link>
        </div>

        <div class="md:flex items-center justify-end md:flex-1 lg:w-0">
          <router-link
            to="/meetups"
            class="whitespace-nowrap text-md md:text-base font-medium text-gray-500 hover:text-red-600"
          >View all meetups</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>
