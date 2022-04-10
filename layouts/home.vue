<template>
    <div>
        <router-view :key="$route.params?.id" />
    </div>
</template>
