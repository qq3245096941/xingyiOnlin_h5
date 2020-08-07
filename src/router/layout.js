import main from '../views/main/index.vue';
import notice from '../views/main/notice.vue';
import my from '../views/main/my.vue';

export default [
    {
        path: 'main',
        name: 'main',
        component: main,
        meta: {
            title: '首页'
        }
    },
    {
        path: 'notice',
        name: 'notice',
        component: notice,
        meta: {
            title: '公告'
        }
    },
    {
        path: 'my',
        name: 'my',
        component: my,
        meta: {
            title: '我的'
        }
    }
]
