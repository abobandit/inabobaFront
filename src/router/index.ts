import {createRouter, createWebHistory} from 'vue-router'
import {useUserStore} from "@/stores/user";
import {storeToRefs} from "pinia";
import axios from "axios";
import {ref} from "vue";

const MessengerView = () => import("@/views/MessengerUsersList.vue"),
    NewsView = () => import("@/views/NewsView.vue"),
    ProfileView = () => import("@/views/ProfileView.vue"),
    FriendsView = () => import("@/views/FriendsView.vue"),
    AuthorizedView = () => import("@/views/AuthorizedView.vue"),
    LoginPage = () => import("@/pages/LoginPage.vue"),
    SignUpPage = () => import("@/pages/SignUpPage.vue"),
    ChatView = () => import("@/views/ChatView.vue")

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/logIn',
            name: 'logIn',
            component: LoginPage
        },
        {
            path: '/signUp',
            name: 'signUp',
            component: SignUpPage
        },

        {
            path: '/',
            component: AuthorizedView,
            meta: {
                requiresAuth: true
            },
            children: [
                {
                    path: '/news',
                    name: 'news',
                    component: NewsView
                },
                {
                    path: '/messenger',
                    name: 'messenger',
                    component: MessengerView,
                },
                {
                    path: '/messenger/:chat',
                    name: 'chat',
                    component: ChatView
                },
                {
                    path: '/profile',
                    name: 'profile',
                    component: ProfileView
                },
                {
                    path: '/friends',
                    name: 'friends',
                    component: FriendsView
                },
            ]
        },


    ]
})
router.beforeEach((to, from) => {
    console.log('проверяется аутентификация')
    const {isAuth, user} = storeToRefs(useUserStore())
    const lStorage = localStorage.getItem("user")
    if (lStorage!== null && to.meta.requiresAuth){
        console.log(123141)
    const userLocalStorage = ref(JSON.parse(lStorage))
    if(userLocalStorage.value){
        user.value = userLocalStorage.value
    }
    console.log(user.value.token)

    axios.get('/authUser', {
        headers: {
            Authorization: 'Bearer ' + user.value.token
        }
    })
        .then(response => {
            isAuth.value = true
            console.log(1235123541)
            if (to.meta.requiresAuth === false) {
                console.log('aboba')
                return {name: "news"}
            }else {
                console.log(1234)
                return {name: to.name}
            }
        })
        .catch(reason => {
            console.log(reason.response.data)
            isAuth.value = false
            if (to.meta.requiresAuth) {
                return '/logIn'
            }else return {name:to.name}
        })
    }else if(!lStorage && to.meta.requiresAuth){
        console.log('авторизованный путь без авторизации')
        return '/logIn'
    } else if(!lStorage&& !to.meta.requiresAuth){
        console.log('Неавторизованный путь')
        console.log(to.name)
    }
})
export default router
