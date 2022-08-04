<!-- This example requires Tailwind CSS v2.0+ -->
<script setup lang="ts"></script>

<template>
  <div class="homepage-container bg-gray-900">
    <div class="homepage-wrapper">
      <main class>
        <div class="relative z-0 h-[700px] w-full md:h-[850px]">
          <div
            class="relative z-20 mx-auto flex flex-col-reverse md:flex-row h-full justify-center max-w-6xl px-12 lg:px-0"
          >
            <div
              class="flex flex-col justify-center text-center md:text-left gap-10 md:gap-16 md:w-1/2"
            >
              <h1
                class="flex flex-col text-4xl font-extrabold tracking-tight font-mono text-blue-500 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl"
              >
                Front-End Coders
                <span class="block font-sans text-[80%] text-gray-200 xl:inline"> Mauritius 🇲🇺</span>
              </h1>
              <!-- <flip-book class="mt-[-16%] md:mt-[-12%]" /> -->
              <p class="text-md md:text-lg text-gray-300 font-mono">
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

            <div class="md:w-1/2 grid place-items-center">
              <div class="image-container">
                <div class="image-bg" />
                <logo-fec class="img-src text-white" />
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<style scoped>
.image-container {
  position: relative;
  margin: 0 auto;
  --size: 200px;
  width: var(--size);
  height: var(--size);
}

.img-src{
  position: absolute;
    top: 50%;
    left: 50%;
    max-width: var(--size);
    width: calc(var(--size) * 0.8);
    height: calc(var(--size) * 0.8);
    transform: translate(-50%,-50%);
}

.image-bg {
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  width: var(--size);
  height: var(--size);
  background-image: linear-gradient(-45deg, #fff 50%, #006eff 50%);
  filter: blur(100px);
  transform: translate(-50%, -50%);
}

@media  (min-width: 768px) {
  .image-container {
    --size: 500px;
  }
}
</style>
