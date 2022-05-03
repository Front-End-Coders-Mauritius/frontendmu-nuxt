<template>
  <div>
    <div v-if="pending">loading...</div>
    <div v-else>{{ data }}</div>
  </div>
</template>

<script setup>
const { data, pending } = useEvents();
</script>
