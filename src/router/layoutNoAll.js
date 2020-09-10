import login from '@/views/layoutNoAll/login';
import register from "@/views/layoutNoAll/register";
import authorization from "@/views/layoutNoAll/authorization";

export default [
	{
	    path: '/login',
	    name: 'login',
	    component: login,
	    meta: {
	        title: '登录'
	    }
	},
	{
		path: '/register',
		name: 'register',
		component: register,
		meta: {
			title: '注册'
		}
	},
	{
		path: '/authorization',
		name: 'authorization',
		component: authorization,
		meta: {
			title: '微信授权'
		}
	},

]
