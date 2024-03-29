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
    class="mt-4 md:mt-0 relative rounded-xl flex flex-col gap-2 group bg-white p-6 shadow-md transition-all hover:shadow-lg"
  >
    <div v-if="event.Date" class="">
      <span
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
    </div>
    <div class="flex flex-col gap-4 md:gap-0">
      <h3 class="leading-2 text-xl md:text-2xl font-medium py-2">
        <router-link
          :to="{ name: 'meetup-id', params: { id: event.id } }"
          class="w-[300px] md:w-96 focus:outline-none"
        >
          <span class="absolute inset-0" aria-hidden="true" />
          {{ event?.title }}
        </router-link>
      </h3>
      <div class="flex gap-4 border-gray-100">
        <div
          class="flex gap-1 md:gap-0 items-center justify-start text-base font-medium leading-3 md:leading-5 text-gray-500"
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
          class="flex gap-1 md:gap-0 items-center justify-start text-base font-medium text-gray-500"
        >
          <LocationMarkerIcon
            class="ml-[-1px] mr-1.5 h-4 w-4 flex-shrink-0 truncate text-gray-500"
            aria-hidden="true"
          />
          <div class="pt-1 line-clamp-1 md:line-clamp-0">{{ event.Venue }}</div>
        </div>
        <div v-else>No venue added.</div>
      </div>
    </div>
    <span
      class="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-verse-500"
      aria-hidden="true"
    >
      <TrendingUpIcon class="h-6 w-6" />
    </span>
  </div>
</template>
