<template>
  <MetaTag :eventName="title" :eventDetails="description" />

  <div class="past-events-container bg-gray-50">
    <div
      class="past-events-wrapper md:max-w-2xl lg:max-w-7xl mx-auto py-8 px-4 md:px-0"
    >
      <div
        class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-4xl py-4 md:py-8"
      >
        <h1 class="text-center text-black">All events</h1>
      </div>
      <div
        class="rounded-lg bg-gray-200 overflow-hidden shadow-xl divide-y divide-gray-200 sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-px"
      >
        <div
          v-for="(event, eventID) in sortedEventList"
          :key="event.title"
          :class="[
            eventID === 0
              ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none'
              : '',
            eventID === 1 ? 'sm:rounded-tr-lg' : '',
            eventID === sortedEventList.length - 2 ? 'sm:rounded-bl-lg' : '',
            eventID === sortedEventList.length - 1
              ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none'
              : '',
            'relative group bg-white p-6',
          ]"
        >
          <div>
            <span
              class="rounded-lg inline-flex p-3 ring-4 ring-white bg-blue-50 text-blue-700"
            >
              <ClockIcon class="h-6 w-6 mr-2" />
              <span>{{ new Date(event.local_date).toDateString() }}</span>
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
                <span>{{ event.name }}</span>
                <p
                  :class="[
                    event.status === 'upcoming'
                      ? 'bg-green-100 text-green-800 tagStyle animate-bounce'
                      : '',
                  ]"
                >
                  {{ event.status }}
                </p>
              </router-link>
            </h3>
            <p class="mt-2 text-sm text-gray-500 line-clamp-3 max-w-lg">
              {{ event.description.replace(/<\/?[^>]+>/gi, "") }}
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
<script>
import { MenuIcon, XIcon, ClockIcon } from "@heroicons/vue/outline";
import { ChevronDownIcon } from "@heroicons/vue/solid";
import eventsListJson from "~~/data/events";
import MetaTag from "~~/components/MetaTag.vue";

definePageMeta({
  layout: "custom",
});

export default {
  components: {
    ChevronDownIcon,
    ClockIcon,
    MenuIcon,
    XIcon,
    MetaTag,
  },

  computed: {
    eventsList() {
      if (this.eventsListJson.length === 0) {
        return [];
      }
      return this.eventsListJson;
    },

    sortedEventList() {
      const sortedList = this.eventsList.sort((a, b) => {
        return new Date(b.local_date) - new Date(a.local_date);
      });
      return sortedList;
    },

    title() {
      return "Front-End Coders Events";
    },

    description() {
      return "Community of Front-End developers who share their passions for the web. Events, workshops and conferences occurs regularly.";
    },
  },
  data: () => {
    return {
      eventsListJson,
    };
  },
  mounted() {
    scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  },
};
</script>
<style>
.tagStyle {
  @apply ml-2 inline-flex rounded-full px-2 text-xs font-semibold leading-5;
}
</style>
