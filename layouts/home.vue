<template>
  <div>
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <div>
          <component :is="Component" />
        </div>
      </transition>
    </router-view>
    <sponsors />
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
