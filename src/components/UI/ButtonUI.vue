<script setup lang="ts">

import {toRef} from "vue";
interface Props{
  title : string,
}

const props = defineProps<Props>()
</script>

<template>
  <button class="px-7 py-4 w-fit text-center font-bold rounded-full bg-[#1D9BF0FF] text-white decoration-0 ">
    {{ title }}
  </button>
</template>