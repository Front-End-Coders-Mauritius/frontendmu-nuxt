<template>
    <div class="grid grid-cols-4 ">
        <a href="https://discord.gg/WxXW9Jvv6k"
            class="social-card bg-[#5865f2] hover:opacity-90 cursor-pointer transition-all duration-200">
            <div class="flex flex-col gap-4 items-center text-2xl font-bold text-white ">
                <icon-discord class="w-[40%]" />
                <!-- <div class="">discord</div> -->
            </div>
        </a>

        <a href="https://www.facebook.com/groups/frontendcodersmu"
            class="social-card bg-[#4267B2] hover:opacity-90 cursor-pointer transition-all duration-200">
            <div class="flex flex-col gap-4 items-center text-2xl font-bold text-white ">
                <icon-facebook-group class="w-[40%]" />
                <!-- <div class="">facebook</div> -->
            </div>
        </a>

        <a href="https://www.linkedin.com/company/81846464/admin/"
            class="social-card bg-[#007db1] hover:opacity-90 cursor-pointer transition-all duration-200">
            <div class="flex flex-col gap-4 items-center text-2xl font-bold text-white ">
                <icon-linkedin class="w-[40%]" />
                <!-- <div class="">linkedin</div> -->
            </div>
        </a>

        <a href="https://github.com/Front-End-Coders-Mauritius"
            class="social-card bg-[#333] hover:opacity-90 cursor-pointer transition-all duration-200">
            <div class="flex flex-col gap-4 items-center text-2xl font-bold text-white ">
                <icon-github class="w-[40%]" />
                <!-- <div class="[#000]">github</div> -->
            </div>
        </a>
    </div>
</template>

<style>
.social-card {
    @apply grid place-items-center aspect-square;
}
</style>