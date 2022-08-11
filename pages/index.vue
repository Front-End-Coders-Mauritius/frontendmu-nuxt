<!-- This example requires Tailwind CSS v2.0+ -->
<script setup lang="ts">
import HomeSocialPresence from '../components/home-social-presence.vue'
import MetaTag from '~/components/MetaTag.vue'
import sponsors from '~/components/sponsors.vue'

definePageMeta({
  layout: 'home',
  layoutTransition: {
    name: 'fade',
  },
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
