import Vue from 'vue'
import VueRouter from 'vue-router'

import layout from '../views/layout.vue'
import layoutJs from './layout.js'

import layoutNoTab from "@/views/layoutNoTab";
import layoutNoTabJs from './layoutNoJs/layoutNoJs'

import layoutNoAll from './layoutNoAll.js'

Vue.use(VueRouter);

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

const routes = [
	{
		path:'/',
		redirect:'/layout/main'
	},
	/*这个是有底部栏的页面*/
	{
		path: '/layout',
		component: layout,
		children: [
			...layoutJs
		]
	},
	/*这个是没有底部栏的页面*/
	{
		path: '/layoutNoTab',
		component: layoutNoTab,
		children: [
			...layoutNoTabJs
		]
	},
	/* 这是全局页面 */
	...layoutNoAll
]

const router = new VueRouter({
	routes
})

export default router
