import {defineStore} from 'pinia'
import {ref} from "vue";
import {type UserStateType} from "@/types/UserType"
import type {StrOrNull} from "@/types/GeneralTypes";

export const useUserStore = defineStore('user',()=>{
    const user = ref<UserStateType>({
        id: null,
        first_name: null,
        last_name: null,
        login: null,
        role:null,
        img_url:null,
        email:null
    })
    const token:StrOrNull = null

    return { user, token}
})