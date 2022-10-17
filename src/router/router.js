import Main from '@/pages/Main';
import CommentPage from '@/pages/CommentPage';
import AboutPage from '@/pages/AboutPage';
import CommentDetail from '@/pages/CommentDetail'
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        component: Main,
    },
    {
        path: '/comment',
        component: CommentPage
    },
    {
        path: '/about',
        component: AboutPage
    },
    {
        path: '/comment/:id',
        component: CommentDetail
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;