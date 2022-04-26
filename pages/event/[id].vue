<template>
  <MetaTag :eventName="eventName" :eventDetails="eventDetails.description" />
  <div class="relative">
    <div class="py-4 md:py-16">
      <div class="lg:mx-auto lg:max-w-[1400px] lg:px-4">
        <div class="relative">
          <div
            aria-hidden="true"
            class="hidden sm:block lg:inset-y-0 lg:right-0 lg:w-screen"
          >
            <div
              class="inset-y-0 right-1/2 w-full bg-gray-50 rounded-r-3xl lg:right-72"
            />
            <svg
              class="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-[54%] lg:top-28"
              width="404"
              height="392"
              fill="none"
              viewBox="0 0 404 392"
            >
              <defs>
                <pattern
                  id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x="0"
                    y="0"
                    width="4"
                    height="4"
                    class="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width="404"
                height="392"
                fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)"
              />
            </svg>
          </div>
        </div>

        <div
          class="mx-auto md:mx-0 relative max-w-md sm:max-w-3xl sm:px-6 px-8 py-3 md:py-0"
        >
          <!-- Content area -->
          <div class>
            <div class="w-full flex justify-end items-center">
              <p
                :class="{
                  'bg-yellow-100 text-yellow-800 tagStyle':
                    eventDetails.status === 'past',
                  'bg-green-100 text-green-800 tagStyle animate-bounce':
                    eventDetails.status === 'upcoming',
                  'bg-red-100 text-red-800 tagStyle':
                    eventDetails.status === 'cancelled',
                }"
              >
                {{ eventDetails.status }}
              </p>
            </div>
            <h2
              class="text-3xl md:text-4xl lg:text-5xl text-gray-900 font-extrabold tracking-tight"
            >
              {{ eventDetails.name }}
            </h2>
            <div class="mt-6 text-gray-500 space-y-6">
              <div
                class="text-md md:text-lg"
                v-html="eventDetails.description"
              ></div>
            </div>
          </div>

          <!-- Stats section -->
          <div class="mt-10">
            <dl class="grid grid-cols-2 gap-x-4 gap-y-8">
              <div class="border-t-2 border-gray-100 pt-6">
                <dt class="text-base font-medium text-gray-500">Date</dt>
                <dd
                  class="text-2xl md:text-3xl font-extrabold tracking-tight text-gray-900"
                >
                  {{ new Date(eventDetails.local_date).toDateString() }}
                </dd>
              </div>
              <div class="border-t-2 border-gray-100 pt-6">
                <dt class="text-base font-medium text-gray-500">Venue</dt>
                <dd
                  class="text-2xl md:text-3xl font-extrabold tracking-tight text-gray-900"
                >
                  {{ eventDetails.venue.name }}
                </dd>
              </div>
              <div
                class="border-t-2 border-gray-100 pt-6"
                v-if="eventDetails.yes_rsvp_count !== 0"
              >
                <dt class="text-base font-medium text-gray-500">Attendees</dt>
                <dd
                  class="text-2xl md:text-3xl font-extrabold tracking-tight text-gray-900"
                >
                  {{ eventDetails.yes_rsvp_count }}
                </dd>
              </div>
              <div class="border-t-2 border-gray-100 pt-6" v-else>
                <dt class="text-base font-medium text-gray-500">
                  Seats available
                </dt>
                <dd
                  class="text-2xl md:text-3xl font-extrabold tracking-tight text-gray-900"
                >
                  {{ eventDetails.rsvp_limit }}
                </dd>
              </div>
              <div class="border-t-2 border-gray-100 pt-6">
                <dt class="text-base font-medium text-gray-500">Time</dt>
                <dd
                  class="text-2xl md:text-3xl font-extrabold tracking-tight text-gray-900"
                >
                  {{ eventDetails.local_time }}
                </dd>
              </div>
              <div class="border-t-2 border-gray-100 pt-6">
                <dt class="text-base font-medium text-gray-500">Location</dt>
                <dd
                  class="text-2xl md:text-3xl font-extrabold tracking-tight text-gray-900"
                >
                  {{ eventDetails.venue.address_1 }}
                </dd>
              </div>

              <div class="border-t-2 border-gray-100 pt-6">
                <dt class="text-base font-medium text-gray-500">Share</dt>
                <dd class="flex bg-gray-100 rounded-md px-2 py-1 sm:w-[450px]">
                  <input
                    class="text-md tracking-tight text-gray-600 line-clamp-3 bg-gray-100 sm:w-[500px] pr-2 break-words"
                    type="text"
                    :value="`front-end-coders-mauritius.netlify.app/event/${eventID}/`"
                    id="myInput"
                  />
                  <div @click="copy" class="cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"
                      />
                      <path
                        d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z"
                      />
                    </svg>
                  </div>
                </dd>
              </div>
              <div class="border-y-2 border-gray-100 py-6">
                <dt class="text-base font-medium text-gray-500">Seats Limit</dt>
                <dd
                  class="text-2xl md:text-3xl font-extrabold tracking-tight text-gray-900"
                >
                  {{ eventDetails.rsvp_limit }}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
      <div class="images lg:mx-auto lg:max-w-7xl md:mt-16 mt-16 px-4">
        <div v-if="eventDetails.images === null">{{ eventDetails.images }}</div>
        <div
          v-else
          class="pb-4 md:pb-8 text-4xl md:text-5xl font-extrabold text-blue-700 text-center"
        >
          Gallery
        </div>

        <Gallery :eventImages="eventImages" :key="eventImages" />
      </div>
    </div>

    <!-- view-dashboard button -->
    <div
      class="dashboard-button absolute top-48 -right-16 md:-right-17 lg:-right-16 text-md md:text-lg rounded-b-lg font-medium py-2 md:py-4 px-8 rotate-90 text-white bg-yellow-500 hover:bg-yellow-400"
      @click="open = true"
    >
      View events list
    </div>
    <!-- slide-over -->
    <TransitionRoot as="template" :show="open">
      <Dialog
        as="div"
        class="fixed inset-0 overflow-hidden"
        @close="open = false"
      >
        <div class="absolute inset-0 overflow-hidden">
          <DialogOverlay class="absolute inset-0" />

          <div class="fixed inset-y-0 right-0 pl-10 max-w-full flex sm:pl-16">
            <TransitionChild
              as="template"
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enter-from="translate-x-full"
              enter-to="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leave-from="translate-x-0"
              leave-to="translate-x-full"
            >
              <div class="w-screen max-w-md">
                <div
                  class="h-full flex flex-col bg-white shadow-xl overflow-y-scroll"
                >
                  <div class="p-6">
                    <div class="flex items-start justify-between">
                      <DialogTitle class="text-lg font-medium text-gray-900"
                        >Events List</DialogTitle
                      >
                      <div class="ml-3 h-7 flex items-center">
                        <button
                          type="button"
                          class="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500"
                          @click="open = false"
                        >
                          <span class="sr-only">Close panel</span>
                          <XIcon class="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="border-b border-gray-200">
                    <div class="px-6">
                      <nav
                        class="-mb-px flex space-x-6"
                        x-descriptions="Tab component"
                      >
                        <a
                          class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 'whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm', ]"
                          >All events lists</a
                        >
                      </nav>
                    </div>
                  </div>

                  <!-- events list -->
                  <SliderEventList :sortedEventList="eventsList" />
                </div>
              </div>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </div>
