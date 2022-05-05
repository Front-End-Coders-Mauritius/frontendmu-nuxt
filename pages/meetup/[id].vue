<template>
  <div>
    <div>
      {{ eventid }}
    </div>
    <div v-if="pending">loading...</div>
    <div v-else>
      <div class="prose">
        <pre>      {{ getCurrentEvent }}</pre>
      </div>

      <!-- start  -->

      <!-- ends -->
    </div>
  </div>
</template>

<script setup lang="ts">
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
import { IEvent } from "~/types/types";

const { data, pending } = useEvents();
const route = useRoute();

const eventid = computed(() => route.params.id);

const getCurrentEvent = computed(() => {
  if (data.value) {
    return data.value.filter(
      (event: IEvent) => event.id.toString() === eventid.value.toString()
    )[0];
  }
});
</script>
