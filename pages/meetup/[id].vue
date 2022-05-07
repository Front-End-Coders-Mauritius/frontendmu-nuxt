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

// to get past or upcoming value base in Date
const dateInPast = function (firstDate, secondDate) {
  if (firstDate.setHours(0, 0, 0, 0) <= secondDate.setHours(0, 0, 0, 0)) {
    return true;
  }
  return false;
};

let past = new Date("2027-05-20");
const today = new Date();
const verifyValue = dateInPast(past, today);

const verifyDate = computed(() => {
  if (verifyValue) {
    return "past";
  } else {
    return "upcoming";
  }
});
</script>
