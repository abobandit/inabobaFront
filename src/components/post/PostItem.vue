<script setup lang="ts">
import { toRefs } from 'vue';
import axios from 'axios';
const props = defineProps({
  post:{
    type:Object,
    required:true
  },
})
const {post} = toRefs(props)
const template = document.createElement('template')
template.innerHTML = post.value.content
</script>

<template>
  <div class="feedpost">
    <div class="logo">
      <img :src="axios.defaults.baseURL + post.user.profile_pic" alt="" width="45px" class="postlogo">
    </div>
    <div class="">
      <div class="name">
        <h4>@{{ post.user.login }}</h4>
        <p>{{ post.user.first_name }}</p>
        <div class="dots">
          <i class="fa-solid fa-ellipsis"></i>
        </div>
      </div>
      <p class="dis" v-html="post.content"></p>
      <img src="../assets/images/post.jfif" alt="" class="postimg" width="100%">
      <div class="btns">
        <div class="line"><img src="@/assets/svg/share-arrow-svgrepo-com.svg" alt="" width="20px" height="25px">
          <p>125</p>
        </div>
        <div class="line"><img src="@/assets/svg/comment-multiple-svgrepo-com.svg" alt="" width="20px" height="20px">
          <p>459</p>
        </div>
        <div class="line"><img src="@/assets/svg/notLiked.svg" alt="" width="20px" height="20px">
          <p>10.9k</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.feedpost {
  display: flex;
  margin-top: 5%;
  border-bottom: 1px solid rgb(232, 232, 232);
  padding: 20px;
  cursor: pointer;
}

.feedpost:hover {
  background-color: rgb(19, 26, 26);
  transition: 0.2s;
}

.feedpost .logo {
  margin-right: 10px;
  border-radius: 100px;
}

.feedpost .name {
  display: flex;
  font-family: sans-serif;
  width: 100%;
  position: relative;
  padding-bottom: 10px;
}

.feedpost .name .dots {
  text-align: right;
  width: auto;
  position: absolute;
  right: 0;
  top: 0;
  cursor: pointer;
}

.feedpost .name h4 {
  padding-right: 10px;
  font-family: sans-serif;
}

.feedpost .name .dis {
  font-family: sans-serif;
  padding-top: 10px;
}

.postimg {
  margin-top: 20px;
  border-radius: 25px;
}

.feedpost .btns {
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
  margin-bottom: 10px;
  cursor: pointer;
}

.feedpost .btns .line {
  display: flex;
  align-items: center;
}

.feedpost .btns .line p {
  font-family: sans-serif;
  font-size: 13px;
  padding-left: 8px;
  color: rgb(138, 137, 137);
}

.postlogo {
  border-radius: 50%;
}

video {
  border-radius: 25px;
  height: 312px;
  margin-top: 15px;
}

.hastage:hover {
  color: rgb(29, 155, 240);
  cursor: pointer;
  text-decoration: underline;
}

.hastage {
  color: rgb(29, 155, 240);
  cursor: pointer;
}


@media (max-width: 900px) {
  .feedpost .name {
    flex-direction: column;
  }
}
</style>