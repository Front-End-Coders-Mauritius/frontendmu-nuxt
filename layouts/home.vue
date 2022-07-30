<template>
  <div>
    <router-view :key="$route.params?.id" />
    <sponsors />
    <site-footer />
  </div>
</template>
