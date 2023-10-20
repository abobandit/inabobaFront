<script setup lang="ts">
import {toRefs} from "vue";
interface Props {
  profileId:string,
  profileName:string
  imgSrc: string
}

const props = defineProps<Props>()

</script>

<template>
  <div class="profile">
    <div class="">
      <img :src="imgSrc" class="whoimg"></div>
    <div class="">
      <h3>{{ profileName }}</h3>
      <p>{{ profileId }}</p>
    </div>
    <div class="dots"><i class="fa-solid fa-ellipsis"></i></div>
  </div>
</template>

<style scoped>
.profile {
  display: flex;
  margin-top: 10%;
  cursor: pointer;
  width: 96%;
}

.profile .dots .fa-ellipsis {
  color: rgb(135, 135, 135);
  width: 60px;
  text-align: center;
}

.profile img {
  margin-right: 10px;
  border-radius: 50%;
}

.profile h3 {
  font-family: sans-serif;
  font-size: 15px;
  width: 118px;
}

.profile p {
  font-family: sans-serif;
  font-size: 13px;
  color: rgb(109, 105, 105);
  padding-top: 3px;
}

.profile .dots .fa-ellipsis {
  color: rgb(135, 135, 135);
  width: 60px;
  text-align: center;
}

.whoimg {
  border-radius: 50%;
  width: 2rem;
}

</style>