<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <MetaTag :eventName="title" :eventDetails="description" />
  <div class="homepage-container">
    <div class="homepage-wrapper">
      <main class>
        <div class="w-full h-[700px] md:h-[800px] relative z-0">
          <v-vanta
            class="absolute w-full z-0"
            effect="rings"
            :options="options"
          ></v-vanta>
          <div
            class="fade-out absolute z-10 h-screen w-full bg-gradient-to-t from-white to-transparent"
          ></div>
          <div
            class="relative text-center h-full z-20 grid place-items-center max-w-[700px] mx-auto px-10"
          >
            <div class="grid gap-10">
              <h1
                class="text-4xl flex flex-col tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl"
              >
                <span class="block xl:inline text-black"
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
                  to="/events"
                  class="rounded-md shadow w-64 mx-auto flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium text-white bg-yellow-500 hover:bg-yellow-400 md:py-4 md:text-lg md:px-10"
                  >View Events</router-link
                >
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
  <div class="latest-events-container sm:py-6 md:pt-8 relative z-20">
    <div
      class="latest-events-wrapper md:max-w-2xl lg:max-w-7xl mx-auto pt-8 px-4 md:px-0"
    >
      <div
        class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-5xl py-4 md:py-8"
      >
        <h1 class="text-black">Latest events</h1>
      </div>
      <div
        class="rounded-lg bg-gray-200 overflow-hidden shadow-xl divide-y divide-gray-200 sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-px"
      >
        <div
          v-for="(event, eventID) in sortedEventList.slice(0, 6)"
          :key="event.title"
          :class="[
            eventID === 0
              ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none'
              : '',
            eventID === 1 ? 'sm:rounded-tr-lg' : '',
            eventID === sortedEventList.length - 2 ? 'sm:rounded-bl-lg' : '',
            eventID === sortedEventList.length - 1
              ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none'
              : '',
            'relative group bg-white p-6',
          ]"
        >
          <div>
            <span
              class="rounded-lg inline-flex p-3 ring-4 ring-white bg-blue-50 text-blue-700"
            >
              <ClockIcon class="h-6 w-6 mr-2" />
              <span>{{ new Date(event.local_date).toDateString() }}</span>
            </span>
          </div>
          <div class="mt-6">
            <h3 class="text-xl font-medium md:h-12 leading-2">
              <router-link
                :to="{ name: 'event-id', params: { id: event.id } }"
                class="focus:outline-none w-96"
              >
                <!-- Extend touch target to entire panel -->
                <span class="absolute inset-0" aria-hidden="true" />
                {{ event.name }}
                <p
                  :class="[
                    event.status === 'upcoming'
                      ? 'bg-green-100 text-green-800 tagStyle animate-bounce'
                      : 'hidden',
                  ]"
                >
                  {{ event.status }}
                </p>
              </router-link>
            </h3>

            <div class="flex flex-col border-gray-100 pt-4 md:pt-6 lg:pt-2">
              <div
                class="flex text-base justify-start items-center font-medium text-gray-400"
              >
                <LocationMarkerIcon
                  class="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400 truncate"
                  aria-hidden="true"
                />
                <div class="pt-1">Venue: {{ event.venue.name }}</div>
              </div>
              <div
                class="flex text-base justify-start items-center font-medium text-gray-400 leading-5"
              >
                <UsersIcon
                  class="flex-shrink-0 mr-1.5 h-[15px] w-[15px] text-gray-400 truncate"
                  aria-hidden="true"
                />
                <div class="pt-[2px]">
                  Attendees: {{ event.yes_rsvp_count }}
                </div>
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
      <div class="flex justify-center items-center h-32">
        <router-link
          to="/events"
          class="text-center bg-blue-600 text-white text-md md:text-xl px-4 md:px-8 py-4 rounded-md font-medium w-48 md:w-64"
          >View all events</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import { LocationMarkerIcon, UsersIcon } from "@heroicons/vue/solid";

import { MenuIcon, XIcon, ClockIcon } from "@heroicons/vue/outline";
import { ChevronDownIcon } from "@heroicons/vue/solid";
import eventsListJson from "~/data/events.json";
import MetaTag from "~/components/MetaTag.vue";
import VVanta from "vue-vanta";

definePageMeta({
  layout: "home",
});

export default {
  components: {
    ChevronDownIcon,
    ClockIcon,
    MenuIcon,
    XIcon,
    MetaTag,
    VVanta,
    LocationMarkerIcon,
    UsersIcon,
  },

  data: () => {
    return {
      eventsListJson,
      options: {
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
      },
    };
  },
  computed: {
    eventsList() {
      console.log("computed eventlist");
      if (this.eventsListJson.length === 0) {
        return [];
      }
      return this.eventsListJson;
    },

    title() {
      return "Front-End Coders Mauritius";
    },

    description() {
      return "Community of Front-End developers who share their passions for the web. Events, workshops and conferences occurs regularly.";
    },

    sortedEventList() {
      const sortedList = this.eventsList.sort((a, b) => {
        return new Date(b.local_date) - new Date(a.local_date);
      });
      return sortedList;
    },
  },
};
</script>
