<template>
    <Html>
        <Head>
            <Title>{{ eventName }}</Title>
            <Meta name="description" :content="`${eventDetails}`" />
            <Meta property="og:title" content="Front-End Coders" />
            <!-- <Meta property="og:site_name" content="Front-End Coders" />
            <Meta property="og:url" content="https://front-end-coders-mauritius.netlify.app/" />
            <Meta property="og:description" content />
            <Meta property="og:type" content="website" />
            <Meta property="og:image" content="https://picsum.photos/200/300" />
            <Link rel="icon" type="image/png" href="/img/favicon.png" />-->
        </Head>
    </Html>
</template>
<script>
export default {
    props: ['eventName', 'eventDetails']
}
</script>