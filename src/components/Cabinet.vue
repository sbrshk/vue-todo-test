<script setup>
import {useFetch} from "../composables/useFetch";
import {useRandom} from "../composables/useRandom";
import {computed, ref} from "vue";
import Button from "./ui/Button.vue";

const { randomizeInt } = useRandom();

const photoId = ref(randomizeInt(250));
const photoUrl = computed(() => `https://jsonplaceholder.typicode.com/photos/${photoId.value}`)
const {data, error, refetch} = useFetch(photoUrl);

const updatePhotoId = () => {
  photoId.value = randomizeInt(250);
  refetch();
}
</script>

<template>
<h1>Cabinet</h1>
  <h3>Ooops, sorry, no cabinet there. Just a lazy-loaded component 😴</h3>
  <p>Here's a picture loaded with a composable from jsonplaceholder:</p>
  <div class="photoWrapper">
    <div v-if="data">
      <img
          :src="data.url"
          alt="cabinet picture"
          class="photoContainer" />
      <Button
          @click="updatePhotoId"
          kind="secondary"
          title="Update picture"
          size="large"
      />
    </div>
    <div class="error" v-if="error">{{error}}</div>
    <div class="loader" v-if="!data && !error">Loading...</div>
  </div>
</template>

<style scoped>
.photoWrapper {
  height: 600px;
}

.photoContainer {
  min-height: 600px;
}

.error {
  color: red;
}

.loader {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 600px;
  z-index: 100;
}
</style>
