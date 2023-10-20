<script setup lang="ts">

import router from "@/router";
</script>

<template>
  <div class="arrowBack" @click="router.go(-1)">
    <svg width="26" height="22" viewBox="0 0 26 22" fill="white" xmlns="http://www.w3.org/2000/svg">
      <path d="M26 9.61111V12.3889H6.30303L15.3308 20.0278L13 22L0 11L13 0L15.3308 1.97222L6.30303 9.61111H26Z" fill="#04AAFF"/>
    </svg>
  </div>
</template>

<style scoped>
.arrowBack{
  width: fit-content;
}
</style>