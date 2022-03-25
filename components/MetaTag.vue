<template>
    <Html>
        <Head>
            <Title>{{ eventName }}</Title>
            <Meta name="description" :content="`${eventDetails}`" />
            <Meta property="og:title" content="Front-end Coder Mauritius" />
            <Meta property="og:type" content="Meetups" />
            <Meta property="og:url" content="https://front-end-coders-mauritius.netlify.app/" />
            <Meta property="og:image" content="/img/meetupFEC.png" />
            <Link rel="icon" type="image/png" href="/img/favicon.png" />
        </Head>
    </Html>
</template>
<script>
export default {
    props: ['eventName', 'eventDetails']
}
</script>