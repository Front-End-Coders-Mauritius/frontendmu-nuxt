<template>
<div class="homepage-container bg-brand-100">
    <div class="homepage-wrapper">
      <main class>
        <div class="relative py-10 sm:py-0 z-0 h-[auto] w-full md:h-[550px]">
          <div
            class="relative z-20 mx-auto grid grid-cols-1 gap-4 sm:grid-cols-2 md:flex-row h-full justify-center max-w-6xl px-12 "
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
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
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

            <div class="m grid place-items-center">
                <div class="flex flex-col justify-center items-center">
                  <a target="_blank" href="https://www.ringier.com/about-us/south-africa/">
                    <logo-ringier class="w-48 h-auto opacity-80" />
                  </a>
                <div class="bg-brand-200 py-1 px-4 text-xs w-full text-center text-verse-600 font-medium rounded-2xl">Domain name sponsor</div>
                </div>
                <div class="flex flex-col justify-center items-center">
                  <a target="_blank" href="https://www.ringier.com/about-us/south-africa/">
                    <logo-ringier class="w-48 h-auto opacity-80" />
                  </a>
                <div class="bg-brand-200 py-1 px-4 text-xs w-full text-center text-verse-600 font-medium rounded-2xl">Domain name sponsor</div>
                </div>
                <div class="flex flex-col justify-center items-center">
                  <a target="_blank" href="https://www.ringier.com/about-us/south-africa/">
                    <logo-ringier class="w-48 h-auto opacity-80" />
                  </a>
                <div class="bg-brand-200 py-1 px-4 text-xs w-full text-center text-verse-600 font-medium rounded-2xl">Domain name sponsor</div>
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
