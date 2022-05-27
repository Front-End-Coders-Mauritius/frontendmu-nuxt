<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <meta-tag :eventName="title"
    :eventDetails="description" />

  <home-hero />

  <home-social-presence />

  <home-latest-meetups />

</template>

<script setup lang="ts">

import MetaTag from "~/components/MetaTag.vue";
import HomeSocialPresence from "../components/home-social-presence.vue";
definePageMeta({
  layout: "home",
  transition: {
    name: "index",
  },
});

const title = "Front-End Coders Mauritius";
const description =
  "Community of Front-End developers who share their passions for the web. Events, workshops and conferences occurs regularly.";

</script>
