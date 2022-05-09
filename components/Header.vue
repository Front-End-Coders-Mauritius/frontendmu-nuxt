<template>
  <nav class="relative shadow">
    <div class="max-w-[1475px] mx-auto px-4 sm:px-6">
      <div
        class="flex justify-between items-center py-4 md:py-7 md:justify-start md:space-x-10"
      >
        <div class="logo-image flex justify-start lg:w-0 lg:flex-1">
          <router-link
            to="/"
            class="flex justify-center items-center gap-1 md:gap-2"
          >
            <span class="sr-only">Workflow</span>
            <svg
              class="w-12 h-12 md:w-12 md:h-12"
              viewBox="0 0 47 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 22C8.28053 13.5936 13.7596 9 23 9"
                stroke="#1C6FBC"
                stroke-width="3"
                stroke-linecap="round"
              />
              <path
                d="M2 15C5.28053 6.59363 10.7596 2 20 2"
                stroke="#E31C1C"
                stroke-width="3"
                stroke-linecap="round"
              />
              <path
                d="M3 32C14.6398 24.5929 23.9794 23 37 23"
                stroke="#3CED38"
                stroke-width="3"
                stroke-linecap="round"
              />
              <path
                d="M11 22C22.6398 14.5929 31.9794 13 45 13"
                stroke="#FFE353"
                stroke-width="3"
                stroke-linecap="round"
              />
            </svg>
            <span
              class="text-lg font-bold md:text-3xl text-gray-700 tracking-tight hidden md:block"
            >
              Front-End Coders
            </span>
          </router-link>
        </div>

        <div class="md:flex items-center justify-end md:flex-1 lg:w-0">
          <router-link
            to="/meetups"
            class="whitespace-nowrap text-md md:text-base font-medium text-gray-500 hover:text-red-600"
            >All meetups</router-link
          >
        </div>
      </div>
    </div>
  </nav>
</template>
