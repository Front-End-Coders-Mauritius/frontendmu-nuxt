<template>
    <div>
        {{ events || 'loading...' }}
    </div>
</template>

<script setup>

const { getItems } = useDirectusItems();
const events = await getItems({ collection: "Events" });

</script>

