<template>
    <div>
        {{ events || 'loading...' }}
    </div>
</template>

<script setup>
import { Directus } from "@directus/sdk";
import { ref } from 'vue'

const URL = 'https://l4yporup.directus.app'
const directus = new Directus(URL);
const events = ref(null)

fetchData();

async function fetchData() {
    const response = await directus.items("Events").readByQuery();

    // console.log(response);
    events.value = response
}
</script>