<!-- This example requires Tailwind CSS v2.0+ -->
<script setup lang="ts">
import Tilt from 'vanilla-tilt-vue'
import type { ComputedRef } from 'vue'

interface Meetup {
  id: string
  title: string
  Date: string
  Attendees: number
  Venue: string
  description: string
  Location: string
  Time: string
  images?: []
  gallery?: []
  album?: string
}

const { data, pending } = useEvents()

const dateInPast = function (firstDate: Date, secondDate: Date) {
  if (firstDate.setHours(0, 0, 0, 0) <= secondDate.setHours(0, 0, 0, 0))
    return true

  return false
}

const isUpcoming = (currentEventDate: string) => {
  const past = new Date(currentEventDate)
  const today = new Date()
  const verifyValue = dateInPast(past, today)
  return verifyValue
}

const filteredData: ComputedRef<Meetup[]> = computed(() => {
  if (!data.value)
    return []
  const sortedData = data.value.sort((a: Meetup, b: Meetup) => {
    return new Date(b.Date).getTime() - new Date(a.Date).getTime()
  })

  const withoutUpcoming = sortedData.filter((item: Meetup) => {
    return isUpcoming(item.Date)
  })

  return withoutUpcoming.slice(0, 10) as Meetup[]
})

const upcomingData: ComputedRef<Meetup[]> = computed(() => {
  if (!data.value)
    return []
  const sortedData = data.value.sort((a: Meetup, b: Meetup) => {
    return new Date(b.Date).getTime() - new Date(a.Date).getTime()
  })

  return sortedData.filter((item: Meetup) => {
    return !isUpcoming(item.Date)
  }) as Meetup[]
})

const tiltOptions = {
  reverse: false,
  speed: 1000,
}
</script>

<template>
  <div
    class="latest-events-container relative z-20 sm:py-6 md:pt-8 md:px-8 bg-gray-100 px-0"
  >
    <div
      class="latest-events-wrapper mx-auto px-4 pt-8 md:max-w-3xl md:px-0 lg:max-w-5xl"
    >
      <div
        class="py-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:py-8 md:text-5xl"
      >
        <h2 class="text-center text-black md:text-left">Upcoming meetups</h2>
      </div>

      <Tilt :options="tiltOptions">

        <div
          class="sm:grid sm:grid-cols-1 gap-8 px-4 md:px-0 card-3d"
        >
          <template
            v-for="(event, eventID) in (upcomingData as any)"
            :key="eventID"
          >
            <event-card :event="event" />
          </template>
        </div>

      </Tilt>

      <div
        class="py-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:py-8 md:text-4xl"
      >
        <h2 class="text-center text-black md:text-left">Recent meetups</h2>
      </div>

      <div class="sm:grid sm:grid-cols-2 gap-8 px-4 md:px-0">
        <template
          v-for="(event, eventID) in (filteredData as any)"
          :key="eventID"
        >
          <small-event-card :event="event" />
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

<style scoped>
/* From uiverse.io by @EmmaxPlay */

.card-3d::after {
 content: "";
 z-index: -1;
 position: absolute;
 width: 100%;
 height: 100%;
 left: 0;
 top: 0;
 border-radius: 10px;
}
/* glow */
.card-3d::before {
 content: "";
 background: linear-gradient(
    45deg,
    #16a34a, #2563eb, #16a34a, #2563eb,
      #16a34a, #2563eb, #16a34a, #2563eb
);
 position: absolute;
 top: -2px;
 left: -2px;
 background-size: 600%;
 z-index: -1;
 width: calc(100% + 4px);
 height: calc(100% + 4px);
 filter: blur(8px);
 animation: glowing 20s linear infinite;
 transition: opacity .3s ease-in-out;
 border-radius: 10px;
 opacity: 0;
}

@keyframes glowing {
 0% {
  background-position: 0 0;
 }

 50% {
  background-position: 400% 0;
 }

 100% {
  background-position: 0 0;
 }
}

/* hover */
.card-3d:hover::before {
 opacity: 1;
}

.card-3d:active:after {
 background: transparent;
}

.card-3d:active {
 color: #000;
 font-weight: bold;
}
</style>
