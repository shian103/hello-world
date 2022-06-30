// 引入Vue|Vue-router
import Vue from "vue";
import { Router } from "vue-router";

// 使用路由插件
Vue.use(Router);

// 引入最外层骨架的一级路由组件
// import Layout from "@/layouts";
// 配置路由
/**
 * constantRoutes 常量路由
 * 没有权限要求的基本页面
 * 可以访问所有角色
 */
export const constantRoutes = [
  {
    path: "/login",
    component: () => import("@/views/login/login"),
    hidden: true,
  },
  {
    path: "/404",
    component: () => import("@/views/errorPage/404"),
    hidden: true,
  },
];

// 异步路由
export const asyncRoutes = [];
// 任意路由: 当路径出现错误的时候重定向404
export const anyRoutes = { path: "*", redirect: "/404", hidden: true };
const createRouter = () =>
  new Router({
    // mode: 'history', // 需要服务支持
    scollBehavior: () => ({ y: 0 }),
    routes: constantRoutes,
  });
const router = createRouter();

export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

export default router;
