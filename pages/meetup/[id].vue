<script setup lang="ts">
import type { IEvent } from '~/types/types'

definePageMeta({
  layout: 'custom',
  scrollToTop: true,
  layoutTransition: {
    name: 'fade',
  },
})

const { data, pending } = useEvents()
const route = useRoute()

const eventid = computed(() => route.params.id)

const getCurrentEvent = computed(() => {
  if (data.value) {
    return data.value.filter(
      (event: IEvent) => event.id.toString() === eventid.value.toString(),
    )[0]
  }
})
</script>

<template>
  <MetaTag
    :event-name="getCurrentEvent?.title"
    :event-details="getCurrentEvent?.description"
  />
  <Meetup
    :key="getCurrentEvent.id"
    :get-current-event="getCurrentEvent"
    :data="data"
    :pending="pending"
  />
</template>
