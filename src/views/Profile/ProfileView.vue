<script setup lang="ts">
import ProfileHeader from "@/views/Profile/ProfileHeader.vue";
import {onMounted, ref} from 'vue'
import type { TabsPaneContext } from 'element-plus'
import AlbumTab from "@/components/centerArea/Albums/AlbumTab.vue";
import PostItem from "@/components/post/PostItem.vue";
import {getRequest} from "@/api/getRequest";

const activeTab = ref('first')

const posts = ref([])
onMounted(()=>{
  getPostsOfUser()
})
const getPostsOfUser = async () =>{
  const response = await getRequest('/usersPosts')
  posts.value = response.data.data
  return response.data
}
// const handleClick = (tab: TabsPaneContext, event: Event) => {
//   console.log(tab, event)
// }
</script>

<template>
<div class="w-full">
  <ProfileHeader/>
  <el-tabs v-model="activeTab" class="demo-tabs " >
    <el-tab-pane  class="text-white" label="Посты" name="first">
      <div v-if="posts?.length">
        <PostItem v-for="post in posts" :key="post.id" :post="post"/>
      </div>
    </el-tab-pane>
    <el-tab-pane label="Ответы к постам" name="second">
      Config
    </el-tab-pane>
    <el-tab-pane label="Альбомы" name="third">
      <AlbumTab/>
    </el-tab-pane>
    <el-tab-pane label="Лайки" name="fourth">
      Task
    </el-tab-pane>
  </el-tabs>
</div>
</template>

<style scoped>
.demo-tabs>{

}
</style>
<style>
.el-tabs__item{
  color:white;
}
.el-tabs__nav{
  display: grid;
  grid-template-columns: repeat(4,1fr);
}
</style>