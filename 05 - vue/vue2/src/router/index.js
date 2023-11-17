import Vue from 'vue';
import Router from 'vue-router';

// 使用（注册）vue-router
Vue.use(Router);

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/home/home.vue')
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('../views/about/about.vue')
    },
    {
        path: 'refresh',
        name: 'refresh',
        component: () => import('../components/refresh/refresh.vue')
    }
];

export default new Router({
    mode: 'history',
    routes
});
