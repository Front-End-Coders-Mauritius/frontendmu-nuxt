<template>
  <div>
    <client-only>
      <Splide :options="{ rewind: true }" aria-label="My Favorite Images">
          <SplideSlide v-for="item in galleryList" :key="item">
            <img :src="item" alt="images">
          </SplideSlide>
      </Splide>
    </client-only>
  </div>
</template>
<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';

export default {
  props: ["eventImages"],

  components: {
    Splide,
    SplideSlide,
  },

  data: () => {
    return {
      myArray: [],
      count: 0,
      galleryArray: [],
    };
  },

  computed: {
    galleryList() {
      if (this.eventImages === null) {
        return [];
      }
      this.eventImages.forEach((element) => {
        this.myArray.push(
          `https://l4yporup.directus.app/assets/${element.directus_files_id}`,
        );
      });

      return this.myArray;
    },

    imagesList() {
      if (this.eventImages === null) {
        return [];
      }
      this.eventImages.forEach((element) => {
        this.myArray.push(
           element.imagename,
        );
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
.splide {
  @apply mx-auto  w-[80%] h-[70%];
}

.splide__slide{
@apply flex justify-center items-center;
}

img {
  @apply rounded-3xl lg:rounded-[3.5rem] max-h-[300px] lg:max-h-[700px];
}
</style>