<template>
  <div class="bg-black  h-screen w-screen flex flex-col bg-gradient-to-b
            from-[#1C1C1C]
            to-black">
    <div class="px-8 py-3 bg-slate-200 w-fit rounded-xl m-auto">
      <h2 class="text-center mb-5">Уже авторизованы?</h2>

      <router-link :to="{name:'logIn'}" v-if="!isAuth">
        <button
            class="w-full mx-auto p-1 text-center rounded-lg text-black outline-none hover:bg-gray-100 focus:border focus:border-black mb-5 bg-white">
          Войти
        </button>
      </router-link>
      <h2 class="text-center  mb-5">Регистрация</h2>
      <form @input="hasError=false" class="flex flex-col items-center relative text-black" @submit.prevent>
        <span class="text-red-600 text-[.8rem]" v-text="error"  v-show="hasError"></span>
        <InputUI placeholder="e-mail" v-model="userRequest.email" type="email"/>
        <InputUI placeholder="Логин" v-model="userRequest.login"/>
        <InputUI placeholder="имя" v-model="userRequest.first_name"/>
        <InputUI placeholder="фамилия" v-model="userRequest.last_name"/>
        <InputUI placeholder="пароль" v-model="userRequest.password" type="password"/>

        <input @click.prevent="signingUp()"
               class="justify-self-center w-min px-1 py-0.5 rounded-lg outline-none hover:bg-gray-100 focus:border focus:border-black mb-5 bg-white "
               value="Отправить"
               type="button">

      </form>

    </div>

  </div>

</template>

<script lang="ts" setup>
import {ref} from "vue";
import unauthorizedRequest from "../api/unauthorizedRequest";
import router from "../router";
import InputUI from "@/components/UI/InputUI.vue";
import {useUserStore} from "../stores/user";
import {storeToRefs} from "pinia/dist/pinia";
import type {Ref} from "vue";
import type {UserRequestSignUp} from "@/types/UserType";
import type {AxiosError} from "axios";
const useUser = useUserStore()
const {isAuth,user} = storeToRefs(useUser)
const userRequest:Ref<UserRequestSignUp> = ref({
  email: '',
  login: '',
  first_name: '',
  last_name: '',
  password: ''
})
const hasError = ref(false)
const error = ref('')
//Попытка войти
const signingUp = async () => {
  try {
    const request = await unauthorizedRequest({
      url:'/signup',
      data:{
        first_name: userRequest.value.first_name,
        last_name: userRequest.value.last_name,
        login: userRequest.value.login,
        password: userRequest.value.password,
        email: userRequest.value.email
      }
      })
    console.log(request.data)
    await router.push('/login')
  } catch (e:any) {
    hasError.value  = true
    error.value = e.response.data.message
  }

}
</script>
