<template>
  <div class="bg-gray-900">
    <div
      class="max-w-6xl mx-auto py-24 grid gap-8 grid-rows-4 grid-cols-0 md:grid-cols-2 md:grid-rows-none px-8 md:px-4"
    >
      <social-card
        href="https://discord.gg/WxXW9Jvv6k"
        class="bg-[#5865f2] text-sm md:text-normal"
      >
        <template #tagline>Discord</template>
        <template #description
          >Join the community, ask questions, livestream, chill!
        </template>
        <template #icon>
          <icon-discord class="w-14 md:w-16" />
        </template>
      </social-card>

      <social-card
        href="https://github.com/Front-End-Coders-Mauritius"
        class="bg-[#333] text-sm md:text-normal"
      >
        <template #tagline>GitHub</template>
        <template #description>The home of FEC projects</template>
        <template #icon>
          <icon-github class="w-12 md:w-16" />
        </template>
      </social-card>

      <social-card
        href="https://www.facebook.com/groups/frontendcodersmu"
        class="bg-[#4267B2] text-sm md:text-normal"
      >
        <template #tagline>Facebook Group</template>
        <template #description>Our legacy presence on Facebook.</template>
        <template #icon>
          <icon-facebook-group class="w-14 md:w-16 p-2" />
        </template>
      </social-card>

      <social-card
        href="https://www.linkedin.com/company/81846464/admin/"
        class="bg-[#007db1] text-sm md:text-normal"
      >
        <template #tagline>LinkedIn Page</template>
        <template #description
          >For those who don't use facebook and discord
        </template>
        <template #icon>
          <icon-linkedin class="w-14 md:w-16" />
        </template>
      </social-card>
    </div>
  </div>
</template>

<style></style>
