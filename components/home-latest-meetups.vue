<!-- This example requires Tailwind CSS v2.0+ -->
<template>
    <div class="latest-events-container relative z-20 sm:py-6 md:pt-8 md:px-8 px-0">
        <div class="latest-events-wrapper mx-auto px-4 pt-8 md:max-w-3xl md:px-0 lg:max-w-7xl">
            <div class="py-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:py-8 md:text-5xl">
                <h1 class="text-center text-black md:text-left">Latest meetups</h1>
            </div>

            <div
                class="divide-y divide-gray-200 overflow-hidden rounded-lg bg-gray-200 shadow-xl sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0">
                <div v-for="(event, eventID) in (filteredData as Meetup)"
                    :key="event.title"
                    :class="[
                        eventID === 0
                            ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none'
                            : '',
                        eventID === 1 ? 'sm:rounded-tr-lg' : '',
                        eventID === data.length - 2 ? 'sm:rounded-bl-lg' : '',
                        eventID === data.length - 1
                            ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none'
                            : '',
                        'group relative bg-white p-6',
                    ]">
                    <div v-if="event.Date">
                        <span class="inline-flex rounded-lg bg-blue-50 p-3 text-blue-700 ring-4 ring-white">
                            <ClockIcon class="mr-2 h-6 w-6" />
                            <span>{{ new Date(event.Date).toDateString() }}</span>
                        </span>
                    </div>
                    <div class="mt-6">
                        <h3 class="leading-2 text-xl font-medium md:h-12">
                            <router-link :to="{ name: 'meetup-id', params: { id: event.id } }"
                                class="w-96 focus:outline-none">
                                <!-- Extend touch target to entire panel -->
                                <span class="absolute inset-0"
                                    aria-hidden="true" />
                                {{ event?.title }}

                                <p :class="[
                                    isUpcoming(event.Date)
                                        ? 'tagStyle bg-yellow-100 text-yellow-800'
                                        : 'tagStyle animate-bounce bg-green-100 text-green-800',
                                ]">
                                    {{ isUpcoming(event.Date) ? " " : "upcoming" }}
                                </p>
                            </router-link>
                        </h3>

                        <div class="flex gap-1 flex-col border-gray-100 md:pt-2 lg:pt-0">
                            <div
                                class="flex gap-1 md:gap-0 items-center justify-start text-base font-medium leading-3 md:leading-5 text-gray-500">
                                <UsersIcon class="mr-1.5 h-[15px] w-[15px] flex-shrink-0 truncate text-gray-700"
                                    aria-hidden="true" />
                                <div class="pt-[2px]"
                                    v-if="event?.Attendees !== 0">
                                    Attendees {{ event?.Attendees }}
                                </div>
                                <div class="pt-[2px]"
                                    v-else>Seats: {{ event?.Attendees }}</div>
                            </div>
                            <div class="flex gap-1 md:gap-0 items-center justify-start text-base font-medium text-gray-500"
                                v-if="event.Venue">
                                <LocationMarkerIcon
                                    class="ml-[-1px] mr-1.5 h-4 w-4 flex-shrink-0 truncate text-gray-400"
                                    aria-hidden="true" />
                                <div class="pt-1">{{ event.Venue }}</div>
                            </div>
                            <div v-else>No venue added.</div>
                        </div>
                    </div>
                    <span class="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-red-400"
                        aria-hidden="true">
                        <TrendingUpIcon class="h-6 w-6" />
                    </span>
                </div>
            </div>
            <div class="flex h-32 items-center justify-center">
                <router-link :to="{ path: '/meetups' }"
                    class="text-md w-48 rounded-md bg-blue-600 px-4 py-4 text-center font-medium text-white md:w-64 md:px-8 md:text-xl">
                    View all meetups</router-link>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { LocationMarkerIcon, UsersIcon } from "@heroicons/vue/solid";
import { MenuIcon, XIcon, ClockIcon, TrendingUpIcon } from "@heroicons/vue/outline";

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
    return sortedData.slice(0, 6)
})

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
