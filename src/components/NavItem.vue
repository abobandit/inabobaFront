<script setup lang="ts">
import {ref, toRefs, watch, watchEffect} from "vue";
import router from "@/router";

const props = defineProps({
  title:{
    type:String,
    required:true
  },
  to:{
    type:Object,
    required:true
  },
  isNotLastElement: {
    type:Boolean,
    default:true
  }
})
const {to} = toRefs(props)
const activeness = ref<boolean>(false)
watchEffect(()=>{
  activeness.value = router.currentRoute.value.name === to.value.name;
})
</script>

<template>
  <li :class="{
    'mr-6':isNotLastElement}"
      class="text-white w-max h-max text-lg font-normal">
    <router-link
        :class="{
          'border-b-2 border-[#350B8C]':activeness
        }"
        class="py-7 px-1" :to="to">
      {{ title }}
    </router-link>
  </li>
</template>

<style scoped>

</style>