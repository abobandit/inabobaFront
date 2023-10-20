<script setup lang="ts">
import {ref} from "vue";
import ButtonUI from "@/components/UI/ButtonUI.vue";
interface User{
  id:number,
  login: string,
  firstName: string,
  profileImg?: string
}
const props = defineProps<{
  user: User
}>()

</script>
<template>
  <div class="profile hover:bg-[#1F1F1FFF] py-2 px-1 rounded-2xl flex space-x-2  justify-between">
    <div class="flex space-x-1">
      <div >
        <img :src="user.profileImg" class="rounded-full cursor-pointer">
      </div>
      <div class="cursor-pointer flex flex-wrap items-center">
        <h3 class="text-[.8rem]">{{ user.firstName }}</h3>
        <p class="text-[#6D6969FF] pt-1 text-[.65rem]">{{ user.login }}</p>
      </div>
    </div>
    <el-button type="primary" round>Подписка</el-button>
  </div>
</template>
<style scoped>

.dotss {
  text-align: right;
}
img,video{
  max-width: 2rem;
}
.dotss .btn {
  background-color: #000000;
  color: #fff;
  padding: 5px 15px;
  border-radius: 25px;
  cursor: pointer;
}


</style>