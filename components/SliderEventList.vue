<template>
  <div></div>
  <ul role="list" class="divide-y divide-gray-200 overflow-y-auto">
    <li v-for="(event, index) in sortedEventList" :key="event" :value="index" active-class="red">
      <router-link
        :to="{
          name: 'event-id',
          params: { id: event.id },
        }"
        class="block hover:bg-gray-50"
      >
        <div class="flex flex-col gap-4 px-8 py-4">
          <div class="flex flex-col-reverse gap-2">
            <p
              class="event-name text-sm md:text-lg font-medium text-indigo-600 line-clamp-2"
            >{{ event.name }}</p>
            <div class="event-tags flex justify-end">
              <p
                :class="{
                  'bg-yellow-100 text-yellow-800 tagStyle':
                    event.status === 'past',
                  'bg-green-100 text-green-800 tagStyle':
                    event.status === 'upcoming',
                  'bg-red-100 text-red-800 tagStyle':
                    event.status === 'cancelled',
                }"
              >{{ event.status }}</p>
            </div>
          </div>
          <p class="text-gray-400 line-clamp-2">{{ event.description.replace(/<\/?[^>]+>/gi, "") }}</p>
          <div class="flex flex-col gap-2">
            <div class="flex flex-col gap-4">
              <p class="flex items-center text-sm text-gray-500 mt-0">
                <LocationMarkerIcon
                  class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400 truncate"
                  aria-hidden="true"
                />
                <span class="truncate">{{ event.venue.address_1 }}</span>
              </p>
            </div>
            <div class="flex items-center text-sm text-gray-500 h-5">
              <CalendarIcon class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
              <p>{{ new Date(event.local_date).toDateString() }}</p>
            </div>
          </div>
        </div>
      </router-link>
    </li>
  </ul>
</template>

<script>
import { LocationMarkerIcon, CalendarIcon } from "@heroicons/vue/solid";

export default {
  props: ["sortedEventList"],

  components: {
    CalendarIcon,
    LocationMarkerIcon,
  },

  data: () => {
    return {};
  },
};
</script>
<style>
.tagStyle {
  @apply mr-2 inline-flex rounded-full px-2 text-xs font-semibold leading-5;
}
</style>
