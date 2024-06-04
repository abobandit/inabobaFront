<script setup lang="ts">
import {onMounted, ref} from "vue";
import {getRequest} from "@/api/getRequest";

const friends = ref([])
const unAcceptedFriends = ref([])
const getUncceptedFriends = async()=>{
  try{
    const response = await getRequest('/pendingFriends')
    console.log(response.data)
    return response.data.data
  }catch (e:any) {
    console.log(e.response.data.message)
  }
}
const addToFriend = async(friendId:number)=>{
  try{
    const response = await getRequest('/friends/'+friendId+'/accepted',{
      method:"PATCH",
    })
    console.log(response.data)
    unAcceptedFriends.value.filter(friend => {
      console.log(friend.id)
      return friend.id !== friendId
    })
    return response.data.data
  }catch (e:any) {
    console.log(e.response.data.message)
  }
}
const getFriends = async()=>{
  try{
    const response = await getRequest('/friends')
    console.log(response.data)
    return response.data.data
  }catch (e:any ) {
    console.log(e.response.data.message)
  }
}
onMounted(async()=>{
  friends.value = await getFriends()
  unAcceptedFriends.value = await  getUncceptedFriends()
})
</script>

<template>
<div>
  <el-container class="el-container">
    <div
        v-if="friends.length"
    >
      <el-text>Ваши друзья</el-text>
      <el-container
          v-for="friend in friends"
          class="friend-container">
        {{friend.friend.first_name}}
        {{friend.friend.last_name}}
      </el-container>
    </div>

    <div
        v-if="unAcceptedFriends.length"
    >
      <el-text>Непринятые заявки</el-text>

      <el-container
          v-for="friend in unAcceptedFriends"
          :key="friend.id"
          class="friend-container"
      >
        <el-image class="el-image" :src="friend.friend.profile_pic"></el-image>
        {{friend.friend.first_name}}
        {{friend.friend.last_name}}
        <el-button @click="addToFriend(friend.id)" type="primary" round>Добавить</el-button>
      </el-container>
    </div>


  </el-container>
</div>
</template>

<style scoped>
.friend-container{
  padding: .5rem 1rem;
}
.el-image{
  border-radius: 999px;
  width: 1.5rem;
  margin-right: 1rem;
  height: 1.5rem;
}
</style>