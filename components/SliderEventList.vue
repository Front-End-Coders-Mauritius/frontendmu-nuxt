<template>
  <div></div>
  <ul role="list" class="divide-y divide-gray-200 overflow-y-auto">
    <li
      v-for="(event, index) in data"
      :key="event"
      :value="index"
      active-class="red"
    >
      <router-link
        :to="{
          name: 'meetup-id',
          params: { id: event.id },
        }"
        class="block hover:bg-gray-50"
      >
        <div class="flex flex-col gap-4 px-8 py-4">
          <div class="flex flex-col-reverse gap-2">
            <p
              class="event-name text-sm font-medium text-indigo-600 line-clamp-2 md:text-lg"
            >
              {{ event?.title }}
            </p>
            <div class="event-tags flex justify-end">
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
          </div>
          <p class="text-gray-400 line-clamp-2">
            {{ event?.description.replace(/<\/?[^>]+>/gi, "") }}
          </p>
          <div class="flex flex-col gap-2">
            <div class="flex flex-col gap-4">
              <p class="mt-0 flex items-center text-sm text-gray-500">
                <LocationMarkerIcon
                  class="mr-1.5 h-5 w-5 flex-shrink-0 truncate text-gray-400"
                  aria-hidden="true"
                />
                <span class="truncate">{{ event?.Location }}</span>
              </p>
            </div>
            <div class="flex h-5 items-center text-sm text-gray-500">
              <CalendarIcon
                class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                aria-hidden="true"
              />
              <p>{{ new Date(event?.Location).toDateString() }}</p>
            </div>
          </div>
        </div>
      </router-link>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { LocationMarkerIcon, CalendarIcon } from "@heroicons/vue/solid";
import { IEvent } from "~~/types/types";
import { PropType } from "vue";

const props = defineProps({
  data: {},
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
</script>
<style>
.tagStyle {
  @apply mr-2 inline-flex rounded-full px-2 text-xs font-semibold leading-5;
}
</style>
