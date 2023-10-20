import {createRouter, createWebHistory, type RouteLocationNormalized} from 'vue-router'
import unauthorizedRequest from "@/api/unauthorizedRequest";
import AuthorizedView from "@/views/AuthorizedView.vue";

const MessengerView = () => import("@/views/MsgView.vue"),
    NewsView = () => import("@/views/NewsView.vue"),
    ProfileView = () => import("@/views/ProfileView.vue"),
    FriendsView = () => import("@/views/FriendsView.vue"),
    AuthorizedView = () => import("@/views/AuthorizedView.vue")


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: AuthorizedView,
            children: [
                {
                    path: '/news',
                    name: 'news',
                    component: NewsView
                },
                {
                    path: '/messenger',
                    name: 'messenger',
                    component: MessengerView
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
router.beforeEach((to: RouteLocationNormalized) => {
    console.log(123)
    return true
})
export default router
