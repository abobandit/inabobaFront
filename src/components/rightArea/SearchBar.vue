<script setup lang="ts">
import {ref} from "vue";
import {getRequest} from "@/api/getRequest";

type svgornull = SVGElement | null
const searchInput = ref<HTMLInputElement | null>(null)
const users = ref([])
const searchValue = ref('')

const addToFriend = async (userId:number)=>{
  try {
    const response = await getRequest('/friends',{
      method:"POST",
      data:{
        friend_id:userId
      }
    })
    console.log(response.data)
    return response.data
  }catch (e:any ){
    console.log(e.response.data.message)
  }
}
const searchUsers = async() =>{
  try{
    if (searchValue.value.length){
      const response = await getRequest(`/searchusers/${searchValue.value}`)
      return response.data.data
    }else{
      return false
    }

  }catch (e:any ) {
    console.log(e.response.data.message)
  }
}
function debounce(func:Function, delay:string|number) {
  let timerId: number;

  return function(...args:any) {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      func.apply(this, args);
    }, +delay);
  };
}
const assignUserSearched = async () =>{
  users.value = await searchUsers()
}
const debouncedSearch = debounce(assignUserSearched, 300)
/*const searchIcon = ref<svgornull>(null)
const searchIconDisappear = (icon: svgornull) =>{
  if (icon === null) return
  if ("target" in icon) {
    console.log(icon.target)
  }else {
    console.log(icon)
  }
}*/

</script>
<template>
  <div class="relative ml-6 h-fit">
<!--    <SearchIcon ref="searchIcon"-->
<!--        @click="searchIconDisappear"-->
<!--    />-->
    <input
        @input="debouncedSearch"
        v-model="searchValue"
        ref="searchInput"
        class="rounded-3xl pr-4 py-3 pl-10 w-full" type="text"
           placeholder="Искать пользователей">
    <div v-if="users.length" class="foundUsers">
      <div class="suggestions"
           v-for="user in users"
           :key="user.id"
      >
        {{user.first_name}}
        {{user.last_name}}
        <el-button
            type="primary"
            round
            @click="addToFriend(user.id)"
        >Добавить</el-button>
      </div>
    </div>
<!--    <div @click="searchIconDisappear(searchIcon)" class="rounded-3xl pr-4 py-3 pl-10 w-full z-10"></div>-->
  </div>
</template>
<style scoped>
input {
  border: none;
  background-color: #16181C;
  outline: none;
  cursor: pointer;
}
.foundUsers{
  display:flex;
  flex-direction: column;
}
.suggestions{
  background: #1e1e1e;
  padding:.3rem .5rem;
}
</style>