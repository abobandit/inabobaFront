import {defineStore} from 'pinia'
import {type Ref, ref} from "vue";
import {type UserResponseData} from "@/types/UserType"

export const useUserStore = defineStore('user',()=>{
    const user= ref<UserResponseData>({
        id: null,
        login: null,
        email: null,
        first_name:null,
        last_name:null,
        profile_pic:null,
        role:null,
        email_verified_at: null,
        created_at: null,
        updated_at: null,
        token: null
    })
    const isAuth = ref<boolean>(false)

    return { user,isAuth}
})