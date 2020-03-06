import Vue from "vue";
import VueRouter from "vue-router";

// 引入页面
import home from "@/pages/home.vue";
import noPath from "@/pages/404.vue";
import discern from "@/pages/discern.vue";
import intro from "@/pages/intro.vue";
import news from "@/pages/news.vue";
Vue.use(VueRouter);

//处理重复路由报错
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push (location) {
    return originalPush.call(this, location).catch(err => err)
};
const routes = [
    // 重定向
    {
        path: '/',
        redirect: '/home'
    },
    {
        meta: {
            title: '首页'
        },
        path:"/home",
        component: home
    },
    {
        meta: {
            title: '认识毒品'
        },
        path:"/discern",
        component: discern
    },
    {
        meta: {
            title: '禁毒资讯'
        },
        path:"/news",
        component: news
    },
    {
        meta: {
            title: '禁毒1号馆'
        },
        path:"/intro",
        component: intro
    },
    {
        path: '*',
        name: '404',
        component: noPath
    },
];

const router =  new VueRouter({
    routes
});

router.beforeEach((to,from,next)=>{//跳转限制
    //修改标题
    if (to.meta.title) {
        document.title = to.meta.title;
    }
    next();
});

export default router;
