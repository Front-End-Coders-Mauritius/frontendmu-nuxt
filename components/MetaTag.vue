<template>
  <Html>
    <Head>
      <Title>{{ eventName }}</Title>
      <Meta name="description" :content="`${eventDetail}`" />
      <Meta property="og:title" :content="`${eventName}`" />
      <Meta property="og:site_name" :content="`${eventName}`" />
      <Meta property="og:url" content="https://frontend.mu/" />
      <Meta property="og:description" content />
      <Meta property="og:type" content="website" />
      <Meta property="og:image" content="/img/ogimage2.png" />
      <meta name="twitter:title" :content="`${eventName}`" />
      <meta
        name="twitter:description"
        :content="`${eventDetail}`" 
      />
      <meta
        name="twitter:image"
        content="/img/ogimage2.png"
      />
      <meta name="twitter:card" content="summary_large_image" />

      <Link rel="icon" type="image/png" href="/img/favicon.png" />
    </Head>
  </Html>
</template>
<script>
export default {
  props: ["eventName", "eventDetails"],

  computed: {
    eventDetail() {
      if (this.eventDetail) {
        const eventDescript = this.eventDetails.replace(/<\/?[^>]+>/gi, "");
        return eventDescript;
      }
      return "";
    },
  },
};
</script>
