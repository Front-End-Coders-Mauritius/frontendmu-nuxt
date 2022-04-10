<template>
    <div class="md:hover:first-letter:color-red-500">
        <Header />
        <router-view :key="$route.params?.id" />
    </div>
</template>