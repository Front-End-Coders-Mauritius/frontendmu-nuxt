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
                <!-- <div
                  class="flex w-full items-center justify-end"
                  v-if="props.getCurrentEvent.status"
                >
                  <p
                    :class="{
                      'tagStyle bg-yellow-100 text-yellow-800':
                        props.getCurrentEvent?.status === 'past',
                      'tagStyle animate-bounce bg-green-100 text-green-800':
                        props.getCurrentEvent?.status === 'upcoming',
                      'tagStyle bg-red-100 text-red-800':
                        props.getCurrentEvent?.status === 'cancelled',
                    }"
                  >
                    {{ props.getCurrentEvent?.status }}
                  </p>
                </div> -->
                <h2
                  class="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl lg:text-5xl"
                >
                  {{ props.getCurrentEvent?.title }}
                </h2>
                <div class="mt-6 space-y-6 text-gray-500">
                  <div
                    class="text-md prose md:text-lg"
                    v-html="props.getCurrentEvent?.description"
                  ></div>
                </div>
              </div>

              <!-- Stats section -->
              <div class="mt-10">
                <dl
                  class="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4 md:gap-y-8"
                >
                  <div class="border-t-2 border-gray-100 pt-6">
                    <dt class="text-base font-medium text-gray-500">Date</dt>
                    <dd
                      class="text-2xl font-extrabold tracking-tight text-gray-900 md:text-3xl"
                    >
                      {{ new Date(props.getCurrentEvent?.Date).toDateString() }}
                    </dd>
                  </div>
                  <div class="border-t-2 border-gray-100 pt-4 md:pt-6">
                    <dt class="text-base font-medium text-gray-500">Venue</dt>
                    <dd
                      class="text-2xl font-extrabold tracking-tight text-gray-900 md:text-3xl"
                    >
                      {{ props.getCurrentEvent?.Venue }}
                    </dd>
                  </div>
                  <div class="border-t-2 border-gray-100 pt-4 md:pt-6">
                    <dt class="text-base font-medium text-gray-500">Time</dt>
                    <dd
                      class="text-2xl font-extrabold tracking-tight text-gray-900 md:text-3xl"
                    >
                      {{ props.getCurrentEvent?.Time }}
                    </dd>
                  </div>
                  <div class="border-t-2 border-gray-100 pt-4 md:pt-6">
                    <dt class="text-base font-medium text-gray-500">
                      Location
                    </dt>
                    <dd
                      class="text-2xl font-extrabold tracking-tight text-gray-900 md:text-3xl"
                    >
                      {{ props.getCurrentEvent?.Location }}
                    </dd>
                  </div>
                  <div class="border-t-2 border-gray-100 pt-6">
                    <dt class="text-base font-medium text-gray-500">
                      Seats Limit
                    </dt>
                    <dd
                      class="text-2xl font-extrabold tracking-tight text-gray-900 md:text-3xl"
                    >
                      {{ props.getCurrentEvent?.Attendees }}
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
          <!-- <div class="images mt-16 px-4 md:mt-16 lg:mx-auto lg:max-w-7xl">
        <div v-if="props.getCurrentEvent?.images === null">
          {{ props.getCurrentEvent?.images }}
        </div>
        <div
          v-else
          class="pb-4 text-center text-4xl font-extrabold text-blue-700 md:pb-8 md:text-5xl"
        >
          Gallery
        </div>

        <Gallery :eventImages="eventImages" :key="eventImages" />
      </div> -->
        </div>

        <!-- view-dashboard button -->
        <div
          class="dashboard-button md:-right-17 text-md absolute top-48 -right-16 rotate-90 rounded-b-lg bg-yellow-500 py-2 px-8 font-medium text-white hover:bg-yellow-400 md:py-4 md:text-lg lg:-right-16"
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

              <div
                class="fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16"
              >
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
                      class="flex h-full flex-col overflow-y-scroll bg-white shadow-xl"
                    >
                      <div class="p-6">
                        <div class="flex items-start justify-between">
                          <DialogTitle class="text-lg font-medium text-gray-900"
                            >Events List</DialogTitle
                          >
                          <div class="ml-3 flex h-7 items-center">
                            <button
                              type="button"
                              class="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500"
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
                              class="'whitespace-nowrap text-sm', ] border-b-2 border-transparent px-1 pb-4 font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                              >All events lists</a
                            >
                          </nav>
                        </div>
                      </div>

                      <!-- events list -->
                      <SliderEventList :sortedEventList="data" />
                    </div>
                  </div>
                </TransitionChild>
              </div>
            </div>
          </Dialog>
        </TransitionRoot>
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
import { IEvent } from "~/types/types";
const route = useRoute();

const props = defineProps({
  getCurrentEvent: [],
  data: Number,
  pending: Boolean,
});

const meetupId = computed(() => {
  return route.params.id;
});

const open = ref(false);
</script>
