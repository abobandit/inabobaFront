<script setup lang="ts">
import HomeIcon from "@/assets/svg/HomeIcon.vue";
import MenuItem from "@/components/UI/MenuItem.vue";
import MessageIcon from "@/assets/svg/MessageIcon.vue";
import ProfileIcon from "@/assets/svg/ProfileIcon.vue";
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
      <MenuItem link="/profile" title="Профиль">
        <ProfileIcon class="mr-[15px]"/>
      </MenuItem>
      <MenuItem link="/news" :title="'Главная страница'">
        <HomeIcon/>
      </MenuItem>
      <MenuItem link="/messenger" title="Сообщения">
        <MessageIcon/>
      </MenuItem>
      <MenuItem link="/friends" title="Друзья">
        <el-container class="icon-grid">
          <ProfileIcon class="z-10 bg-inherit"/>
          <ProfileIcon class="z-0"/>
        </el-container>
      </MenuItem>
    </el-container>

<!--    <el-button type="primary" size="large" round>Поделиться</el-button>-->
<!--    <ProfileSuggested img-src="src/assets/images/uplogo.jpg"
                      profile-id="@rai_sheheryar"
                      profile-name="Rai Sheheryar"/>
    <el-button type="primary" size="large" round
               @click="sendMessage('123')"> Поделиться </el-button>-->
<!--    <el-dropdown @command="handleCommand">
    <span class="el-dropdown-link">
      Dropdown List<el-icon class="el-icon&#45;&#45;right"><arrow-down /></el-icon>
    </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item command="a">Action 1</el-dropdown-item>
          <el-dropdown-item command="b">Action 2</el-dropdown-item>
          <el-dropdown-item command="c">Action 3</el-dropdown-item>
          <el-dropdown-item command="d" disabled>Action 4</el-dropdown-item>
          <el-dropdown-item command="e" divided>Action 5</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>-->
  </el-aside>
</template>

<style scoped>
.icon-grid{
  display:grid;
  max-width:25px;
  margin-right: 15px;
  grid-template-columns: repeat(2,10px);
}
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