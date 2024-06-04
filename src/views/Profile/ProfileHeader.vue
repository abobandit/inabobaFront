<script setup lang="ts">

import {storeToRefs} from "pinia";
import {useUserStore} from "@/stores/user";
import {ref} from "vue";
import ChangePhoto from "@/views/Profile/ChangePhoto.vue";
const userStore = useUserStore()
const {user} = storeToRefs(userStore)
const showBtnState = ref(false)

const showBtnOpenModal = () => {
  showBtnState.value = true
}
const hideBtnOpenModal = () => {
  showBtnState.value = false
}
const displayFullName = (firstName: string, lastName: string): string => {
  if(firstName[0] === firstName[0].toUpperCase() && lastName[0] === lastName[0].toUpperCase()){
    return `${firstName} ${lastName}`
  }else{
    const firstNameChars = [...firstName]
    const lastNameChars = [...lastName]
    firstNameChars[0] = firstNameChars[0].toUpperCase()
    lastNameChars[0] = lastNameChars[0].toUpperCase()
    firstName = firstNameChars.join('')
    lastName = firstNameChars.join('')
  }
  return `${firstName} ${lastName}`

}
</script>

<template>
  <div>
    <el-row>
      <el-col :span="5">
        <div :class="showBtnState ? 'photo' : ''"
             @mouseleave="hideBtnOpenModal"
             @mouseenter="showBtnOpenModal">
          <ChangePhoto>
            <el-image class="profile-pic" v-if="user.profile_pic" :src="user.profile_pic"/>
            <el-skeleton class="el-skeleton" v-else>
              <template #template>
                <el-skeleton-item  class="profile-pic" variant="image"/>
              </template>
            </el-skeleton>
          </ChangePhoto>
        </div>
      </el-col>
      <el-col :span="12" class="p-1 font-bold item-bottom">
        <el-text>{{ displayFullName(user.first_name, user.last_name) }}</el-text>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
.item-bottom{
  display:flex;
  align-items:end;
  text-align: left;
  width:fit-content;
}
.photo{
  filter: contrast(80%);
  cursor: pointer;
}
.profile-pic{
  border-radius: 9999px;
  width: 6rem;
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
</style>