<template>
  <TransitionRoot as="template" :show="setOpen">
    <Dialog as="div" class="fixed inset-0 overflow-hidden" @close="open = false">
      <div class="absolute inset-0 overflow-hidden">
        <DialogOverlay class="absolute inset-0" />

        <div class="fixed inset-y-0 right-0 pl-10 max-w-full flex sm:pl-16">
          <TransitionChild
            as="template"
            enter="transform transition ease-in-out duration-500 sm:duration-700"
            enter-from="translate-x-full"
            enter-to="translate-x-0"
            leave="transform transition ease-in-out duration-500 sm:duration-700"
            leave-from="translate-x-0"
            leave-to="translate-x-full"
          >
            <div class="w-screen max-w-md">
              <div class="h-full flex flex-col bg-white shadow-xl overflow-y-scroll">
                <div class="p-6">
                  <div class="flex items-start justify-between">
                    <DialogTitle class="text-lg font-medium text-gray-900">Events List</DialogTitle>
                    <div class="ml-3 h-7 flex items-center">
                      <button
                        type="button"
                        class="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500"
                        @click="open = false"
                      >
                        <span class="sr-only">Close panel</span>
                        <XIcon class="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </div>
                <div class="border-b border-gray-200">
                  <div class="px-6">
                    <nav class="-mb-px flex space-x-6" x-descriptions="Tab component">
                      <a
                        class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 'whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm', ]"
                      >All events lists</a>
                    </nav>
                  </div>
                </div>

                <!-- events list -->
                <ul role="list" class="divide-y divide-gray-200 overflow-y-auto">
                  <li
                    v-for="(event, index) in eventListToSidebar"
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
                            class="event-name text-sm md:text-lg font-medium text-indigo-600 line-clamp-2"
                          >{{ event.name }}</p>
                          <div class="event-tags flex justify-end">
                            <p
                              class="event-status mr-2 px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800"
                            >{{ event.status }}</p>
                          </div>
                        </div>
                        <p
                          class="text-gray-400 line-clamp-2"
                        >{{ event.description.replace(/<\/?[^>]+>/gi, "") }}</p>
                        <div class="flex flex-col gap-2">
                          <div class="flex flex-col gap-4">
                            <p class="flex items-center text-sm text-gray-500 mt-0">
                              <LocationMarkerIcon
                                class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400 truncate"
                                aria-hidden="true"
                              />
                              <span class="truncate">
                                {{
                                event.venue.address_1
                                }}
                              </span>
                            </p>
                          </div>
                          <div class="flex items-center text-sm text-gray-500 h-5">
                            <CalendarIcon
                              class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                              aria-hidden="true"
                            />
                            <p>{{ new Date(event.local_date).toDateString() }}</p>
                          </div>
                        </div>
                      </div>
                    </router-link>
                  </li>
                </ul>
              </div>
            </div>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
<script>
import { ref } from "vue";
import {
  Dialog,
  DialogOverlay,
  DialogTitle,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import {
  XIcon,
  LocationMarkerIcon,
  CalendarIcon,
  DotsVerticalIcon,
} from "@heroicons/vue/solid";

export default {
  props: ["eventListToSidebar", "open"],
  components: {
    Dialog,
    DialogOverlay,
    DialogTitle,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    TransitionChild,
    TransitionRoot,
    DotsVerticalIcon,
    CalendarIcon,
    LocationMarkerIcon,
    XIcon,
  },

  computed: {
    setOpen() {
      return this.open;
    },
  },
  mounted() {
    console.log("mounted sidebar", this.open);
  },
  updated() {
    console.log("updated sidebar", this.open);
    this.open;
  },
};
</script>
