<!-- This example requires Tailwind CSS v2.0+ -->
<script setup lang="ts">
import { LocationMarkerIcon, UsersIcon } from "@heroicons/vue/solid";
import {
  ClockIcon,
  MenuIcon,
  TrendingUpIcon,
  XIcon,
} from "@heroicons/vue/outline";

interface Meetup {
  id: string;
  title: string;
  Date: string;
  Attendees: number;
  Venue: string;
  description: string;
  Location: string;
  Time: string;
  images?: [];
  gallery?: [];
}

const { data, pending } = useEvents();

const filteredData = computed(() => {
  // Sort by date
  const sortedData = data.value.sort((a: Meetup, b: Meetup) => {
    return new Date(b.Date).getTime() - new Date(a.Date).getTime();
  });
  return sortedData.slice(0, 6);
});

// to get past or upcoming value base in Date
const dateInPast = function (firstDate: Date, secondDate: Date) {
  if (firstDate.setHours(0, 0, 0, 0) <= secondDate.setHours(0, 0, 0, 0))
    return true;

  return false;
};

const isUpcoming = (currentEventDate: string) => {
  const past = new Date(currentEventDate);
  const today = new Date();
  const verifyValue = dateInPast(past, today);
  return verifyValue;
};
</script>

<template>
  <div
    class="latest-events-container relative z-20 sm:py-6 md:pt-8 md:px-8 bg-gray-50 px-0"
  >
    <div
      class="latest-events-wrapper mx-auto px-4 pt-8 md:max-w-3xl md:px-0 lg:max-w-5xl"
    >
      <div
        class="py-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:py-8 md:text-5xl"
      >
        <h1 class="text-center text-black md:text-left">Latest meetups</h1>
      </div>

      <div class="sm:grid sm:grid-cols-1 gap-8">
        <template
          v-for="(event, eventID) in (filteredData as Meetup)"
          :key="eventID"
        >
          <event-card :event="event" />
        </template>
      </div>

      <div class="flex h-32 items-center justify-center">
        <router-link
          :to="{ path: '/meetups' }"
          class="text-md w-48 rounded-md bg-blue-600 px-4 py-4 text-center font-medium text-white md:w-64 md:px-8 md:text-xl"
        >
          View all meetups
        </router-link>
      </div>
    </div>
  </div>
</template>
