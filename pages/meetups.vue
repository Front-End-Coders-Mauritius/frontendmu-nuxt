<template>
  <div>
    <div v-if="pending">loading...</div>
    <div v-else>
      <!-- start  -->
      <div class="past-events-container bg-gray-50">
        <div
          class="past-events-wrapper mx-auto py-8 px-4 md:max-w-2xl md:px-0 lg:max-w-7xl"
        >
          <div
            class="py-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:py-8 md:text-4xl"
          >
            <h1 class="text-center text-black">All meetups</h1>
          </div>
          <div
            v-if="data"
            class="divide-y divide-gray-200 overflow-hidden rounded-lg bg-gray-200 shadow-xl sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0"
          >
            <div
              v-for="(event, eventID) in data"
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
              <div>
                <span
                  class="inline-flex rounded-lg bg-blue-50 p-3 text-blue-700 ring-4 ring-white"
                >
                  <ClockIcon class="mr-2 h-6 w-6" />
                  <span>{{ new Date(event?.Date).toDateString() }}</span>
                </span>
              </div>
              <div class="mt-6">
                <h3 class="text-lg font-medium">
                  <router-link
                    :to="{ name: 'meetup-id', params: { id: event.id } }"
                    class="focus:outline-none flex"
                  >
                    <!-- Extend touch target to entire panel -->
                    <span class="absolute inset-0" aria-hidden="true" />
                    <span>{{ event.title }}</span>
                    <div>
                      <p
                        :class="[
                          isUpcoming(event.Date)
                            ? 'tagStyle bg-yellow-100 text-yellow-800'
                            : 'tagStyle animate-bounce bg-green-100 text-green-800',
                        ]"
                      >
                        {{ isUpcoming(event.Date) ? "past" : "upcoming" }}
                      </p>
                    </div>
                  </router-link>
                </h3>
                <p
                  class="mt-2 max-w-lg text-sm text-gray-500 line-clamp-3"
                  v-if="event.description"
                >
                  {{ event.description.replace(/<\/?[^>]+>/gi, "") }}
                </p>
                <p
                  class="mt-2 max-w-lg text-sm text-gray-500 line-clamp-3"
                  v-else
                >
                  No description.
                </p>
              </div>
              <span
                class="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-blue-400"
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
          <div v-else>Something went wrong.</div>
        </div>
      </div>
      <!-- ends -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { MenuIcon, XIcon, ClockIcon } from "@heroicons/vue/outline";
import { ChevronDownIcon } from "@heroicons/vue/solid";
import { IEvent } from "~/types/types";

definePageMeta({
  layout: "custom",
  transition: {
    name: "meetups",
  },
  keepAlive: {
    exclude: ["modal"],
  },
});

const { data, pending } = useEvents();
// to add past or upcoming status

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

// to do : update index.vue routes button
</script>
