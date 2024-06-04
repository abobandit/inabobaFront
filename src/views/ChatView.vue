<script setup lang="ts">

import TextEditor from "@/components/centerArea/TextEditor.vue";
import {onMounted, onUnmounted, ref} from "vue";
import {ElScrollbar} from 'element-plus'
import {useUserStore} from "@/stores/user";
import {storeToRefs} from "pinia/dist/pinia";
import {getRequest} from "@/api/getRequest";
import router from "@/router";

const editor = ref(null)
const currentChatId = ref(router.currentRoute.value.params.chat)
const {user} = storeToRefs(useUserStore())
const messageText = ref('')
const messages = ref<object[] | null | void>([])
const scrollbar = ref<InstanceType<typeof ElScrollbar>>()

const scrollToBottom = () => {
  if (scrollbar.value && scrollbar.value.scrollTo) {
    scrollbar.value.setScrollTop(10000);
  }
}
const getMessages = async () => {
  try {
    const response = await getRequest('/allMessages/' + currentChatId.value)
    return response.data.data;
  } catch (e: any) {
    console.log(e.response.data.message);
  }
}

const sendMsg = async () => {
  if (messageText.value.length) {
    try {
      const response = await getRequest('/messages', {
        method: "POST",
        data: {
          text: messageText.value,
          chat_id: currentChatId.value
        }
      })
      console.log(response.data);
      messageText.value = ''
      return response.data
    } catch (e) {
      console.log(e.response.data);
    }
  }
}

const formatDate = () => {
  const date = new Date(messages?.value[0]?.created_at)
  const format = ` ${date.getDate()}:${date.getMonth() + 1}:${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds() > 10 ? date.getSeconds() : '0' + date.getSeconds()}`
  return format
}

const channelEvent = e => {
  messages.value?.push({
    text: e.message.text,
    user: e.user
  })
}

Echo.channel(`chat-${currentChatId.value}`)
    .listen('MessageSent', (e) => {
      setTimeout(() => {
        messageText.value = ''
      }, 1000)
      channelEvent(e)
      scrollToBottom()
    })

onMounted(async () => {
  messages.value = await getMessages()

  setTimeout(() => {
    scrollToBottom()
  }, 1000)

})

onUnmounted(() => {
  localStorage.setItem('messages', JSON.stringify(messages.value))
})
</script>

<template>
  <el-container class="el-container-main">
    <el-scrollbar
        ref="scrollbar"
        height="500px">
      <div v-if="messages?.length">
        <div
            v-for="message in messages"
            :key="message.id"
            class="message-block"
        >
          <!-- <el-icon class="el-icon">
                  <el-image fit="cover" class="el-image" :src="message.user.profile_pic"/>
                </el-icon> -->
          <el-container :class="message.user.id === user.id ? 'currentUser': ''" class="wrapper">
            <el-image fit="cover" class="el-image" :src="message.user.profile_pic"/>

            <el-container class="inner_wrapper">
              <el-container>
                <el-text class="user_login">{{ message.user.login }}</el-text>
                <el-text class="msg_date">{{ formatDate() }}</el-text>
              </el-container>
              <el-text class="msg"
                       v-html="message.text"/>

            </el-container>

          </el-container>
        </div>
      </div>

    </el-scrollbar>
    <div class="editor">
      <TextEditor ref="editor" placeholder="Напишите сообщение" v-model="messageText"/>
      <el-button type="primary" @click="sendMsg()">Отправить</el-button>
    </div>
  </el-container>


</template>

<style scoped>
.message-block{
  margin-bottom: .3rem;
}
.el-container-main {
  display: grid;
  grid-template-columns: 1fr;
}
.currentUser{
  background: #343434;
}
.editor {
  background: #1e1e1e;
  display: grid;
  grid-template-columns:10fr 1fr;
  grid-column-gap: 1rem;
}

.user_login {
  color: #04AAFF;
}

.el-image {
  border-radius: 9999px;
  height: 2.5rem;
  width: 2.5rem;
  margin-right: 1rem;
}

.msg_date {
  margin-left: 1rem;
  opacity: .8;
  font-size: .8rem;
}

.wrapper {
  display: grid;
  padding: .3rem 3rem;
  grid-template-columns: 1fr 11fr;
}

.inner_wrapper {
  display: grid;
  grid-template-rows: 1fr 2fr;
}

.msg {
  font-size: .8rem;
  color: white;
}
</style>