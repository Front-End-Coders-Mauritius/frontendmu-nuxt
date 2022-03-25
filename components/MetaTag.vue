<template>
    <Html>
        <Head>
            <Title>{{ eventName }}</Title>
            <Meta name="description" :content="`${eventDetail}`" />
            <Meta property="og:title" content="Front-End Coders" />
            <Meta property="og:site_name" content="Front-End Coders" />
            <Meta property="og:url" content="https://front-end-coders-mauritius.netlify.app/" />
            <Meta property="og:description" content />
            <Meta property="og:type" content="website" />
            <Meta property="og:image" content="/img/meetupFEC.png" />
            <Link rel="icon" type="image/png" href="/img/favicon.png" />
        </Head>
    </Html>
</template>
<script>
export default {
    props: ['eventName', 'eventDetails'],

    computed: {
        eventDetail() {
            const eventDescript = this.eventDetails.replaceAll('<[^>]*>', '');
            return eventDescript
        }
    }
}
</script>