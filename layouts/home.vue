<template>
  <div>
    <router-view :key="$route.params?.id" />
    <sponsors backgroundColor="bg-white" />
  </div>
</template>
