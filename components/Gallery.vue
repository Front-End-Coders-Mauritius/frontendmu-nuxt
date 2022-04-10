<template>
  <div>
    <client-only>
      <vue-picture-swipe :items="imagesList" :key="imagesList"></vue-picture-swipe>
    </client-only>
  </div>
</template>
<script>
import VuePictureSwipe from "vue3-picture-swipe";

export default {
  props: ["eventImages"],

  components: {
    VuePictureSwipe,
  },

  data: () => {
    return {
      myArray: [],
      count: 0,
      galleryArray: [],
    };
  },

  computed: {
    imagesList() {
      if (this.eventImages === null) {
        return [];
      }
      this.eventImages.forEach((element) => {
        this.myArray.push({
          src: element,
          thumbnail: element,
          w: 1280,
          h: 720,
        });
      });

      return this.myArray;
    },

    clear() {
      this.myArray.length = 0;
      this.count = 0;
    },
  },

  beforeUpdate() {
    this.clear;
  },
};
</script>
<style>
.my-gallery {
  @apply grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8;
}

.my-gallery figure {
  @apply block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100;
}

.pswp img {
  @apply object-contain;
}
</style>
