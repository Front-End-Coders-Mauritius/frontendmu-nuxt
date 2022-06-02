<template>
    <div class="relative group bg-white p-6">       
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

const props = defineProps({
    event: {
        type: Object as PropType<Meetup>,
        default: () => ({}),
    }
})

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
