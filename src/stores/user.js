import { defineStore } from 'pinia';
import { ref } from "vue";
import {} from "@/types/UserType";
export const useUserStore = defineStore('user', () => {
    const user = ref({
        id: null,
        first_name: null,
        last_name: null,
        login: null,
        role: null,
        img_url: null,
        email: null
    });
    const token = null;
    return { user, token };
});
