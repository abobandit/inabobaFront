<template>
  <div class="bg-black  h-screen w-screen flex flex-col bg-gradient-to-b
            from-[#1C1C1C]
            to-black">
    <div class="px-8 py-3 bg-slate-200 w-fit flex flex-col rounded-xl m-auto">
      <h2 class="text-center text-black mb-5">Авторизация</h2>
      <form class="flex flex-col text-black items-center relative" @submit.prevent>
        <span class="text-red-600 text-[.8rem] w-1/2"
              v-html="error"
              v-show="hasError"></span>

        <input v-model="userRequest.email"
               class="w-min px-1 py-0.5 rounded-lg outline-none hover:bg-gray-100 focus:border focus:border-black mb-5"
               placeholder="Введите вашу почту" type="email">
        <input v-model="userRequest.password"
               class="w-min px-1 py-0.5  rounded-lg outline-none hover:bg-gray-100 focus:border focus:border-black mb-5"
               placeholder="Введите ваш пароль" type="password">
        <input @click.prevent="logInRequest()"
               class="justify-self-center w-min text-black px-1 py-0.5 rounded-lg outline-none hover:bg-gray-100 focus:border focus:border-black mb-5 bg-white "
               value="Отправить"
               type="button">

      </form>
      <router-link class="self-center" :to="{name:'signUp'}" v-if="!isAuth">
        <button
            class="mx-auto p-1 text-center rounded-lg text-black  outline-none hover:bg-gray-100 focus:border focus:border-black mb-5 bg-white">
          Регистрация
        </button>
      </router-link>
    </div>

  </div>
</template>

<script lang="ts" setup>
import unauthorizedRequest from "../api/unauthorizedRequest";
import {onMounted, type Ref, ref} from "vue";
import {useUserStore} from "../stores/user";
import {storeToRefs} from "pinia";
import router from "../router";
import type {UserRequestLogIn, ResponseData, UserResponseData} from "@/types/UserType";
import type {AxiosResponse} from "axios";

const userRequest = ref<UserRequestLogIn>({
  email: '',
  password: '',
})
const hasError = ref<boolean>(false)
const useUser = useUserStore()
const error = ref<string>('')
const {isAuth, user} = storeToRefs(useUser)
const logInRequest = (): Promise<AxiosResponse<any>|void> => {
  return unauthorizedRequest<UserRequestLogIn>({
    url: '/login',
    data: {
      email: userRequest.value.email,
      password: userRequest.value.password
    }
  })
      .then(response => {
        user.value = response.data.user
        console.log(user.value)
        if (response?.data.status) {
          isAuth.value = true
          if (isAuth.value) {
            localStorage.setItem('user', JSON.stringify(response.data.user))
            router.push('/news')
          } else {
            hasError.value = true
          }
        }
          })
      .catch(reason => {
        hasError.value = true
        error.value = reason.response.data.message
      })
}


/*const assignValues = async () => {
  const response = await logInRequest()
  user.value = response.data.user
  console.log(user.value)
  if (response?.data.status) {
    isAuth.value = true
    if (isAuth.value) {
      localStorage.setItem('user', JSON.stringify(response.data.user))
      router.push('/news')
    } else {
      hasError.value = true
    }
  }
}*/
</script>

<style scoped>

</style>
