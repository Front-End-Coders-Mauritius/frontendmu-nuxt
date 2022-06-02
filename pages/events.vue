<script>
import { ClockIcon, MenuIcon, XIcon } from '@heroicons/vue/outline'
import { ChevronDownIcon } from '@heroicons/vue/solid'
import eventsListJson from '~/data/events'
import MetaTag from '~/components/MetaTag.vue'

definePageMeta({
  layout: 'custom',
})

export default {
  components: {
    ClockIcon,
    MenuIcon,
    XIcon,
    MetaTag,
  },
  data: () => {
    return {
      eventsListJson,
    }
  },

  computed: {
    eventsList() {
      if (this.eventsListJson.length === 0)
        return []

      return this.eventsListJson
    },

    sortedEventList() {
      const sortedList = this.eventsList.sort((a, b) => {
        return new Date(b?.local_date) - new Date(a?.local_date)
      })
      return sortedList
    },

    title() {
      return 'Front-End Coders Events'
    },

    description() {
      return 'Community of Front-End developers who share their passions for the web. Events, workshops and conferences occurs regularly.'
    },
  },
  mounted() {
    scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  },
}
</script>

<template>
  <MetaTag :event-name="title" :event-details="description" />

  <div class="past-events-container bg-gray-50">
    <div
      class="past-events-wrapper mx-auto py-8 px-4 md:max-w-2xl md:px-0 lg:max-w-7xl"
    >
      <div
        class="py-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:py-8 md:text-4xl"
      >
        <h1 class="text-center text-black">All events</h1>
      </div>
      <div
        class="divide-y divide-gray-200 overflow-hidden rounded-lg bg-gray-200 shadow-xl sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0"
      >
        <div
          v-for="(event, eventID) in sortedEventList"
          :key="event.title"
          class="group relative bg-white p-6" :class="[
            eventID === 0
              ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none'
              : '',
            eventID === 1 ? 'sm:rounded-tr-lg' : '',
            eventID === sortedEventList.length - 2 ? 'sm:rounded-bl-lg' : '',
            eventID === sortedEventList.length - 1
              ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none'
              : '',
          ]"
        >
          <div>
            <span
              class="inline-flex rounded-lg bg-blue-50 p-3 text-blue-700 ring-4 ring-white"
            >
              <ClockIcon class="mr-2 h-6 w-6" />
              <span>{{ new Date(event?.local_date).toDateString() }}</span>
            </span>
          </div>
          <div class="mt-6">
            <h3 class="text-lg font-medium">
              <router-link
                :to="{ name: 'event-id', params: { id: event.id } }"
                class="focus:outline-none"
              >
                <!-- Extend touch target to entire panel -->
                <span class="absolute inset-0" aria-hidden="true" />
                <span>{{ event?.name }}</span>
                <p
                  :class="{
                    'tagStyle bg-yellow-100 text-yellow-800':
                      event?.status === 'past',
                    'tagStyle animate-bounce bg-green-100 text-green-800':
                      event?.status === 'upcoming',
                    'tagStyle bg-red-100 text-red-800':
                      event?.status === 'cancelled',
                  }"
                >
                  {{ event?.status }}
                </p>
              </router-link>
            </h3>
            <p class="mt-2 max-w-lg text-sm text-gray-500 line-clamp-3">
              {{ event?.description.replace(/<\/?[^>]+>/gi, "") }}
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
    </div>
  </div>
</template>

<style>
.tagStyle {
  @apply ml-2 inline-flex rounded-full px-2 text-xs font-semibold leading-5;
}
</style>
