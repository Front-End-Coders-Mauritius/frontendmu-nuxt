<template>
  <TransitionRoot as="template" :show="open">
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
                      >Meetups List</DialogTitle
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
                        >All meetups lists</a
                      >
                    </nav>
                  </div>
                </div>

                <!-- events list -->
                <SliderEventList :data="data" />
              </div>
            </div>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
<script setup lang="ts">
import { Ref, ref } from "vue";
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

const props = defineProps({
  data: {},
  open: Boolean,
});
</script>
