<!-- This example requires Tailwind CSS v2.0+ -->
<template>
    <MetaTag :eventName="title" :eventDetails="description" />
    <div class="homepage-container">
        <div class="homepage-wrapper mx-auto max-w-7xl">
            <main class="lg:relative">
                <div class="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
                    <div class="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
                        <h1
                            class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl"
                        >
                            <span class="block xl:inline text-blue-500">Front-End Coders</span>
                            {{ " " }}
                            <span
                                class="block text-indigo-600 xl:inline text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-yellow-500 to-green-600"
                            >Mauritius</span>
                        </h1>
                        <p
                            class="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl"
                        >
                            Front-End coders Mauritius is a free meetup that's dedicated to
                            all aspect of Front-End development. it occurs in general one a
                            month at announced date and place. Feel free to join!
                        </p>
                        <div
                            class="mt-10 md:flex justify-start md:justify-center lg:justify-start gap-4 w-72 mx-auto md:w-auto lg:mx-o"
                        >
                            <div class="rounded-md shadow">
                                <router-link
                                    to="/events"
                                    class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yellow-500 hover:bg-yellow-400 md:py-4 md:text-lg md:px-10"
                                >View Events</router-link>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    class="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full"
                >
                    <img
                        class="absolute inset-0 w-full h-full object-cover"
                        src="/img/homepage2.jpg"
                        alt
                    />
                </div>
            </main>
        </div>
    </div>
    <div class="latest-events-container sm:py-6 md:pt-8">
        <div class="latest-events-wrapper md:max-w-2xl lg:max-w-7xl mx-auto pt-8 px-4 md:px-0">
            <div
                class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-5xl py-4 md:py-8"
            >
                <h1 class="text-center text-black">Latest events</h1>
            </div>
            <div
                class="rounded-lg bg-gray-200 overflow-hidden shadow-xl divide-y divide-gray-200 sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-px"
            >
                <div
                    v-for="(event, eventID) in sortedEventList.slice(0, 6)"
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
                                {{ event.name }}
                                <p
                                    :class="[
                                        event.status === 'upcoming'
                                            ? 'bg-green-100 text-green-800 tagStyle'
                                            : '',
                                    ]"
                                >{{ event.status }}</p>
                            </router-link>
                        </h3>
                        <p
                            class="mt-2 text-sm text-gray-500 line-clamp-3 max-w-lg"
                        >{{ event.description.replace(/<\/?[^>]+>/gi, "") }}</p>
                    </div>
                    <span
                        class="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-red-400"
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
            <div class="flex justify-center items-center h-32">
                <router-link
                    to="/events"
                    class="text-center bg-blue-600 text-white text-md md:text-xl px-4 md:px-8 py-4 rounded-md font-medium w-48 md:w-64"
                >View all events</router-link>
            </div>
        </div>
    </div>
</template>

<script>
import { MenuIcon, XIcon, ClockIcon } from "@heroicons/vue/outline";
import { ChevronDownIcon } from "@heroicons/vue/solid";
import eventsListJson from "~/data/myEventArray.json";
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
        MetaTag
    },

    data: () => {
        return {
            title: "Front-End Coders Mauritus",
            description: "yo"
        }
    },

    computed: {
        eventsList() {
            console.log("computed eventlist");
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
    },
    data: () => {
        return {
            eventsListJson,
        };
    },
};
</script>
