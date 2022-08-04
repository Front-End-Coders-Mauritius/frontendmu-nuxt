<!-- This example requires Tailwind CSS v2.0+ -->
<script setup lang="ts"></script>

<template>
  <div class="homepage-container">
    <div class="homepage-wrapper">
      <main class>
        <div class="relative z-0 h-[700px] w-full md:h-[850px]">
          <div
            class="relative z-20 mx-auto grid h-full max-w-[950px] place-items-center px-10 text-center"
          >
            <div
              class="flex flex-col justify-center items-center gap-4 md:gap-16"
            >
              <logo-fec class="w-32" />
              <h1
                class="flex flex-col text-4xl font-extrabold tracking-tight font-mono text-blue-500 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl"
              >Front-End Coders
                <span class="block font-sans text-[80%] text-gray-600 xl:inline"> Mauritius 🇲🇺</span>
              </h1>
              <!-- <flip-book class="mt-[-16%] md:mt-[-12%]" /> -->
              <p class="text-md md:text-lg text-gray-700 font-mono">
                Front-End coders Mauritius is a free meetup that's dedicated to
                all aspect of Front-End development. it occurs in general one a
                month at announced date and place. Feel free to join!
              </p>
              <div>
                <router-link
                  :to="{ path: '/meetups' }"
                  class="text-md w-48 rounded-md bg-blue-600 px-4 py-4 text-center font-medium text-white md:w-64 md:px-8 md:text-xl"
                >
                  View all meetups
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<style scoped>
.bg-box {
  background: linear-gradient( -45deg, #bd34fe 50%, #47caff 50% );
}
</style>
