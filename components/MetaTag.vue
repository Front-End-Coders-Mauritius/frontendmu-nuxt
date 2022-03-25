<template>
    <Html>
        <Head>
            <Title>{{ eventName }}</Title>
            <Meta name="description" :content="`${eventDetails}`" />
            <Link rel="icon" type="image/png" href="/img/favicon.png" />
        </Head>
    </Html>
</template>
<script>
export default {
    props: ['eventName', 'eventDetails']
}
</script>