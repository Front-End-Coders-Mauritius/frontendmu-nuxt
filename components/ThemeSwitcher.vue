<script setup lang="ts">
import { Menu, MenuButton, MenuItems } from '@headlessui/vue'
import type { Ref } from 'vue'
const schemes = ref(['light', 'dark', 'dim'])
const preffered = ref(process.client && (window.localStorage.getItem('preffered') || 'light'))
const hueValue: Ref<Number> = ref(process.client && (parseInt(window.localStorage.getItem('hueValue')) || 0))
const saturationValue = ref(process.client && (parseInt(window.localStorage.getItem('saturationValue')) || 90))
const lightnessValue = ref(process.client && (parseInt(window.localStorage.getItem('lightnessValue')) || 15))
const lightThresholdValue = ref(process.client && (parseInt(window.localStorage.getItem('lightThresholdValue')) || 5))

const watchHSL = computed(() => {
  return `--brand-hue:${hueValue.value}; --brand-saturation:${saturationValue.value}%; --brand-lightness:${lightnessValue.value}%; --light-threshold:${lightThresholdValue.value}%;`
})

function setColorScheme(preffered: string): any {
  if (!process.client)
    return
  document.body.setAttribute('color-scheme', preffered)
}

setColorScheme(preffered.value)

function reset() {
  hueValue.value = 0
  lightThresholdValue.value = 0
}

watch(preffered, (n) => {
  if (!process.client)
    return
  window.localStorage.setItem('preffered', `${preffered.value}`)
  setColorScheme(n)
})

const { x, y } = useMouse()
const maxWidth = process.client ? window.innerWidth : 0
const huePointer = computed(() => {
  const rez = Math.round(x.value / maxWidth * 360)
  hueValue.value = rez
  return rez
})

watch(watchHSL, (n) => {
  if (!process.client)
    return
  document.body.setAttribute('style', `${n}`)

  window.localStorage.setItem('hueValue', `${hueValue.value}`)
  window.localStorage.setItem('saturationValue', `${saturationValue.value}`)
  window.localStorage.setItem('lightnessValue', `${lightnessValue.value}`)
  window.localStorage.setItem('lightThresholdValue', `${lightThresholdValue.value}`)
}, { immediate: true })
</script>

<template>
  <div class="bg-black sr-only">
    <Menu as="div" class="ml-3 relative w-auto">
      <div>
        <MenuButton
          class="bg-brand-50 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 "
        >
          <span>Toggle Theme Switcher {{ huePointer }}</span>

        </MenuButton>
      </div>
      <transition
        enter-active-class="transition ease-out duration-200"
        enter-from-class="transform opacity-0 scale-95"
        enter-to-class="transform opacity-100 scale-100"
        leave-active-class="transition ease-in duration-75"
        leave-from-class="transform opacity-100 scale-100"
        leave-to-class="transform opacity-0 scale-95"
      >
        <MenuItems
          class="origin-top-right absolute z-10 right-0 mt-2 p-4 rounded-md shadow-lg border border-brand-300 bg-brand-50 ring-1 ring-black ring-opacity-5 focus:outline-none flex flex-col gap-4"
        >
          <div class="flex gap-4">
            <div v-for="color in schemes" :key="color" class="flex gap-1 items-center font-medium">
              <input
                :id="color"
                v-model="preffered"
                type="radio"
                :value="color"
                class="hidden peer"
              >
              <label
                :for="color"
                class="cursor-pointer p-1 px-2 text-verse-900 text-sm rounded-md border peer-checked:border-brand-500 peer-checked:bg-brand-200"
              >{{ color }}</label>
            </div>
          </div>
          <div class="flex flex-col gap-2">
            <input v-model="hueValue" type="range" class="w-full" :min="0" :max="359" :step="1">

            <input
              v-show="preffered === 'light'"
              v-model="lightThresholdValue"
              type="range"
              class="w-full"
              :min="0"
              :max="40"
              :step="1"
            >

            <input
              v-show="preffered === 'dark'"
              type="range"
              class="w-full"
              :min="25"
              :max="35"
              :step="1"
              title="dark threshold"
            >
          </div>
          <div class="flex justify-center">
            <art-button class="text-center" @click="reset">Reset</art-button>
          </div>
        </MenuItems>
      </transition>
    </Menu>
  </div>
</template>

