<template>
    <div>
        <Header />
        <router-view :key="$route.params?.id" />
    </div>
</template>  

