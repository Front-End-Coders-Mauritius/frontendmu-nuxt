<template>
  <Meetup
    :getCurrentEvent="getCurrentEvent"
    :data="data"
    :pending="pending"
    :key="getCurrentEvent.id"
  />
</template>

<script setup lang="ts">
import { IEvent } from "~/types/types";

definePageMeta({
  layout: "custom",
});

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
