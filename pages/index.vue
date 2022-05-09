<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <MetaTag :eventName="title" :eventDetails="description" />
  <div class="homepage-container">
    <div class="homepage-wrapper">
      <main class>
        <div class="relative z-0 h-[700px] w-full md:h-[800px]">
          <v-vanta
            class="absolute z-0 w-full"
            effect="rings"
            :options="options"
          ></v-vanta>
          <div
            class="fade-out absolute z-10 h-screen w-full bg-gradient-to-t from-white to-transparent"
          ></div>
          <div
            class="relative z-20 mx-auto grid h-full max-w-[700px] place-items-center px-10 text-center"
          >
            <div class="grid gap-10">
              <h1
                class="flex flex-col text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl"
              >
                <span class="block text-black xl:inline"
                  >Front-End Coders Mauritius</span
                >
              </h1>
              <p class="text-lg text-gray-700 sm:text-xl">
                Front-End coders Mauritius is a free meetup that's dedicated to
                all aspect of Front-End development. it occurs in general one a
                month at announced date and place. Feel free to join!
              </p>
              <div>
                <router-link
                  :to="{ path: '/meetups' }"
                  class="mx-auto flex w-64 items-center justify-center rounded-md border border-transparent bg-yellow-500 px-8 py-3 text-base font-medium text-white shadow hover:bg-yellow-400 md:py-4 md:px-10 md:text-lg"
                  >View Meetups</router-link
                >
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
  <div
    class="latest-events-container relative z-20 sm:py-6 md:pt-8 md:px-8 px-0"
  >
    <div
      class="latest-events-wrapper mx-auto px-4 pt-8 md:max-w-3xl md:px-0 lg:max-w-7xl"
    >
      <div
        class="py-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:py-8 md:text-5xl"
      >
        <h1 class="text-center text-black md:text-left">Latest meetups</h1>
      </div>
      <div
        class="divide-y divide-gray-200 overflow-hidden rounded-lg bg-gray-200 shadow-xl sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0"
      >
        <div
          v-for="(event, eventID) in data.slice(0, 6)"
          :key="event.title"
          :class="[
            eventID === 0
              ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none'
              : '',
            eventID === 1 ? 'sm:rounded-tr-lg' : '',
            eventID === data.length - 2 ? 'sm:rounded-bl-lg' : '',
            eventID === data.length - 1
              ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none'
              : '',
            'group relative bg-white p-6',
          ]"
        >
          <div v-if="event.Date">
            <span
              class="inline-flex rounded-lg bg-blue-50 p-3 text-blue-700 ring-4 ring-white"
            >
              <ClockIcon class="mr-2 h-6 w-6" />
              <span>{{ new Date(event.Date).toDateString() }}</span>
            </span>
          </div>
          <div class="mt-6">
            <h3 class="leading-2 text-xl font-medium md:h-12">
              <router-link
                :to="{ name: 'meetup-id', params: { id: event.id } }"
                class="w-96 focus:outline-none"
              >
                <!-- Extend touch target to entire panel -->
                <span class="absolute inset-0" aria-hidden="true" />
                {{ event?.title }}

                <p
                  :class="[
                    isUpcoming(event.Date)
                      ? 'tagStyle bg-yellow-100 text-yellow-800'
                      : 'tagStyle animate-bounce bg-green-100 text-green-800',
                  ]"
                >
                  {{ isUpcoming(event.Date) ? "past" : "upcoming" }}
                </p>
              </router-link>
            </h3>

            <div class="flex flex-col border-gray-100 pt-4 md:pt-6 lg:pt-2">
              <div
                class="flex items-center justify-start text-base font-medium text-gray-400"
                v-if="event.Venue"
              >
                <LocationMarkerIcon
                  class="mr-1.5 h-4 w-4 flex-shrink-0 truncate text-gray-400"
                  aria-hidden="true"
                />
                <div class="pt-1">Venue: {{ event.Venue }}</div>
              </div>
              <div v-else>No venue added.</div>
              <div
                class="flex items-center justify-start text-base font-medium leading-5 text-gray-400"
              >
                <UsersIcon
                  class="mr-1.5 h-[15px] w-[15px] flex-shrink-0 truncate text-gray-400"
                  aria-hidden="true"
                />
                <div class="pt-[2px]" v-if="event?.Attendees !== 0">
                  Attendees: {{ event?.Attendees }}
                </div>
                <div class="pt-[2px]" v-else>Seats: {{ event?.Attendees }}</div>
              </div>
            </div>
          </div>
          <span
            class="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-red-400"
            aria-hidden="true"
          >
            <svg
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z"
              />
            </svg>
          </span>
        </div>
      </div>
      <div class="flex h-32 items-center justify-center">
        <router-link
          :to="{ path: '/meetups' }"
          class="text-md w-48 rounded-md bg-blue-600 px-4 py-4 text-center font-medium text-white md:w-64 md:px-8 md:text-xl"
          >View all meetups</router-link
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { LocationMarkerIcon, UsersIcon } from "@heroicons/vue/solid";

import { MenuIcon, XIcon, ClockIcon } from "@heroicons/vue/outline";
import { ChevronDownIcon } from "@heroicons/vue/solid";
import eventsListJson from "~/data/events.json";
import MetaTag from "~/components/MetaTag.vue";
import VVanta from "vue-vanta";

definePageMeta({
  layout: "home",
});

const { data, pending } = useEvents();

const options = ref({
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: process.client ? window.innerHeight : 0,
  minWidth: 200.0,
  scale: 0.3,
  scaleMobile: 1.0,
  backgroundColor: 0xffffff,
  color: 0x59ff,
  backgroundAlpha: 0.0,
});

// to get past or upcoming value base in Date
const dateInPast = function (firstDate: Date, secondDate: Date) {
  if (firstDate.setHours(0, 0, 0, 0) <= secondDate.setHours(0, 0, 0, 0)) {
    return true;
  }
  return false;
};

const isUpcoming = (currentEventDate: string) => {
  let past = new Date(currentEventDate);
  const today = new Date();
  const verifyValue = dateInPast(past, today);
  return verifyValue;
};

const description =
  "Community of Front-End developers who share their passions for the web. Events, workshops and conferences occurs regularly.";
const title = "Front-End Coders Mauritius";
</script>
