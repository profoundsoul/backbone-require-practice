import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);
var mappingRouters = [];

mappingRouters.push({ 
	path: '/', 
	name: '/', 
	component: resolve => require(['./views/index.vue'], resolve) 
});
mappingRouters.push({ 
	path: '/index', 
	name: 'index', 
	component: resolve => require(['./views/index.vue'], resolve) 
});
mappingRouters.push({ 
	path: '/list', 
	name: 'list', 
	component: resolve => require(['./views/list.vue'], resolve) 
});
mappingRouters.push({
	path:'/login',
	name:'login',
	component:resolve=>require(['./login.vue'], resolve)
});


const router = new VueRouter({routes: mappingRouters});
export default router
