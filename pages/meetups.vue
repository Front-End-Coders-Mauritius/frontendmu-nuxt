<script setup lang="ts">
import { ClockIcon, MenuIcon, XIcon } from '@heroicons/vue/outline'
import { ChevronDownIcon } from '@heroicons/vue/solid'
import { IEvent } from '~/types/types'

definePageMeta({
  layout: 'custom',
  layoutTransition: {
    name: 'fade',
  },
  keepAlive: {
    exclude: ['modal'],
  },
})

const { data, pending } = useEvents()
// to add past or upcoming status

const filteredData = computed(() => {
  // Sort by date
  const sortedData = data.value.sort((a: Meetup, b: Meetup) => {
    return new Date(b.Date).getTime() - new Date(a.Date).getTime()
  })
  return sortedData
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

// to do : update index.vue routes button
</script>

<template>
  <div>
    <div v-if="pending">loading...</div>
    <div v-else>
      <!-- start  -->
      <div class="past-events-container bg-brand-50 pb-4 md:pb-16">
        <div
          class="past-events-wrapper mx-auto py-8 px-4 md:px-20"
        >
          <div
            class="py-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:py-8 md:text-4xl"
          >
            <h1 class=" text-black">All meetups</h1>
          </div>

          <div v-if="filteredData" class="grid-container gap-8">
            <template
              v-for="(event, eventID) in (filteredData as Meetup)"
              :key="eventID"
            >
              <detailed-event-card :event="event" />
            </template>
          </div>

          <div v-else>Something went wrong.</div>
        </div>
      </div>
      <!-- ends -->
    </div>
  </div>
</template>

<style scoped>
@media screen and (min-width: 650px) {
  .grid-container {
    --minmax: 500px;
  }
}

@media screen and (max-width: 650px) {
  .grid-container {
    --minmax: 100%;
  }
}
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(var(--minmax), 1fr));
}
</style>
