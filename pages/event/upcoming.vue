<template>
  <div v-if="!pending">
    {{ data }}
  </div>
  <div v-else>loading...</div>
</template>

<script setup>
// const { getItems } = useDirectusItems();
// const events = await getItems({ collection: "Events" });

const { data, pending, error, refresh } = await useAsyncData("events", () =>
  $fetch("https://l4yporup.directus.app/items/Events")
);
</script>
