<!-- This example requires Tailwind CSS v2.0+ -->
<template>

    <div class="homepage-container">
        <div class="homepage-wrapper">
            <main class>
                <div class="relative z-0 h-[700px] w-full md:h-[800px]">

                    <div class="relative z-20 mx-auto grid h-full max-w-[700px] place-items-center px-10 text-center">
                        <div class="grid gap-10">
                            <h1
                                class="flex flex-col text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                                <span class="block text-black xl:inline">Front-End Coders Mauritius</span>
                            </h1>
                            <p class="text-lg text-gray-700 sm:text-xl">
                                Front-End coders Mauritius is a free meetup that's dedicated to
                                all aspect of Front-End development. it occurs in general one a
                                month at announced date and place. Feel free to join!
                            </p>
                            <div>
                                <router-link :to="{ path: '/meetups' }"
                                    class="mx-auto flex w-64 items-center justify-center rounded-md border border-transparent bg-yellow-500 px-8 py-3 text-base font-medium text-white shadow hover:bg-yellow-400 md:py-4 md:px-10 md:text-lg">
                                    View Meetups</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
</template>

<script setup lang="ts">


</script>
