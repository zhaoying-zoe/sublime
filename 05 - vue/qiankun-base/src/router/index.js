import vueRouter from 'vue-router'

const router = new vueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Main',
            component: () => import('@/views/Main.vue')
        },
        {
            path: '/home',
            name: 'Home',
            component: () => import('@/views/Home.vue')
        },
        {
            path: '/about',
            name: 'About',
            component: () => import('@/views/About.vue')
        },
        {
            path: '*',
            name: 'error-page',
            component: () => import('@/views/errorPage/error-page.vue')
        }
    ]
})

export default router;
