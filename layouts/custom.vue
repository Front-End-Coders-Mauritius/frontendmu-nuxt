<template>
  <div class="md:hover:first-letter:color-red-500">
    <Header />
    <router-view :key="$route.params?.id" />
    <site-footer />
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