</template>
<script>
import { ref } from "vue";
import {
  Dialog,
  DialogOverlay,
  DialogTitle,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";

import {
  XIcon,
  LocationMarkerIcon,
  CalendarIcon,
  DotsVerticalIcon,
} from "@heroicons/vue/solid";

import eventsListJson from "~/data/events.json";
import SliderEventList from "~/components/SliderEventList.vue";
import Gallery from "~/components/Gallery.vue";
import MetaTag from "~/components/MetaTag.vue";

definePageMeta({
  layout: "custom",
});

export default {
  props: [""],
  components: {
    Dialog,
    DialogOverlay,
    DialogTitle,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    TransitionChild,
    TransitionRoot,
    DotsVerticalIcon,
    CalendarIcon,
    LocationMarkerIcon,
    XIcon,
    SliderEventList,
    Gallery,
    MetaTag,
  },
  data: () => {
    const open = ref(false);
    return {
      eventsListJson,
      open,
      myArray: [],
      count: 0,
      galleryArray: [],
    };
  },
  computed: {
    eventID() {
      return this.$route.params.id;
    },

    eventsList() {
      if (this.eventsListJson.length === 0) {
        return [];
      }
      return this.eventsListJson;
    },

    eventName() {
      return this.eventDetails.name;
    },

    eventDetails() {
      const filtered = this.eventsList.filter((item) => {
        return item.id === this.eventID;
      });
      return filtered[0];
    },

    sortedEventList() {
      const sortedList = this.eventsList.sort((a, b) => {
        return new Date(b.local_date) - new Date(a.local_date);
      });
      return sortedList;
    },

    eventImages() {
      return this.eventDetails.images;
    },
  },
  methods: {
    copy() {
      let copyText = document.getElementById("myInput");
      copyText.select();
      copyText.setSelectionRange(0, 99999);
      navigator.clipboard.writeText(copyText.value);
    },
  },
  mounted() {
    scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  },

  updated() {
    this.eventsList;
    this.imagesList;
    this.eventDetails;
  },
};
</script>
<style>
p {
  display: block;
}
</style>
