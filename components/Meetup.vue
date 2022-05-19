<template>
  <div>
    <div v-if="pending">loading...</div>
    <div v-else>
      <div class="relative">
        <div class="py-4 md:py-16">
          <div class="lg:mx-auto lg:max-w-[1400px] lg:px-4">
            <div class="relative">
              <div
                aria-hidden="true"
                class="hidden sm:block lg:inset-y-0 lg:right-0 lg:w-screen"
              >
                <div
                  class="inset-y-0 right-1/2 w-full rounded-r-3xl bg-gray-50 lg:right-72"
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
              class="relative mx-auto max-w-md px-8 py-3 sm:max-w-3xl sm:px-6 md:mx-0 md:py-0"
            >
              <!-- Content area -->
              <div>
                <div class="flex w-full items-center justify-end">
                  <p
                    :class="[
                      isUpcoming
                        ? 'tagStyle bg-yellow-100 text-yellow-800'
                        : 'tagStyle animate-bounce bg-green-100 text-green-800',
                    ]"
                  >
                    {{ isUpcoming ? "past" : "upcoming" }}
                  </p>
                </div>
                <h2
                  class="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl lg:text-5xl"
                >
                  {{ props.getCurrentEvent?.title }}
                </h2>
                <div
                  class="mt-6 space-y-6 text-gray-500"
                  v-if="props.getCurrentEvent.description"
                >
                  <div
                    class="text-md prose md:text-lg"
                    v-html="props.getCurrentEvent.description"
                  ></div>
                </div>
                <div class="text-md prose md:text-lg" v-else>
                  Please add a description.
                </div>
              </div>

              <!-- Stats section -->
              <div class="mt-10">
                <dl
                  class="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4 md:gap-y-8"
                >
                  <div
                    class="border-t-2 border-gray-100 pt-6"
                    v-if="props.getCurrentEvent.Date"
                  >
                    <dt class="text-base font-medium text-gray-500">Date</dt>
                    <dd
                      class="text-2xl font-extrabold tracking-tight text-gray-900 md:text-3xl"
                    >
                      {{ new Date(props.getCurrentEvent.Date).toDateString() }}
                    </dd>
                  </div>
                  <div
                    class="border-t-2 border-gray-100 pt-4 md:pt-6"
                    v-if="props.getCurrentEvent.Venue"
                  >
                    <dt class="text-base font-medium text-gray-500">Venue</dt>
                    <dd
                      class="text-2xl font-extrabold tracking-tight text-gray-900 md:text-3xl"
                    >
                      {{ props.getCurrentEvent.Venue }}
                    </dd>
                  </div>
                  <div
                    class="border-t-2 border-gray-100 pt-4 md:pt-6"
                    v-if="props.getCurrentEvent.Time"
                  >
                    <dt class="text-base font-medium text-gray-500">Time</dt>
                    <dd
                      class="text-2xl font-extrabold tracking-tight text-gray-900 md:text-3xl"
                    >
                      {{ props.getCurrentEvent.Time }}
                    </dd>
                  </div>
                  <div
                    class="border-t-2 border-gray-100 pt-4 md:pt-6"
                    v-if="props.getCurrentEvent.Location"
                  >
                    <dt class="text-base font-medium text-gray-500">
                      Location
                    </dt>
                    <dd
                      class="text-2xl font-extrabold tracking-tight text-gray-900 md:text-3xl"
                    >
                      {{ props.getCurrentEvent.Location }}
                    </dd>
                  </div>
                  <div
                    class="border-t-2 border-gray-100 pt-6"
                    v-if="props.getCurrentEvent.Attendees"
                  >
                    <dt class="text-base font-medium text-gray-500">
                      Seats Limit
                    </dt>
                    <dd
                      class="text-2xl font-extrabold tracking-tight text-gray-900 md:text-3xl"
                    >
                      {{ props.getCurrentEvent.Attendees }}
                    </dd>
                  </div>

                  <div class="border-y-2 border-gray-100 pt-4 md:pt-6">
                    <dt class="text-base font-medium text-gray-500">Share</dt>
                    <dd
                      class="flex justify-between rounded-md bg-gray-100 mt-2 px-2 py-1 sm:w-[450px]"
                    >
                      <input
                        class="text-md break-words bg-gray-100pr-2 tracking-tight bg-gray-100 text-gray-600 line-clamp-3 w-[500px]"
                        type="text"
                        :value="`front-end-coders-mauritius.netlify.app/event/${meetupId}/`"
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
                </dl>
              </div>
            </div>
          </div>
          <div class="lg:mx-auto lg:max-w-[1400px]">
            <div
              v-if="props.getCurrentEvent.gallery.length > 0"
              class="images mt-16 px-4 md:mt-48"
            >
              <div
                class="pb-4 text-center text-4xl font-extrabold text-black md:pb-8 md:text-6xl"
              >
                Gallery
              </div>

              <Gallery :eventImages="eventGallery" :key="eventGallery" />
            </div>

            <div v-else></div>

            <div
              v-if="props.getCurrentEvent?.images"
              class="images mt-16 px-4 md:mt-48"
            >
              <div
                class="pb-4 text-center text-4xl font-extrabold text-black md:pb-8 md:text-6xl"
              >
                Gallery
              </div>

              <Gallery :eventImages="eventImages" :key="eventImages" />
            </div>

            <div v-else></div>
          </div>
        </div>

        <!-- view-dashboard button -->
        <div
          class="dashboard-button md:-right-17 text-md absolute top-48 -right-16 rotate-90 rounded-b-lg bg-yellow-500 py-2 px-8 font-medium text-white hover:bg-yellow-400 md:py-4 md:text-lg lg:-right-16"
          @click="open = true"
        >
          View meetups list
        </div>
        <!-- slide-over -->
        <SldeBarEvent :data="data" :open="open" />
      </div>
      <!-- ends -->
    </div>
  </div>
</template>
<script setup lang="ts">
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

import { ComputedRef, PropType, Ref } from "vue";
import { IEvent } from "~/types/types";
const open: Ref<Boolean> = ref(false);
const route = useRoute();

const props = defineProps({
  getCurrentEvent: {} as PropType<IEvent>,
  data: {},
  pending: Boolean,
});

const meetupId = computed(() => {
  return route.params.id;
});

// to get past or upcoming value base in Date
const dateInPast = function (firstDate: Date, secondDate: Date) {
  if (firstDate.setHours(0, 0, 0, 0) <= secondDate.setHours(0, 0, 0, 0)) {
    return true;
  }
  return false;
};

const eventImages: ComputedRef<String[]> = computed(() => {
  return props.getCurrentEvent.images;
});
const eventGallery: ComputedRef<String[]> = computed(() => {
  return props.getCurrentEvent.gallery;
});

const isUpcoming: ComputedRef<Boolean> = computed(() => {
  let past = new Date(props.getCurrentEvent.Date);
  const today = new Date();
  const verifyValue = dateInPast(past, today);
  return verifyValue;
});
</script>
