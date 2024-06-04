<script setup lang="ts">
import {getRequest} from "@/api/getRequest";
import {onMounted, ref} from "vue";
import AlbumCreate from "@/components/centerArea/Albums/AlbumCreate.vue";
import TextElement from "@/components/UI/TextElement.vue";

const getAlbums = async() =>{
  const response = await getRequest('/albums')
  return response.data.data
}
const albums = ref()
onMounted(async ()=>{
  albums.value = await getAlbums()
  console.log(albums.value)
})
</script>

<template>
<div class="p-1">
  <AlbumCreate class="album create" @createAlbum="albums.push($event)"/>
  <br>
  <el-container class="album-container">
    <el-container :key="album.id" v-for="album in albums" class="column">
      <router-link :to="{
        name: 'album',
        params: {
          album: album.id
        }
      }">
        <el-container class="album">
          {{album.title}}
        </el-container>
      </router-link>

    </el-container>
  </el-container >


</div>
</template>

<style scoped>

.album-container{
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
}
.create{
  align-self: center;
  margin: auto;

}
.album{
  display: flex;
  width: 7rem;
  height: 7rem;
  border: 1px solid white;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 5px;
}
.album:hover{
  cursor: pointer;
  filter: contrast(70%);
}
</style>