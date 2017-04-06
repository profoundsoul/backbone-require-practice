import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const router = new VueRouter({
    routes: [
        { path: '/index', name: '/index', component: resolve => require(['./views/index.vue'], resolve) },
        { path: '/list', name: '/list', component: resolve => require(['./views/list.vue'], resolve) },
        // { path: '/', name: '/', component: resolve => require(['./views/index.vue'], resolve) }
    ]
});
export default router
