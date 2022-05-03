<template>
  <div>
    <div v-if="pending">loading...</div>
    <div v-else>
      <!-- {{ data }} -->

      <div class="prose">
        <pre>      {{ getCurrentEvent }}</pre>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IEvent } from "~/types/types";
const { data, pending } = useEvents();

const id = ref(19);

const getCurrentEvent = computed(() => {
  if (data.value) {
    return data.value.filter(
      (event: IEvent) => event.id.toString() === id.value.toString()
    )[0];
  }
});
</script>
