import { createRouter, createWebHistory } from 'vue-router';
const MessengerView = () => import("@/views/MsgView.vue"), NewsView = () => import("@/views/NewsView.vue"), ProfileView = () => import("@/views/ProfileView.vue"), FriendsView = () => import("@/views/FriendsView.vue");
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            redirect: 'news',
        },
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
        }
    ]
});
export default router;
