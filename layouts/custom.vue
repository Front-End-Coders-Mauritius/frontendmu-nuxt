<template>
    <Header />
    <router-view :key="$route.params?.id" />
</template>
