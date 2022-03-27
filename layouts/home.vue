<template>
    <div>
        <Transition class="page">
            <router-view :key="$route.params?.id" />
        </Transition>
    </div>
</template>
