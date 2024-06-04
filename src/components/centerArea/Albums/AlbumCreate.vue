<script setup lang="ts">

import {Plus} from "@element-plus/icons-vue";
import TextElement from "@/components/UI/TextElement.vue";
import {getRequest as postRequest} from "@/api/getRequest";
import {ref} from "vue";
const isLoading = ref(false)
const emits = defineEmits(['createAlbum'])
const createAlbum = async () => {
  if (!isLoading.value){
    isLoading.value = true
    const response = await postRequest('/albums',{
      method: "POST"
    })
    if (response.status){
      emits('createAlbum', response.album)
    }
    isLoading.value = false
    return response
  }

}
const decreaseScale = e =>{
  e.target.closest('.el-container').style.scale = '90%'
}

const increaseScale = e =>{
  e.target.closest('.el-container').style.scale = '100%'
}

const changeColor = (e) =>{
  e.target.closest('.el-container').style.scale = '100%'
  for(let item of  e.target.children){
    if(item.innerText) item.style.color= '#409EFF'
    if(!item.innerText) {
      item.style.filter = 'brightness(0) saturate(100%)'
      item.style.filter += ' invert(46%) sepia(99%) saturate(675%) hue-rotate(186deg) brightness(101%) contrast(101%)'
    }
  }
}
const revertColor = e =>{
  e.target.closest('.el-container').style.scale = '100%'
  for(let item of  e.target.children){
    if(item.innerText) item.style.color= '#FFFFFF'
    if(!item.innerText) {
      item.style.filter = 'brightness(0) saturate(100%)'
      item.style.filter += ' invert(99%) sepia(2%) saturate(14%) hue-rotate(71deg) brightness(106%) contrast(98%)'
    }
  }
}
</script>

<template>
  <el-container @click="createAlbum"
                @mouseup.stop.passive="increaseScale"
                @mousedown.stop.passive="decreaseScale"
                @mouseleave.capture="revertColor"
                @mouseenter.capture="changeColor" class="w-fit">
    <el-icon><Plus /></el-icon>
  </el-container>

</template>

<style scoped>

</style>