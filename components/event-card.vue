<script setup lang="ts">
import { LocationMarkerIcon, UsersIcon } from '@heroicons/vue/solid'
import {
  CalendarIcon,
  MenuIcon,
  TrendingUpIcon,
  XIcon,
} from '@heroicons/vue/outline'

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
}

const props = defineProps({
  event: {
    type: Object as PropType<Meetup>,
    default: () => ({}),
  },
})

const { data, pending } = useEvents()

const filteredData = computed(() => {
  // Sort by date
  const sortedData = data.value.sort((a: Meetup, b: Meetup) => {
    return new Date(b.Date).getTime() - new Date(a.Date).getTime()
  })
  return sortedData.slice(0, 6)
})

// to get past or upcoming value base in Date
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
</script>

<template>
  <div
    class="mt-4 md:mt-0 relative rounded-xl group flex flex-col  items-start md:items-center gap-6 md:gap-16 group bg-white p-8 md:p-16 shadow-xl"
  >

    <logo-fec class="w-32 z-0 transition-all hidden md:block select-none top-0 saturate-100  opacity-100  overflow-hidden" />
    <!-- <div class="w-64 top-0 h-64 z-10 bg-gradient-to-t from-white to-transparent absolute">&nbsp;</div> -->

    <h3 class="leading-2 text-xl md:text-5xl font-medium md:h-12 z-20">
      <router-link
        :to="{ name: 'meetup-id', params: { id: event.id } }"
        class="w-[300px] md:w-96 focus:outline-none"
      >
        <span class="absolute inset-0" aria-hidden="true" />
        {{ event?.title }}

      </router-link>
    </h3>
    <div class="flex flex-col md:flex-row w-full justify-between gap-4 border-gray-100">
      <span
        v-if="event.Date"
        class="inline-flex rounded-lg p-3 ring-4 ring-white"
        :class="
          isUpcoming(event.Date)
            ? 'bg-gray-50 text-gray-700'
            : 'bg-green-50 text-green-600 font-bold'
        "
      >
        <CalendarIcon class="mr-2 h-6 w-6" />
        <span>{{ new Date(event.Date).toDateString() }}</span>
      </span>

      <div
        class="flex gap-1 md:gap-0 items-center justify-start text-xl font-medium leading-5 text-gray-500"
      >
        <UsersIcon
          class="mr-1.5 h-[15px] w-[15px] flex-shrink-0 truncate text-gray-500"
          aria-hidden="true"
        />
        <div v-if="event?.Attendees !== 0" class="pt-[2px] line-clamp-1 md:line-clamp-0">
          Attendees {{ event?.Attendees }}
        </div>
        <div v-else class="pt-[2px]">Seats: {{ event?.Attendees }}</div>
      </div>
      <div
        v-if="event.Venue"
        class="flex gap-1 md:gap-0 items-center justify-start text-xl font-medium text-gray-500"
      >
        <LocationMarkerIcon
          class="ml-[-1px] mr-1.5 h-4 w-4 flex-shrink-0 truncate text-gray-500"
          aria-hidden="true"
        />
        <div class="pt-1 ">{{ event.Venue }}</div>
      </div>
      <div v-else>No venue added.</div>
    </div>
    <span
      class="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-green-500"
      aria-hidden="true"
    >
      <TrendingUpIcon class="h-6 w-6" />
    </span>
  </div>
</template>
