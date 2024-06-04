<script lang="ts" setup>
import {ref} from "vue";
import type {ElMessage, UploadInstance, UploadUserFile} from 'element-plus'

import TextEditor from "@/components/centerArea/TextEditor.vue";
import {storeToRefs} from "pinia/dist/pinia";
import {useUserStore} from "@/stores/user";
import {getRequest} from "@/api/getRequest";

const uploadRef = ref<UploadInstance>()
const fileList = ref<UploadUserFile[]>()
const content = ref<string | null>(null)
const files = ref<object[]>([])
const {user} = storeToRefs(useUserStore())

const createPost = async () => {
  const response = await getRequest('/posts', {
    method: "POST",
    data: {
      content: content.value
    }
  })
}
const updateContent = (newContent: string) => {
  content.value = newContent
}

const test = (e: object) => {
  console.log(e)
}

const appendFiles = (file: object) => {
    fileList.value = file[0]
  // else uploadRef.value.remo
}

const createRequest = (postText: string, files: object[]): any => {
  console.log(postText, files)
}
const allowedTypes: string[] = [
  'image/jpeg',
  'image/png',
  'image/jpg',
  'video/mp4',
  'image/gif'
]
const fileTypeCheck = (rawFile: object) => {
  console.log(rawFile)
  const type = allowedTypes.filter(type => type === rawFile.raw.type)
  if (type.length === 0) {
    ElMessage.error('Avatar picture must be JPG, PNG, GIF or MP4 format!')
    return false
  } else if (rawFile.size / 1024 / 1024 > 2) {
    ElMessage.error('Avatar picture size can not exceed 2MB!')
    return false
  }
  return true

}
const submitUpload = (postText: string | null, files: object[]) => {
  // createRequest(postText,files)
  console.log(uploadRef.value.get())
  // uploadRef.value!.submit()
}
</script>
<template>
  <div class="tweet">
    <el-image :src="user.profile_pic??'src/assets/images/uplogo.jpg'" class="el-image"/>
    <div class="container">

      <div class="post">
        <!--@focusin="innerText ==='Что нового?'? innerText = '': true"
                          @focusout="innerText === '' ? innerText = 'Что нового?' : true"-->
        <TextEditor v-model="content" placeholder="Что у вас нового?"/>
        <el-button @click="createPost()" type="primary">Отправить</el-button>
      </div>
      <div class="fileupload">
        <input @change="appendFiles($event.target.files)" type="file" accept="image/jpeg,  image/png,  image/jpg, video/mp4,  image/gif">
        <div class="fileupload__handler">
          Выберите файл
        </div>
      </div>
    </div>

<!--        <el-upload
            ref="uploadRef"
            list-type="text"
            class="upload-demo"
            action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
            :auto-upload="false"
            :multiple="true"
            :on-remove="rem"
            :on-change="appendFiles"
        >
          <template #trigger>
            <el-container class="el-container">
              <el-icon>
                <el-button size="small" type="info">Загрузить</el-button>
              </el-icon>
            </el-container>
          </template>
          <el-button class="el-button&#45;&#45;large" size="large" @click="submitUpload(content,uploadRef)" type="primary" round>
            Поделиться
          </el-button>
        </el-upload>-->
  </div>
</template>

<style scoped>

.post {
  display: grid;
  grid-template-columns: 11fr 1fr;
  grid-column-gap: 1rem;
}

.el-button--large {
  grid-column-start: -1;
}

.fileupload {
  width: fit-content;
}

.fileupload__handler {
  font-size: .8rem;
  background: white;
  border-radius: .4rem;
  padding: 5px 10px;
  color: black;
  text-align: center;
  width:8rem;

}

.fileupload > input[type=file] {
  opacity: 0;
  width: 8rem;
  position: absolute;
  cursor: pointer
}

.el-container > * {
  width: fit-content;
  height: fit-content;
  padding: 0;
  margin: 0;
}

.el-image {
  max-width: 2.5rem;
  max-height: 2.5rem;
  border-radius: 99999px;
}

.upload-demo {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 1fr);
}

.upload-demo > * {
  width: min-content;
}

.tweet {
  padding: 1rem;
  display: grid;
  grid-template-columns: 1fr 10fr;
  border-bottom: 1px solid rgba(232, 232, 232, 0.83);
}

.container > * {
  margin-bottom: 1.5rem;
}
.container{
  padding: 1rem 1rem  0;
  display:grid;
  grid-template-columns: minmax(1fr,50px) 11fr;
}
.el-upload__tip:hover {
  background: rgba(44, 34, 34, 0.7);
}

@media (max-width: 900px) {
}

@media (min-width: 900px) {
}

@media (min-width: 800px) and (max-width: 1000px) {
}

@media (min-width: 1000px) and (max-width: 1200px) {
}

@media (min-width: 1200px) and (max-width: 1600px) {
}

@media (min-width: 1600px) and (max-width: 1800px) {
}

@media (min-width: 1800px) {
}
</style>