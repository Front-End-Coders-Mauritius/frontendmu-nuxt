<template>
  <a
    class="social-card  hover:opacity-90 cursor-pointer transition-all duration-200 py-8"
  >
    <div class="flex gap-4 items-center  text-white ">

      <slot name="icon" />
      <div>
        <div class="text-2xl font-bold">

          <slot name="tagline" />
        </div>
        <p>
          <slot name="description" />
        </p>
      </div>
    </div>
  </a>
</template>

<style>
.social-card {
    @apply flex p-4 rounded-xl shadow-xl ;
}
</style>
