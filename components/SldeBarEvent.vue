<template>
  <TransitionRoot as="template" :show="setOpen">
    <Dialog
      as="div"
      class="fixed inset-0 overflow-hidden"
      @close="open = false"
    >
      <div class="absolute inset-0 overflow-hidden">
        <DialogOverlay class="absolute inset-0" />

        <div class="fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
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
              <div
                class="flex h-full flex-col overflow-y-scroll bg-white shadow-xl"
              >
                <div class="p-6">
                  <div class="flex items-start justify-between">
                    <DialogTitle class="text-lg font-medium text-gray-900"
                      >Events List</DialogTitle
                    >
                    <div class="ml-3 flex h-7 items-center">
                      <button
                        type="button"
                        class="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500"
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
                    <nav
                      class="-mb-px flex space-x-6"
                      x-descriptions="Tab component"
                    >
                      <a
                        class="'whitespace-nowrap text-sm', ] border-b-2 border-transparent px-1 pb-4 font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                        >All events lists</a
                      >
                    </nav>
                  </div>
                </div>

                <!-- events list -->
                <ul
                  role="list"
                  class="divide-y divide-gray-200 overflow-y-auto"
                >
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
                            class="event-name text-sm font-medium text-indigo-600 line-clamp-2 md:text-lg"
                          >
                            {{ event?.title }}
                          </p>
                          <div
                            class="event-tags flex justify-end"
                            v-if="event?.status"
                          >
                            <p
                              class="event-status mr-2 inline-flex rounded-full bg-yellow-100 px-2 text-xs font-semibold leading-5 text-yellow-800"
                            >
                              {{ event?.status }}
                            </p>
                          </div>
                        </div>
                        <p class="text-gray-400 line-clamp-2">
                          {{ event?.description.replace(/<\/?[^>]+>/gi, "") }}
                        </p>
                        <div class="flex flex-col gap-2">
                          <div class="flex flex-col gap-4">
                            <p
                              class="mt-0 flex items-center text-sm text-gray-500"
                            >
                              <LocationMarkerIcon
                                class="mr-1.5 h-5 w-5 flex-shrink-0 truncate text-gray-400"
                                aria-hidden="true"
                              />
                              <span class="truncate">
                                {{ event?.Location }}
                              </span>
                            </p>
                          </div>
                          <div
                            class="flex h-5 items-center text-sm text-gray-500"
                          >
                            <CalendarIcon
                              class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                              aria-hidden="true"
                            />
                            <p>
                              {{ new Date(event?.Date).toDateString() }}
                            </p>
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
