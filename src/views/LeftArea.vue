<script setup lang="ts">
import HomeIcon from "@/assets/svg/HomeIcon.vue";
import MenuItem from "@/components/UI/MenuItem.vue";
import MessageIcon from "@/assets/svg/MessageIcon.vue";
import ProfileIcon from "@/assets/svg/ProfileIcon.vue";
import ButtonUI from "@/components/UI/ButtonUI.vue";
import ProfileSuggested from "@/components/leftArea/ProfileSuggested.vue";
import {onBeforeMount, onMounted} from "vue";
import Echo from "laravel-echo";
import axios from "axios";


const sendMessage = async (message:string):JSON =>{
    const response = axios.post()

}
const bodyRequest = {
  first_name: "aboa",
  last_name: "babab",
  login: "aboba",
  email: "abob1a@gmail.com",
  password: 123
}
</script>

<template>
  <el-aside class="leftarea ">
    <el-container class="el-container">
      <MenuItem link="/news" :title="'Главная страница'">
        <HomeIcon/>
      </MenuItem>
      <MenuItem link="/messenger" title="Сообщения">
        <MessageIcon/>
      </MenuItem>
      <MenuItem link="/profile" title="Профиль">
        <ProfileIcon/>
      </MenuItem>
    </el-container>

<!--    <el-button type="primary" size="large" round>Поделиться</el-button>-->
    <ProfileSuggested img-src="src/assets/images/uplogo.jpg"
                      profile-id="@rai_sheheryar"
                      profile-name="Rai Sheheryar"/>
    <el-button type="primary" size="large" round
               @click="sendMessage('123')"> Поделиться </el-button>
  </el-aside>
</template>

<style scoped>
.leftarea{
  width: fit-content;
  position:sticky;
  top:20px;
  height:fit-content;
  padding: 2rem;
}
.el-container{
  flex-direction: column;

}
.leftarea > *{
  margin-bottom: 1rem;
}


</style>