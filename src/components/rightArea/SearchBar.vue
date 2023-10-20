<script setup lang="ts">
import {ref} from "vue";
import SearchIcon from "@/components/UI/SearchIcon.vue";
type svgornull = SVGElement | null
const searchInput = ref<HTMLInputElement | null>(null)
const searchIcon = ref<svgornull>(null)
const searchIconDisappear = (icon: svgornull) =>{
  if (icon === null) return
  if ("target" in icon) {
    console.log(icon.target)
  }else {
    console.log(icon)
  }
}

</script>
<template>
  <div class="relative ml-6 h-fit">
    <SearchIcon ref="searchIcon"
        @click="searchIconDisappear"
    />
    <input
        ref="searchInput"
        class="rounded-3xl pr-4 py-3 pl-10 w-full" type="text"
           placeholder="Search Twiter">
<!--    <div @click="searchIconDisappear(searchIcon)" class="rounded-3xl pr-4 py-3 pl-10 w-full z-10"></div>-->
  </div>
</template>
<style scoped>
input {
  border: none;
  background-color: #16181C;
  outline: none;
  cursor: pointer;
}
</style>