<script setup lang="ts">
import ProfileItem from "@/components/rightArea/ProfileItem.vue";
import {ref} from "vue";
const users = ref([
  {
    id:1,
    login:"AlphaGrowth",
    firstName:"@AlphaGrowth",
    profileImg:"src/assets/images/alpha.jpg",
  },
  {
    id:2,
    login:"AlphaGrowth",
    firstName:"@AlphaGrowth",
    profileImg:"src/assets/images/alpha.jpg",
  },
  {
    id:3,
    login:"AlphaGrowth",
    firstName:"@AlphaGrowth",
    profileImg:"src/assets/images/alpha.jpg",
  },
  {
    id:4,
    login:"AlphaGrowth",
    firstName:"@AlphaGrowth",
    profileImg:"src/assets/images/alpha.jpg",
  },
  {
    id:5,
    login:"AlphaGrowth",
    firstName:"@AlphaGrowth",
    profileImg:"src/assets/images/alpha.jpg",
  },
])

</script>
<template>
  <div class="trand px-3 py-3 space-y-3 bg-[#16181CFF] rounded-2xl ml-4">
    <h2 class="text-[1.3rem] font-bold pt-2">Who to follow</h2>
    <ProfileItem
        v-for="user in users"
        :key="user.id"
        :user="user"  />
    <el-button type="primary" round>Найти еще</el-button>
  </div>
</template>
<style scoped>

h2 {
  font-family: sans-serif;
}
</style>