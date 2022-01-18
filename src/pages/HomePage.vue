<template>
  <div>
    <img :src="image.img" class="img-fluid" alt="" />
    <form @submit="getImage">
      <input type="date" v-model="datestr" />
      <button>Get image</button>
    </form>
  </div>
</template>

<script>
import { computed, ref } from "@vue/reactivity";
import { AppState } from "../AppState";
import { imageService } from "../services/ImageService";
export default {
  setup() {
    const datestr = ref("");
    return {
      getImage() {
        imageService.nasaApod(datestr.value);
      },
      datestr,
      date: computed(() => AppState.Apod),
      image: computed(() => AppState.Apod),
    };
  },
};
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;
  .home-card {
    width: 50vw;
    > img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
