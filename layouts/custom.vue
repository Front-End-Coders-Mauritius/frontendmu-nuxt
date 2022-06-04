<template>
  <div class="md:hover:first-letter:color-red-500">
    <Header />
    <router-view :key="$route.params?.id" />
    <sponsors backgroundColor="bg-gray-50" />
  </div>
</template>
