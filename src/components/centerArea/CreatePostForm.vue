<script lang="ts" setup>
import {ref} from "vue";
import type {UploadInstance,UploadUserFile , UploadProps, ElMessage} from 'element-plus'

import TextEditor from "@/components/centerArea/TextEditor.vue";

const uploadRef = ref<UploadInstance>()
const fileList = ref<UploadUserFile[]>()
const content = ref<string | null>(null)
const files = ref<object[]>([])
const updateContent = (newContent: string) => {
  content.value = newContent
};

const test = (e: object) => {
  console.log(e)
}
const rem = (sth: object) =>{
  removeFiles(sth)
}
const removeFiles = (file:object) => {
  const newFileArray = files.value.filter(element => "uid" in element && "uid" in file ?  element.uid !== file.uid : "nothing to remove")
  console.log(newFileArray)
  files.value = newFileArray
  return newFileArray
}
const appendFiles = (file: object) => {
  if(fileTypeCheck(file)) {
    console.log(fileList.value)
    return files.value.push(file)
  }
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
  const type = allowedTypes.filter(type => type === rawFile.raw.type)
  if (type.length === 0 ) {
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
    <div class="post">
      <el-image src="src/assets/images/uplogo.jpg" class="el-image"/>
      <!--@focusin="innerText ==='Что нового?'? innerText = '': true"
                        @focusout="innerText === '' ? innerText = 'Что нового?' : true"-->
      <TextEditor v-model="content" @input="updateContent"/>
      <!--      <mavon-editor v-model="content"/>-->
    </div>
    <el-upload
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
      <el-button class="el-button--large" size="large" @click="submitUpload(content,uploadRef)" type="primary" round>
        Поделиться
      </el-button>
    </el-upload>
  </div>
</template>

<style scoped>
.centerarea .top h2 {
  font-family: sans-serif;
  font-size: 20px;
  cursor: pointer;
}

.post {
  display: grid;
  grid-template-columns: 1fr 9fr;
  grid-column-gap: 1rem;
}

.el-button--large {
  grid-column-start: -1;
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
  border-bottom: 1px solid rgba(232, 232, 232, 0.83);
}

.tweet > * {
  margin-bottom: 1.5rem;
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