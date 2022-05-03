<template>
  <div></div>
  <ul role="list" class="divide-y divide-gray-200 overflow-y-auto">
    <li
      v-for="(event, index) in sortedEventList"
      :key="event"
      :value="index"
      active-class="red"
    >
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
              class="event-name text-sm font-medium text-indigo-600 line-clamp-2 md:text-lg"
            >
              {{ event?.name }}
            </p>
            <div class="event-tags flex justify-end" v-if="event?.status">
              <p
                :class="{
                  'tagStyle bg-yellow-100 text-yellow-800':
                    event.status === 'past',
                  'tagStyle animate-pulse bg-green-100 text-green-800':
                    event.status === 'upcoming',
                  'tagStyle bg-red-100 text-red-800':
                    event.status === 'cancelled',
                }"
              >
                {{ event.status }}
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
                <span class="truncate">{{ event?.venue.address_1 }}</span>
              </p>
            </div>
            <div class="flex h-5 items-center text-sm text-gray-500">
              <CalendarIcon
                class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                aria-hidden="true"
              />
              <p>{{ new Date(event?.local_date).toDateString() }}</p>
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
