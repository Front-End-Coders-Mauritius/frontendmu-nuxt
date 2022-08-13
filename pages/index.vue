<!-- This example requires Tailwind CSS v2.0+ -->
<script setup lang="ts">
import HomeSocialPresence from '../components/home-social-presence.vue'
import MetaTag from '~/components/MetaTag.vue'

definePageMeta({
  layout: 'home',
  layoutTransition: {
    name: 'fade',
  },
})

onMounted(() => {
  if (!process.client)
    return
  // Initialize colors from localStorage when app loads
  document.body.setAttribute('style',
    `
        --brand-hue: ${window.localStorage.getItem('hueValue')}; 
        --brand-saturation: ${window.localStorage.getItem('saturationValue')}%; 
        --brand-lightness: ${window.localStorage.getItem('lightnessValue')}%; 
        --light-threshold: ${window.localStorage.getItem('lightThresholdValue')}%;
        `)

  document.body.setAttribute('color-scheme', window.localStorage.getItem('preffered') || 'light')
})

const title = 'Front-End Coders Mauritius'
const description
  = 'Community of Front-End developers who share their passions for the web. Events, workshops and conferences occurs regularly.'
</script>

<template>
  <meta-tag :event-name="title" :event-details="description" />

  <home-hero />

  <home-latest-meetups />

  <home-social-presence />
</template>
