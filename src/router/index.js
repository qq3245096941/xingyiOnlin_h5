import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'index',
        component: () => import('../views/index.vue')
    },
    {
        path: '/notice',
        name: 'notice',
        component: () => import('../views/notice.vue')
    },
    {
        path: '/my',
        name: 'my',
        component: () => import('../views/my.vue')
    }
]

const router = new VueRouter({
    routes
})

export default router
