<script setup lang="ts">
// console.log('я дошел сюда')
import {onMounted, ref, shallowRef} from "vue";
import type {UsersArray} from "@/types/UserType";
import {getRequest} from "@/api/getUsers";


const focusTextEditor = ref(false)
const textEditor = ref(null)
const searchIcon = ref(null)
const searchUserText = ref('')
const users: UsersArray = shallowRef([])
const chats = ref()
const lastMessage = shallowRef([])

const updateContent = (newContent: string) => {
  searchUserText.value = newContent
  console.log(textEditor.value)
}
const test = (e) => {
  console.log(e)
}
const getUserList = async () => {
  try {
    const response = await getRequest({url: '/users'})
    return response.data.data
  } catch (e: any) {
    console.error(e.message)
  }

}
const getChatList = async () => {
  try {
    const response = await getRequest({url: '/chatss'})
    return response.data.data
  } catch (e: any) {
    console.error(e.message)
  }
}
const assignValues = async ()=>{
  chats.value = await getChatList()
  // lastMessage.value = await getLastMessage(1)
  // console.log(lastMessage.value)
  console.log(chats.value)
}
onMounted(async()=>{
  chats.value = await getChatList()
  console.log(chats.value)

})
</script>

<template>
  <el-container class="el-container_msg">
<!--    <el-container>
      <SearchIcon ref="searchIcon" v-if="!focusTextEditor && !searchUserText.length" class="absolute"/>
      <InputUI @focusout="focusTextEditor = false"
               @focusin="focusTextEditor = true"
               ref="textEditor"
               class="bg-inherit hover:bg-inherit active:bg-inherit focus:bg-inherit"
               v-model="searchUserText"/>
    </el-container> -->
    <template v-if="focusTextEditor && users.length">
      <el-container
          v-for="user in users"
          :key="user.id"
          class="user-dialog-list">
        <RouterLink :to="{
      name:'chat',
      params:{
      chat:1
      }
      }">
          <el-icon class="el-icon">
            <el-image fit="cover" class="el-image" :src="user.profile_pic"/>
          </el-icon>
          <el-container class="wrapper">
            <el-text class="user_login">{{ user.login }}</el-text>
            <el-container>
              <el-image fit="cover" class="el-image-preview" :src="user.profile_pic"/>
              <el-text class="msg-preview"></el-text>
            </el-container>
          </el-container>
        </RouterLink>
      </el-container>
    </template>
    <template v-else-if="focusTextEditor && !users.length">
      <el-text>У вас нет друзей</el-text>
    </template>
    <template v-if="chats?.length">
      <el-container
          v-for=" chat in chats"
          :key="chat.id"
          class="user-dialog-list">
        <RouterLink :to="{
      name:'chat',
      params:{
      chat:chat.id
      }
      }">
          <el-icon class="el-icon">
            <el-image fit="cover" class="el-image" :src="chat.users[0].profile_pic"/>
          </el-icon>
          <el-container class="wrapper">
            <el-text v-if="chat.isPrivate" class="user_login">{{ chat.users[0].login }}</el-text>
            <el-text v-else class="user_login">{{ chat.users[0].login }}</el-text>
          </el-container>
        </RouterLink>
      </el-container>
    </template>

  </el-container>
</template>

<style scoped>
.el-container_msg {
  padding: 1rem 2rem;
  flex-direction: column;
}

.user-dialog-list > * {
  display: grid;
  margin-bottom: 1rem;
  grid-template-columns: 1fr 7fr;
  grid-template-rows:1fr;
}

.user-dialog-list > * > * {
  margin-right: 1rem;
}

.user_login {
  color: white;
}

.el-icon {
  height: 3rem;
  width: 3rem;
}

.el-image {
  border-radius: 9999px;
  height: 100%;
  width: 100%;
}

.el-image-preview {
  width: 1.5rem;
  height: 1.5rem;
  margin-right: .5rem;
}

.wrapper {
  display: grid;
  grid-template-columns: 1fr;
}

.wrapper > * {
  width: fit-content;
}

.msg-preview {
  font-size: .8rem;
}
</style>