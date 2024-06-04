<script setup lang="ts">
import {ref} from "vue";
import { ElButton, ElDialog, ElUpload,  ElMessageBox } from 'element-plus'
import {useDark} from "@vueuse/core";
import {getRequest} from "@/api/getRequest";
import {useUserStore} from "@/stores/user";
import {storeToRefs} from "pinia";
import axios from "axios";

const userLocal = JSON.parse(localStorage.getItem('user') ??"no token")
const token = userLocal.token
const useUser = useUserStore()
const {user} = storeToRefs(useUser)
const fileDialogVisible = ref(false)
const modalVisible = ref(false)
const selectedFile = ref(null)
const open =  () =>{
  ElMessageBox.alert(
      'Выбранное фото',
      'Подтверждение загрузки фото',
      {
        customStyle: 'background: black',
        confirmButtonText: 'OK',
        cancelButtonText: 'Отмена',
      }
  )
      .then(async () => {
        const formData = new FormData();
        formData.append("profile_pic",selectedFile.value);
        console.log(formData)
        const response = await axios.patch('/users/'+ user.value.id,formData,{
          headers:{
            withCredentials: true,
            "Access-Control-Allow-Origin":'*',
            Authorization: 'Bearer ' + token,
            'Content-Type': 'multipart/form-data',
            'Accept': 'multipart/form-data',
          }
        })
        console.log(response)
        ElMessage({
          type: 'success',
          message: 'Установлено фото',
        })
        return response
      })
      .catch(() => {
        ElMessage({
          type: 'info',
          message: 'Отмена',
        })
      })
}
const appendFiles = (file: object) => {
  selectedFile.value = file[0]
  console.log(selectedFile.value)
}
const handleFileChange = (file) => {
  selectedFile.value = file.raw
}

const submitForm = () => {
  modalVisible.value = true
}
</script>

<template>
  <div>
    <label for="file-input">
        <input @change="appendFiles($event.target.files)" id="file-input"  accept=".jpg, .png"  type="file" @click="open">
      <slot @click="openFileDialog">

      </slot>
    </label>


    <el-dialog v-model="fileDialogVisible" title="Выберите файл">
      <el-upload
          :action="uploadUrl"
          :auto-upload="false"
          :show-file-list="false"
          @change="handleFileChange"
          accept=".jpg, .png"
      >
        <template #trigger>
          <el-button>Выбрать файл</el-button>
        </template>
      </el-upload>

      <template #footer>
        <el-button @click="fileDialogVisible = false">Отмена</el-button>
        <el-button type="primary" @click="submitForm">Подтвердить</el-button>
      </template>
    </el-dialog>

  </div>
</template>

<style scoped>
div{
  color: black;
}


input[type=file] {
  display: none;
}


</style>